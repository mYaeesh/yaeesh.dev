// schedule.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN, Day 2 — Monday 10 August 2026
//
// NOTE: These are TEMPLATE times built from a standard single-day MUN committee structure
// (Starting -> Formal -> Informal -> Crisis -> Solution-building -> Ending), per your Day 2
// outline. You confirmed you don't have the actual ASMUN times yet — swap the "time" fields
// below for the real schedule as soon as you have it. Everything else (structure, what happens
// in each block, and the resolution deadline framing) should transfer directly.
//
// TIMEZONE: the times below are wall-clock ("HH:MM") with no offset baked in. `timezone` supplies
// the offset the countdown uses to turn them into real instants. It is set to +05:00 (Maldives) —
// change it here, in one place, if the conference runs in another zone.
//
// TESTING THE LIVE STATES: append ?now=<ISO timestamp> to the page URL to pretend it is that
// moment — e.g. ?now=2026-08-10T13:30:00+05:00 — so the mid-session states can be previewed
// without waiting for the conference. Without the parameter the real clock is used.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/agenda.js.

export const schedule = {
  conferenceDay: "Day 2",
  date: "2026-08-10",
  dayOfWeek: "Monday",
  timezone: "+05:00",
  resolutionDeadline: {
    time: "16:00",
    label: "DRAFT RESOLUTION SUBMISSION DEADLINE",
    note:
      "This is the hard cutoff the site's countdown widget should track. No new draft resolutions accepted to the dais after this time — only amendments to resolutions already on the floor. Build your working paper toward a sponsor-ready draft well before this, not at the wire."
  },
  sessions: [
    {
      id: "starting",
      name: "Call to Order / Roll Call / Agenda Setting",
      start: "09:00",
      end: "09:20",
      type: "starting",
      whatsHappening:
        "Dais calls roll, confirms quorum, and the committee formally sets or reconfirms the agenda for Day 2. Canada should use roll call to gauge who's present/absent versus Day 1 — an absent Sovereignty or Host bloc member changes coalition math for the day."
    },
    {
      id: "formal-debate-1",
      name: "Formal Debate — Moderated Caucus (Opening Positions)",
      start: "09:20",
      end: "10:45",
      type: "formal debate",
      whatsHappening:
        "Speakers' list and moderated caucus topics addressing the core agenda item. This is where Canada should deliver its opening framing: name the PSR cut honestly, introduce the GDP-scaled funding concept in broad strokes, and signal openness to Host Countries without yet revealing full mechanism details. Use POI questions from questions.js sparingly here — save the sharper ones for informal caucusing and bloc-splitting later in the day."
    },
    {
      id: "informal-debate-1",
      name: "Informal Debate — Unmoderated Caucus (Bloc Formation)",
      start: "10:45",
      end: "12:00",
      type: "informal debate",
      whatsHappening:
        "Unmoderated caucus for bloc and coalition building. Canada's priority window to: (1) lock in Western Nations alignment on language before Germany or the UK drift toward more cautious phrasing, (2) approach Colombia and Jordan directly with the funding mechanism's specifics, and (3) make first contact with UAE, Qatar, and Oman to test appetite for splitting from the Sovereignty bloc's harder line."
    },
    {
      id: "lunch",
      name: "Lunch Break",
      start: "12:00",
      end: "13:00",
      type: "break",
      whatsHappening:
        "No formal committee business. Informal lobbying continues in practice — treat as an extension of the unmoderated caucus for coalition-building purposes, just off the record."
    },
    {
      id: "crisis",
      name: "Crisis Simulation / Crisis Update",
      start: "13:00",
      end: "14:15",
      type: "crisis",
      whatsHappening:
        "Dais introduces a crisis update (e.g., a sudden displacement spike or funding shock) that pressure-tests whatever mechanism blocs have been drafting. Canada should treat this as a stress test of the GDP-scaled proposal's credibility — be ready to explain how the mechanism responds to a shock, not just steady-state hosting numbers, since that's exactly what a skeptical Host Country or Gulf state will ask about immediately after."
    },
    {
      id: "informal-debate-2",
      name: "Informal Debate — Unmoderated Caucus (Working Paper Consolidation)",
      start: "14:15",
      end: "15:15",
      type: "informal debate",
      whatsHappening:
        "Working papers get merged into sponsor-ready draft resolutions. This is the last real window to add co-sponsors before drafts lock in. Priority: get at least one Host Country (Colombia or Jordan) and one Sovereignty-bloc moderate (UAE, Qatar, or Oman) as visible co-sponsors or signatories, not just Western Nations — a Western-only sponsor list undercuts the resolution's credibility on arrival."
    },
    {
      id: "presenting-solutions",
      name: "Formal Debate — Presenting & Finding Solutions (Draft Resolution Introductions)",
      start: "15:15",
      end: "16:00",
      type: "presenting solution and finding solution",
      whatsHappening:
        "Sponsors formally introduce draft resolutions to the floor ahead of the submission deadline. Canada should present with the PSR-cut admission already priced in from the morning session, so it reads as consistent rather than a defensive reaction to an attack."
    },
    {
      id: "resolution-deadline-marker",
      name: "*** DRAFT RESOLUTION SUBMISSION DEADLINE ***",
      start: "16:00",
      end: "16:00",
      type: "deadline",
      whatsHappening:
        "Hard cutoff. No new draft resolutions accepted after this point — only amendments to resolutions already on the floor. This is the countdown target."
    },
    {
      id: "formal-debate-2",
      name: "Formal Debate — Amendments & Voting Procedure",
      start: "16:00",
      end: "17:00",
      type: "formal debate",
      whatsHappening:
        "Floor debate on amendments to submitted draft resolutions, followed by voting bloc procedure. Canada should expect amendment attempts from Russia/China targeting any language that implies intervention-related causation, and should be ready to accept friendly amendments from Host Countries that strengthen the funding mechanism's credibility without diluting it."
    },
    {
      id: "ending",
      name: "Closing / Voting Results / Adjournment",
      start: "17:00",
      end: "17:30",
      type: "ending",
      whatsHappening:
        "Final vote results announced, closing remarks, dais adjourns Day 2. Confirm whether unresolved business carries to a subsequent day per your specific ASMUN structure."
    }
  ]
};

export default schedule;
