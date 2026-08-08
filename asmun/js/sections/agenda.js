// ASMUN — sections/agenda.js
// Live agenda: the resolution deadline as a large prominent countdown, a countdown
// to the next session, and the session list with the current session highlighted.
//
// One setInterval drives every clock on the page. It ticks each second, but only
// writes to the DOM when a rendered string actually changes, and it fully re-renders
// the list only when the *current* session changes — so the day costs almost nothing
// to keep live.
//
// TIMES: data/schedule.js stores wall-clock "HH:MM" plus one `timezone` offset for the
// whole day. Rows display the wall clock verbatim — that is what the dais will call out,
// and it stays correct no matter where the delegate's laptop thinks it is. Only the
// countdowns convert to real instants, using date + time + timezone.
//
// CLOCK OVERRIDE: ?now=<ISO timestamp> pretends it is that moment, so the mid-session
// states can be previewed without waiting for the conference. Documented in
// data/schedule.js. Without it, the real clock is used.

import { schedule } from '../../data/schedule.js?v=5';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=5';

const SECOND = 1000;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** "2026-08-10" -> "10 August 2026". Built from the string parts, so no timezone can shift it. */
function longDate(iso) {
  const [year, month, day] = String(iso ?? '').split('-').map(Number);
  if (!year || !month || !day) return String(iso ?? '');
  return `${day} ${MONTHS[month - 1] ?? month} ${year}`;
}

/** The one heading every row groups under, e.g. "Day 2 — Monday 10 August 2026". */
const dayHeading = [
  schedule.conferenceDay,
  [schedule.dayOfWeek, longDate(schedule.date)].filter(Boolean).join(' '),
]
  .filter(Boolean)
  .join(' — ');

/** date + "HH:MM" + offset -> epoch ms. NaN if any part is missing or malformed. */
function instant(time) {
  if (!schedule.date || !time) return NaN;
  return Date.parse(`${schedule.date}T${time}:00${schedule.timezone ?? ''}`);
}

/** Parsed once. Invalid timestamps become NaN and are reported rather than hidden. */
const entries = (schedule.sessions ?? []).map((session) => ({
  ...session,
  session: dayHeading,
  startMs: instant(session.start),
  endMs: instant(session.end),
  isDeadline: session.type === 'deadline',
}));

const invalid = entries.filter((e) => Number.isNaN(e.startMs) || Number.isNaN(e.endMs));
if (invalid.length) {
  console.warn(
    '[agenda] unparseable times in data/schedule.js:',
    invalid.map((e) => e.id)
  );
}

// --- clock -----------------------------------------------------------------
let clockOffset = 0;
try {
  const override = new URLSearchParams(window.location.search).get('now');
  if (override) {
    const parsed = Date.parse(override);
    if (Number.isNaN(parsed)) {
      console.warn(`[agenda] ignoring unparseable ?now= value: ${override}`);
    } else {
      clockOffset = parsed - Date.now();
      console.info(`[agenda] clock overridden to ${new Date(parsed).toISOString()}`);
    }
  }
} catch (err) {
  // URLSearchParams unavailable or location blocked — fall back to the real clock.
}

const now = () => Date.now() + clockOffset;

// --- formatting ------------------------------------------------------------
/** The conference wall clock, straight from the data. */
function clockRange(entry) {
  if (!entry.start) return 'time not set';
  if (!entry.end || entry.end === entry.start) return entry.start;
  return `${entry.start} – ${entry.end}`;
}

/** Split a duration into padded parts. Days only appear when there are any. */
function breakdown(ms) {
  const total = Math.max(0, Math.floor(ms / SECOND));
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const parts = [];
  if (days > 0) parts.push({ value: days, unit: days === 1 ? 'day' : 'days' });
  if (days > 0 || hours > 0) parts.push({ value: hours, unit: 'hr' });
  parts.push({ value: minutes, unit: 'min' });
  parts.push({ value: seconds, unit: 'sec' });
  return parts;
}

function pad(value, unit) {
  return unit === 'day' || unit === 'days' ? String(value) : String(value).padStart(2, '0');
}

/** Renders digit groups into a container, reusing nodes so only text changes. */
function paintCountdown(container, ms, expiredText) {
  if (ms <= 0) {
    if (container.dataset.state !== 'expired') {
      container.dataset.state = 'expired';
      container.replaceChildren(el('span', { class: 'cd__expired', text: expiredText }));
    }
    return;
  }

  const parts = breakdown(ms);
  const signature = parts.map((p) => p.unit).join('|');

  if (container.dataset.state !== signature) {
    container.dataset.state = signature;
    container.replaceChildren(
      ...parts.map((part) =>
        el('span', { class: 'cd__unit' }, [
          el('span', { class: 'cd__value', text: pad(part.value, part.unit) }),
          el('span', { class: 'cd__label', text: part.unit }),
        ])
      )
    );
  }

  const values = container.querySelectorAll('.cd__value');
  parts.forEach((part, i) => {
    const next = pad(part.value, part.unit);
    if (values[i] && values[i].textContent !== next) values[i].textContent = next;
  });
}

// --- state ------------------------------------------------------------------
// The deadline row in the session list is the countdown target. If nobody marked one
// type: 'deadline', fall back to resolutionDeadline.time so the card still counts.
const deadlineEntry =
  entries.filter((e) => e.isDeadline).sort((a, b) => a.startMs - b.startMs)[0] ?? null;

const deadlineMs = deadlineEntry
  ? deadlineEntry.startMs
  : instant(schedule.resolutionDeadline?.time);

const deadlineWhen = deadlineEntry
  ? `${dayHeading} · ${clockRange(deadlineEntry)}`
  : schedule.resolutionDeadline?.time
    ? `${dayHeading} · ${schedule.resolutionDeadline.time}`
    : 'No deadline set in schedule.js.';

function currentEntry(t) {
  return entries.find((e) => t >= e.startMs && t < e.endMs) ?? null;
}

/** Next session to start. The deadline marker is excluded — it has its own big card. */
function nextUp(t) {
  return (
    entries
      .filter((e) => !e.isDeadline && e.startMs > t)
      .sort((a, b) => a.startMs - b.startMs)[0] ?? null
  );
}

function statusOf(entry, t) {
  if (Number.isNaN(entry.startMs)) return 'unknown';
  if (t >= entry.startMs && t < entry.endMs) return 'now';
  if (entry.endMs <= t) return 'done';
  return 'upcoming';
}

// --- rendering ---------------------------------------------------------------
function agendaRow(entry, ctx) {
  const t = now();
  const status = statusOf(entry, t);
  const q = ctx.query;

  const row = el('article', {
    class: `agenda-row agenda-row--${status}${entry.isDeadline ? ' agenda-row--deadline' : ''}`,
    dataset: { entryId: entry.id },
  });

  row.append(
    el('div', { class: 'agenda-row__time' }, [
      el('span', { class: 'agenda-row__clock', text: clockRange(entry) }),
      status === 'now' ? el('span', { class: 'badge badge--now', text: 'NOW' }) : null,
      status === 'done' ? el('span', { class: 'agenda-row__done', text: 'done' }) : null,
    ])
  );

  const body = el('div', { class: 'agenda-row__body' });
  body.append(el('h4', { class: 'agenda-row__label' }, [highlight(entry.name, q)]));
  if (entry.isDeadline) {
    body.append(el('span', { class: 'badge badge--danger', text: 'DEADLINE' }));
  } else if (entry.type) {
    body.append(el('span', { class: 'badge badge--type', text: entry.type.toUpperCase() }));
  }
  if (entry.whatsHappening) {
    body.append(el('p', { class: 'agenda-row__note' }, [highlight(entry.whatsHappening, q)]));
  }
  row.append(body);

  return row;
}

export function initAgenda() {
  const section = mountSection({
    id: 'agenda',
    title: 'Agenda',
    blurb:
      `${dayHeading}. Times are a template built from the standard committee structure — ` +
      'replace them in data/schedule.js once the real ASMUN schedule lands.',
    items: entries,
    itemView: agendaRow,
    renderList: (container, items, ctx) => {
      const frag = document.createDocumentFragment();
      for (const [session, rows] of groupBy(items, (e) => e.session)) {
        frag.append(el('h3', { class: 'group-heading' }, [highlight(session, ctx.query)]));
        rows.forEach((entry) => frag.append(agendaRow(entry, ctx)));
      }
      container.replaceChildren(frag);
    },
    controls: {
      search: true,
      searchLabel: 'Filter agenda',
      searchPlaceholder: 'caucus, crisis, deadline…',
    },
    searchIndex: (entry) => ({
      title: entry.name,
      snippet: `${entry.session} · ${clockRange(entry)}`,
      keywords: `${entry.type ?? ''} ${entry.whatsHappening ?? ''}`,
    }),
  });

  if (!section) return null;

  // The two live countdowns sit above the list, inserted after the section blurb.
  const host = document.getElementById('agenda');
  const dash = el('div', { class: 'agenda-dash' });

  // Prominent: resolution deadline.
  const deadlineCd = el('div', { class: 'cd cd--deadline', role: 'timer' });
  const deadlineCard = el('div', { class: 'card card--raised deadline-card' }, [
    el('p', {
      class: 'deadline-card__eyebrow',
      text: schedule.resolutionDeadline?.label ?? 'Resolution deadline',
    }),
    deadlineCd,
    el('p', { class: 'deadline-card__when', text: deadlineWhen }),
  ]);
  if (schedule.resolutionDeadline?.note) {
    deadlineCard.append(
      el('p', { class: 'deadline-card__note', text: schedule.resolutionDeadline.note })
    );
  }
  dash.append(deadlineCard);

  // Secondary: next session / current session.
  const nextCd = el('div', { class: 'cd cd--next', role: 'timer' });
  const nextLabel = el('p', { class: 'next-card__label', text: '—' });
  const nowLabel = el('p', { class: 'next-card__now' });
  const nextCard = el('div', { class: 'card next-card' }, [
    nowLabel,
    el('p', { class: 'next-card__eyebrow', text: 'Next session' }),
    nextLabel,
    nextCd,
  ]);
  dash.append(nextCard);

  host.insertBefore(dash, host.querySelector('.section-controls') ?? host.querySelector('.section-list'));

  // --- tick ------------------------------------------------------------------
  let lastCurrentId = undefined;

  function tick() {
    const t = now();

    if (!Number.isNaN(deadlineMs)) {
      paintCountdown(deadlineCd, deadlineMs - t, 'Deadline passed');
    } else if (deadlineCd.dataset.state !== 'none') {
      deadlineCd.dataset.state = 'none';
      deadlineCd.replaceChildren(el('span', { class: 'cd__expired', text: 'Not set' }));
    }

    const current = currentEntry(t);
    const next = nextUp(t);

    const nowText = current ? `In session: ${current.name}` : 'No session in progress';
    if (nowLabel.textContent !== nowText) nowLabel.textContent = nowText;
    nowLabel.className = `next-card__now${current ? ' next-card__now--live' : ''}`;

    const label = next ? next.name : 'No sessions remaining';
    if (nextLabel.textContent !== label) nextLabel.textContent = label;

    if (next) {
      paintCountdown(nextCd, next.startMs - t, 'Started');
    } else if (nextCd.dataset.state !== 'none') {
      nextCd.dataset.state = 'none';
      nextCd.replaceChildren(el('span', { class: 'cd__expired', text: '—' }));
    }

    // Only re-render the (potentially long) list when the highlighted row moves.
    const currentId = current ? current.id : null;
    if (currentId !== lastCurrentId) {
      lastCurrentId = currentId;
      section.update();
    }
  }

  tick();
  setInterval(tick, SECOND);

  return section;
}
