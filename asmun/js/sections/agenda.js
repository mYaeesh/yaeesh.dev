// ASMUN — sections/agenda.js
// Live agenda: the confirmed committee-open time as a large prominent countdown, a countdown
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
// CORRECTION PHASE — ESTIMATED TIMES.
// Only 14:30 (committee open) and the two 60-minute caucus DURATIONS are confirmed.
// Every other time is a flagged estimate. Rows carrying `timing` render with a `~` prefix
// on the clock, a red badge, and the reason inline — so an estimate can never be misread
// as an exact time called by the dais.
//
// There is NO fixed draft-resolution deadline in this committee's procedure. The prominent
// countdown card therefore targets committee open. (The `resolutionDeadline` key in
// data/schedule.js is retained as a legacy name; its label/note say what it actually is.)
//
// CLOCK OVERRIDE: ?now=<ISO timestamp> pretends it is that moment, so the mid-session
// states can be previewed without waiting for the conference. Documented in
// data/schedule.js. Without it, the real clock is used.

import { schedule } from '../../data/schedule.js?v=11';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=11';

const SECOND = 1000;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const TIMING_BADGE = {
  estimated: { text: 'TIME ESTIMATED', fallback: 'Start and duration are estimates, not confirmed.' },
  'estimated-start': { text: 'START ESTIMATED', fallback: 'Duration confirmed; start time is an estimate.' },
};

/** "2026-08-10" -> "10 August 2026". Built from the string parts, so no timezone can shift it. */
function longDate(iso) {
  const [year, month, day] = String(iso ?? '').split('-').map(Number);
  if (!year || !month || !day) return String(iso ?? '');
  return `${day} ${MONTHS[month - 1] ?? month} ${year}`;
}

/** The one heading every row groups under, e.g. "Conference Day — Monday 10 August 2026". */
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
  console.warn('[agenda] unparseable times in data/schedule.js:', invalid.map((e) => e.id));
}

// --- clock -----------------------------------------------------------------
let clockOffset = 0;
try {
  // URLSearchParams decodes "+" as a space, so the documented test URL
  // ?now=2026-08-10T15:30:00+05:00 arrives as "...00 05:00" and Date.parse rejects
  // it. Restore the offset sign here rather than making every caller percent-encode
  // it — "Z" and offset-less values pass through untouched.
  const raw = new URLSearchParams(window.location.search).get('now');
  const override = raw ? raw.replace(/ (\d{2}:?\d{2})$/, '+$1') : raw;
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
/**
 * The conference wall clock, straight from the data.
 * Estimated rows are prefixed with "~" so the number is never mistaken for an exact
 * time the dais called out.
 */
function clockRange(entry) {
  if (!entry.start) return 'time not set';
  const base = !entry.end || entry.end === entry.start ? entry.start : `${entry.start} – ${entry.end}`;
  return entry.timing ? `~${base}` : base;
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
// The prominent card targets committee open, taken from resolutionDeadline.time.
// No row is type:'deadline' any more — this committee has no fixed submission cutoff —
// so this falls through to the schedule-level value by design.
const deadlineEntry =
  entries.filter((e) => e.isDeadline).sort((a, b) => a.startMs - b.startMs)[0] ?? null;

const deadlineMs = deadlineEntry ? deadlineEntry.startMs : instant(schedule.resolutionDeadline?.time);

const deadlineWhen = deadlineEntry
  ? `${dayHeading} · ${clockRange(deadlineEntry)}`
  : schedule.resolutionDeadline?.time
  ? `${dayHeading} · ${schedule.resolutionDeadline.time} (UTC${schedule.timezone}) — CONFIRMED`
  : 'No anchor time set in schedule.js.';

function currentEntry(t) {
  return entries.find((e) => t >= e.startMs && t < e.endMs) ?? null;
}

/** Next session to start. Any deadline marker is excluded — it has its own big card. */
function nextUp(t) {
  return (
    entries.filter((e) => !e.isDeadline && e.startMs > t).sort((a, b) => a.startMs - b.startMs)[0] ?? null
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
    class: [
      'agenda-row',
      `agenda-row--${status}`,
      entry.isDeadline ? 'agenda-row--deadline' : '',
      entry.timing ? 'agenda-row--estimated' : '',
    ]
      .filter(Boolean)
      .join(' '),
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

  const timingBadge = TIMING_BADGE[entry.timing];
  if (timingBadge) {
    body.append(
      el('span', {
        class: 'badge badge--estimated',
        text: timingBadge.text,
        title: entry.timingNote || timingBadge.fallback,
      })
    );
  }
  if (entry.timingNote) {
    body.append(el('p', { class: 'agenda-row__timing-note', text: entry.timingNote }));
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
      `${dayHeading}. Committee opens ${schedule.resolutionDeadline?.time ?? '14:30'} Maldives time ` +
      `(UTC${schedule.timezone}) — CONFIRMED. Moderated and unmoderated caucuses are 60 min each — ` +
      'CONFIRMED. Every other time on this page is an ESTIMATE, marked with ~ and a red badge. ' +
      'Correct them in data/schedule.js as the dais posts them.',
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
      searchPlaceholder: 'caucus, roll call, adjourn…',
    },
    searchIndex: (entry) => ({
      title: entry.name,
      snippet: `${entry.session} · ${clockRange(entry)}`,
      keywords: `${entry.type ?? ''} ${entry.whatsHappening ?? ''} ${entry.timing ? 'estimated' : 'confirmed'}`,
    }),
  });

  if (!section) return null;

  // The two live countdowns sit above the list, inserted after the section blurb.
  const host = document.getElementById('agenda');
  const dash = el('div', { class: 'agenda-dash' });

  // Prominent: committee open (the only confirmed instant in the schedule).
  const deadlineCd = el('div', { class: 'cd cd--deadline', role: 'timer' });
  const deadlineCard = el('div', { class: 'card card--raised deadline-card' }, [
    el('p', {
      class: 'deadline-card__eyebrow',
      text: schedule.resolutionDeadline?.label ?? 'Committee opens',
    }),
    deadlineCd,
    el('p', { class: 'deadline-card__when', text: deadlineWhen }),
  ]);
  if (schedule.resolutionDeadline?.note) {
    deadlineCard.append(el('p', { class: 'deadline-card__note', text: schedule.resolutionDeadline.note }));
  }
  dash.append(deadlineCard);

  // Secondary: next session / current session.
  const nextCd = el('div', { class: 'cd cd--next', role: 'timer' });
  const nextLabel = el('p', { class: 'next-card__label', text: '—' });
  const nowLabel = el('p', { class: 'next-card__now' });
  const nextNote = el('p', { class: 'next-card__estimate' });
  const nextCard = el('div', { class: 'card next-card' }, [
    nowLabel,
    el('p', { class: 'next-card__eyebrow', text: 'Next session' }),
    nextLabel,
    nextCd,
    nextNote,
  ]);
  dash.append(nextCard);

  host.insertBefore(dash, host.querySelector('.section-controls') ?? host.querySelector('.section-list'));

  // --- tick ------------------------------------------------------------------
  let lastCurrentId = undefined;

  function tick() {
    const t = now();

    if (!Number.isNaN(deadlineMs)) {
      paintCountdown(deadlineCd, deadlineMs - t, 'Committee has opened');
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

    // Never let the secondary countdown imply precision it doesn't have.
    const estText = next && next.timing ? '⚠ Estimated start — not a confirmed time' : '';
    if (nextNote.textContent !== estText) nextNote.textContent = estText;
    nextNote.hidden = !estText;

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
