// schedule.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN — Monday 10 August 2026, Maldives time (UTC+5)
//
// ⚠️ ONLY THREE TIMINGS ARE CONFIRMED:
//    1. Committee opens 14:30 MVT.
//    2. Moderated caucus runs 60 minutes (Canada motions; 90 SECONDS speaking time — 90, not 120).
//    3. Unmoderated caucus runs 60 minutes (Uganda motions).
// Everything else below is an ESTIMATE. Roll call, agenda vote, break, and draft-resolution
// durations were NOT supplied and have NOT been invented as fact — they are round guesses,
// flagged `timing: 'estimated'`, purely so the countdown has something to anchor to.
// Because durations compound, EVERY start time after 14:30 is also estimated.
// Update `start`/`end` live on the day as the dais posts real times.
//
// NO FIXED RESOLUTION DEADLINE EXISTS in this committee's procedure. Draft resolutions are
// numbered 1.1, 1.2… as submitted, presented in order, voted in order; the winner passes by simple
// majority, the rest are discarded. The prominent countdown therefore targets COMMITTEE OPEN.
//
// TESTING: append ?now=2026-08-10T15:30:00+05:00 to preview mid-session states.

export const schedule = {
  conferenceDay: 'Conference Day',
  date: '2026-08-10',
  dayOfWeek: 'Monday',
  timezone: '+05:00',

  // Drives the big countdown card in js/sections/agenda.js.
  // NOTE: the key name is a legacy misnomer — this is no longer a resolution deadline.
  // It is the ONLY confirmed instant in the whole file.
  resolutionDeadline: {
    time: '14:30',
    label: 'COMMITTEE OPENS — ROLL CALL',
    note:
      'CONFIRMED: 14:30 Maldives time (UTC+5), Monday 10 August 2026. This is the only confirmed ' +
      'timestamp in the schedule. There is NO fixed draft-resolution deadline in this committee — ' +
      'resolutions are numbered as submitted and voted in submission order. Every session time ' +
      'below this one is an estimate; correct them in data/schedule.js as the dais posts them.',
  },

  sessions: [
    {
      id: 'opening-roll-call',
      name: 'Opening Ceremony & Roll Call',
      start: '14:30', end: '14:45',
      type: 'starting',
      timing: 'estimated',
      timingNote: 'START CONFIRMED 14:30. END ESTIMATED — roll-call duration not confirmed. 15 min is a guess.',
      whatsHappening:
        'Opening ceremony, then roll call in official roster order. 48 active delegations. Sweden, ' +
        'Denmark and Hungary are withdrawn and do not answer or vote. Thailand is unconfirmed — if ' +
        "called, note it. Listen for whether \"Ash'ham\" is called for both Norway and Sudan; that " +
        'conflict is still unresolved in data/roster.js.',
    },
    {
      id: 'agenda-vote',
      name: 'Agenda Vote',
      start: '14:45', end: '14:55',
      type: 'starting',
      timing: 'estimated',
      timingNote: 'FULLY ESTIMATED — neither start nor duration confirmed. 10 min is a guess.',
      whatsHappening:
        'PAKISTAN proposes the agenda: "Strengthening the Protection of Refugees and Displaced ' +
        'Civilians Through International Cooperation." Passes by SIMPLE MAJORITY. Withdrawn ' +
        'countries do not vote — the majority threshold is calculated on delegations present.',
    },
    {
      id: 'moderated-caucus',
      name: 'Moderated Caucus — 60 min, 90 sec speaking time',
      start: '14:55', end: '15:55',
      type: 'formal debate',
      timing: 'estimated-start',
      timingNote:
        'DURATION CONFIRMED: 60 minutes. SPEAKING TIME CONFIRMED: 90 SECONDS (ninety — not 120, ' +
        'regardless of any earlier note). START TIME ESTIMATED — it inherits the unconfirmed ' +
        'roll-call and agenda-vote durations above.',
      whatsHappening:
        'CANADA OPENS THIS — you motion for a 60-minute moderated caucus with 90-second speaking ' +
        'time. That is your motion to make; have it phrased and ready before the agenda vote closes. ' +
        '90 seconds is roughly 210–230 words. Deliver the opening framing here: name the PSR cut ' +
        'yourself, introduce the GDP-scaled funding concept in broad strokes.',
    },
    {
      id: 'break',
      name: 'Break',
      start: '15:55', end: '16:10',
      type: 'break',
      timing: 'estimated',
      timingNote:
        'FULLY ESTIMATED — a break is confirmed to occur here, but its length was NOT supplied. ' +
        '15 min is a guess.',
      whatsHappening:
        'Confirmed to happen; length unknown. Informal lobbying continues off the record — treat as ' +
        'bonus caucus time.',
    },
    {
      id: 'unmoderated-caucus',
      name: 'Unmoderated Caucus — 60 min',
      start: '16:10', end: '17:10',
      type: 'informal debate',
      timing: 'estimated-start',
      timingNote:
        'DURATION CONFIRMED: 60 minutes. START ESTIMATED — inherits the unconfirmed break length above.',
      whatsHappening:
        'UGANDA OPENS THIS — Uganda motions for a 60-minute unmoderated caucus, not you. Working ' +
        'groups form ORGANICALLY here. There is no pre-assigned bloc structure: whatever is in ' +
        'data/blocs.js is your personal read, not a script. This is the hour that decides which ' +
        'draft resolution you are on. Phone down.',
    },
    {
      id: 'draft-resolutions',
      name: 'Draft Resolutions — presentation & voting',
      start: '17:10', end: '17:55',
      type: 'presenting solution and finding solution',
      timing: 'estimated',
      timingNote: 'FULLY ESTIMATED — no duration supplied for presentation or voting. 45 min is a guess.',
      whatsHappening:
        'Resolutions are numbered 1.1, 1.2, 1.3… in submission order, presented in that order, then ' +
        'voted in that order. The first to pass by SIMPLE MAJORITY wins; all others are discarded. ' +
        'Submission order therefore matters — being 1.1 means being voted on first.',
    },
    {
      id: 'adjournment',
      name: 'Adjournment',
      start: '17:55', end: '18:05',
      type: 'ending',
      timing: 'estimated',
      timingNote: 'FULLY ESTIMATED — no duration supplied. 10 min is a guess.',
      whatsHappening:
        'FINLAND moves to adjourn. Requires a TWO-THIRDS majority (not simple majority).',
    },
  ],
};

export default schedule;
