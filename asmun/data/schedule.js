// ASMUN — data/schedule.js
//
// ⚠️  ALL TIMES ARE PLACEHOLDERS. The conference is pencilled in below as
//     12–13 September 2026 purely so the countdown has something in the future to
//     count toward. Replace every timestamp with the real agenda.
//
// Timestamps are ISO 8601 WITH AN EXPLICIT OFFSET (+05:00, Maldives time). Keep the
// offset — without it the browser guesses the local zone and every delegate's
// countdown reads differently.
//
// Exactly ONE entry should have isDeadline: true. That is the resolution deadline,
// which the agenda section renders as its own large, prominent countdown. If you
// mark several, the earliest still-future one wins.
//
// TESTING THE LIVE STATES: append ?now=<ISO timestamp> to the page URL to pretend
// it is that moment — e.g. ?now=2026-09-12T10:30:00+05:00 — so you can see what the
// page looks like mid-session without waiting for the conference. Without the
// parameter the real clock is used.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/agenda.js.

/**
 * @typedef {Object} ScheduleEntry
 * @property {string}  id
 * @property {string}  label          - what appears on the agenda line
 * @property {string}  session        - day/grouping heading, e.g. 'Day 1 — Saturday'
 * @property {string}  startsAt       - ISO 8601 with offset
 * @property {string}  endsAt         - ISO 8601 with offset
 * @property {boolean} [isMilestone]  - a moment you must not miss
 * @property {boolean} [isDeadline]   - THE resolution deadline. Only one.
 * @property {string}  [note]
 */

/** @type {ScheduleEntry[]} */
export const schedule = [
  // --- Day 1 ---------------------------------------------------------------
  {
    id: 'd1-registration',
    label: 'Registration & roll call',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T08:30:00+05:00',
    endsAt: '2026-09-12T09:00:00+05:00',
    note: 'PLACEHOLDER TIME. Answer "present", not "present and voting".',
  },
  {
    id: 'd1-opening',
    label: 'Opening ceremony',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T09:00:00+05:00',
    endsAt: '2026-09-12T10:00:00+05:00',
    isMilestone: true,
    note: 'PLACEHOLDER TIME.',
  },
  {
    id: 'd1-s1',
    label: 'Session I — opening speeches',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T10:00:00+05:00',
    endsAt: '2026-09-12T11:30:00+05:00',
    isMilestone: true,
    note: 'PLACEHOLDER TIME. Your 60-second opening lands here.',
  },
  {
    id: 'd1-break1',
    label: 'Break',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T11:30:00+05:00',
    endsAt: '2026-09-12T11:45:00+05:00',
  },
  {
    id: 'd1-s2',
    label: 'Session II — moderated caucus',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T11:45:00+05:00',
    endsAt: '2026-09-12T13:00:00+05:00',
    note: 'PLACEHOLDER TIME.',
  },
  {
    id: 'd1-lunch',
    label: 'Lunch',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T13:00:00+05:00',
    endsAt: '2026-09-12T14:00:00+05:00',
    note: 'Unofficial bloc negotiation happens here. Do not eat alone.',
  },
  {
    id: 'd1-s3',
    label: 'Session III — unmoderated caucus & bloc formation',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T14:00:00+05:00',
    endsAt: '2026-09-12T15:30:00+05:00',
    isMilestone: true,
    note: 'PLACEHOLDER TIME. The session that decides who you draft with.',
  },
  {
    id: 'd1-working-papers',
    label: 'Working papers due to the dais',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T15:30:00+05:00',
    endsAt: '2026-09-12T15:45:00+05:00',
    isMilestone: true,
    note: 'PLACEHOLDER TIME.',
  },
  {
    id: 'd1-s4',
    label: 'Session IV — draft resolution drafting',
    session: 'Day 1 — Saturday',
    startsAt: '2026-09-12T15:45:00+05:00',
    endsAt: '2026-09-12T17:30:00+05:00',
    note: 'PLACEHOLDER TIME.',
  },

  // --- Day 2 ---------------------------------------------------------------
  {
    id: 'd2-s5',
    label: 'Session V — draft resolution debate',
    session: 'Day 2 — Sunday',
    startsAt: '2026-09-13T09:00:00+05:00',
    endsAt: '2026-09-13T10:30:00+05:00',
    note: 'PLACEHOLDER TIME.',
  },
  {
    id: 'd2-break1',
    label: 'Break',
    session: 'Day 2 — Sunday',
    startsAt: '2026-09-13T10:30:00+05:00',
    endsAt: '2026-09-13T10:45:00+05:00',
  },
  {
    id: 'd2-s6',
    label: 'Session VI — amendments',
    session: 'Day 2 — Sunday',
    startsAt: '2026-09-13T10:45:00+05:00',
    endsAt: '2026-09-13T12:30:00+05:00',
    isMilestone: true,
    note: 'PLACEHOLDER TIME. Unfriendly amendments get debated here.',
  },
  {
    id: 'd2-resolution-deadline',
    label: 'RESOLUTION SUBMISSION DEADLINE',
    session: 'Day 2 — Sunday',
    startsAt: '2026-09-13T12:30:00+05:00',
    endsAt: '2026-09-13T12:30:00+05:00',
    isMilestone: true,
    isDeadline: true,
    note:
      'PLACEHOLDER TIME — confirm this against the official schedule first. ' +
      'Sponsors and signatories must be locked before this moment.',
  },
  {
    id: 'd2-lunch',
    label: 'Lunch',
    session: 'Day 2 — Sunday',
    startsAt: '2026-09-13T13:00:00+05:00',
    endsAt: '2026-09-13T14:00:00+05:00',
  },
  {
    id: 'd2-s7',
    label: 'Session VII — voting procedure',
    session: 'Day 2 — Sunday',
    startsAt: '2026-09-13T14:00:00+05:00',
    endsAt: '2026-09-13T15:30:00+05:00',
    isMilestone: true,
    note: 'PLACEHOLDER TIME. No notes, no entry, no exit once voting opens.',
  },
  {
    id: 'd2-closing',
    label: 'Closing ceremony & awards',
    session: 'Day 2 — Sunday',
    startsAt: '2026-09-13T15:30:00+05:00',
    endsAt: '2026-09-13T17:00:00+05:00',
    note: 'PLACEHOLDER TIME.',
  },
];

export default schedule;
