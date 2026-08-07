// ASMUN — sections/agenda.js
// Live agenda: the resolution deadline as a large prominent countdown, a countdown
// to the next milestone, and the session list with the current session highlighted.
//
// One setInterval drives every clock on the page. It ticks each second, but only
// writes to the DOM when a rendered string actually changes, and it fully re-renders
// the list only when the *current* entry changes — so a two-day agenda costs almost
// nothing to keep live.
//
// CLOCK OVERRIDE: ?now=<ISO timestamp> pretends it is that moment, so the mid-session
// states can be previewed without waiting for the conference. Documented in
// data/schedule.js. Without it, the real clock is used.

import { schedule } from '../../data/schedule.js?v=4';
import { el, mountSection, highlight, groupBy } from '../modules/render.js?v=4';

const SECOND = 1000;

/** Parsed once. Invalid timestamps become NaN and are reported rather than hidden. */
const entries = schedule.map((entry) => ({
  ...entry,
  startMs: Date.parse(entry.startsAt),
  endMs: Date.parse(entry.endsAt),
}));

const invalid = entries.filter((e) => Number.isNaN(e.startMs) || Number.isNaN(e.endMs));
if (invalid.length) {
  console.warn(
    '[agenda] unparseable timestamps in data/schedule.js:',
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
const timeFmt = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

function clockRange(entry) {
  if (Number.isNaN(entry.startMs)) return 'time not set';
  const start = timeFmt.format(entry.startMs);
  if (Number.isNaN(entry.endMs) || entry.endMs === entry.startMs) return start;
  return `${start} – ${timeFmt.format(entry.endMs)}`;
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
const deadline =
  entries.filter((e) => e.isDeadline).sort((a, b) => a.startMs - b.startMs)[0] ?? null;

function currentEntry(t) {
  return entries.find((e) => t >= e.startMs && t < e.endMs) ?? null;
}

function nextMilestone(t) {
  return entries.filter((e) => e.isMilestone && e.startMs > t).sort((a, b) => a.startMs - b.startMs)[0] ?? null;
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
  body.append(el('h4', { class: 'agenda-row__label' }, [highlight(entry.label, q)]));
  if (entry.isMilestone && !entry.isDeadline) {
    body.append(el('span', { class: 'badge badge--milestone', text: 'MILESTONE' }));
  }
  if (entry.isDeadline) {
    body.append(el('span', { class: 'badge badge--danger', text: 'DEADLINE' }));
  }
  if (entry.note) {
    body.append(el('p', { class: 'agenda-row__note' }, [highlight(entry.note, q)]));
  }
  row.append(body);

  return row;
}

export function initAgenda() {
  const section = mountSection({
    id: 'agenda',
    title: 'Agenda',
    blurb: 'Live countdown and session order. All times are placeholders until you replace them.',
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
      searchPlaceholder: 'session, break, deadline…',
    },
    searchIndex: (entry) => ({
      title: entry.label,
      snippet: `${entry.session} · ${clockRange(entry)}`,
      keywords: entry.note ?? '',
    }),
  });

  if (!section) return null;

  // The two live countdowns sit above the list, inserted after the section blurb.
  const host = document.getElementById('agenda');
  const dash = el('div', { class: 'agenda-dash' });

  // Prominent: resolution deadline.
  const deadlineCd = el('div', { class: 'cd cd--deadline', role: 'timer' });
  const deadlineCard = el('div', { class: 'card card--raised deadline-card' }, [
    el('p', { class: 'deadline-card__eyebrow', text: 'Resolution deadline' }),
    deadlineCd,
    el('p', {
      class: 'deadline-card__when',
      text: deadline
        ? `${deadline.session} · ${clockRange(deadline)}`
        : 'No entry in schedule.js is marked isDeadline.',
    }),
  ]);
  dash.append(deadlineCard);

  // Secondary: next milestone / current session.
  const nextCd = el('div', { class: 'cd cd--next', role: 'timer' });
  const nextLabel = el('p', { class: 'next-card__label', text: '—' });
  const nowLabel = el('p', { class: 'next-card__now' });
  const nextCard = el('div', { class: 'card next-card' }, [
    nowLabel,
    el('p', { class: 'next-card__eyebrow', text: 'Next milestone' }),
    nextLabel,
    nextCd,
  ]);
  dash.append(nextCard);

  host.insertBefore(dash, host.querySelector('.section-controls') ?? host.querySelector('.section-list'));

  // --- tick ------------------------------------------------------------------
  let lastCurrentId = undefined;

  function tick() {
    const t = now();

    if (deadline) {
      paintCountdown(deadlineCd, deadline.startMs - t, 'Deadline passed');
    } else if (deadlineCd.dataset.state !== 'none') {
      deadlineCd.dataset.state = 'none';
      deadlineCd.replaceChildren(el('span', { class: 'cd__expired', text: 'Not set' }));
    }

    const current = currentEntry(t);
    const next = nextMilestone(t);

    const nowText = current ? `In session: ${current.label}` : 'No session in progress';
    if (nowLabel.textContent !== nowText) nowLabel.textContent = nowText;
    nowLabel.className = `next-card__now${current ? ' next-card__now--live' : ''}`;

    const label = next ? next.label : 'No milestones remaining';
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
