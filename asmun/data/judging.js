// judging.js
// Canada — ASMUN, Monday 10 August 2026
//
// Source: knowledge/08-committee-logistics.md, section 3 "What judges score on".
//
// ⚠ NOT A CONFIRMED RUBRIC. The source is explicit about this and the warning is carried here
// verbatim rather than dropped: no ASMUN-specific rubric was supplied, and these are the generic
// MUN scoring dimensions from the build guide. Treat them as a reasonable prior, not as the rubric.
//
// NOT YET RENDERED. No section mounts this data — there is no #judging section in index.html.

export const judgingCaveat =
  '⚠ No ASMUN-specific rubric was supplied. The criteria below are the generic MUN scoring ' +
  'dimensions listed in your own build guide and are NOT confirmed for this conference. Treat ' +
  'them as a reasonable prior, not as the rubric. ⚑ Ask the chair or your faculty advisor what ' +
  'ASMUN actually awards on, and what the award categories are (Best Delegate, Outstanding, ' +
  'Honourable Mention, Best Position Paper). This is a five-second question with a large payoff.';

export const judgingRisk =
  '[Judgement] The one thing most likely to cost you marks: your plan minimises speaking in ' +
  'favour of coalition-building. That is strategically correct and it can read as low ' +
  'participation to a dais that only sees the floor. Mitigate deliberately — speak twice as ' +
  'planned, take one POI, raise your placard visibly during votes, and make at least one ' +
  'procedural intervention. Being the delegate who asks the chair a precise clarifying question ' +
  'early is cheap visibility.';

export const judging = [
  {
    id: 'research-depth',
    dimension: 'Research depth',
    means: "Accurate, specific, current facts; knowing your country's real policy",
    standing:
      'Strong. File 02 has 22 sourced entries with honest verification states. The tell that separates you from the room is citing Giza and Dadaab rather than global totals',
    rating: 'strong',
  },
  {
    id: 'diplomatic-conduct',
    dimension: 'Diplomatic conduct',
    means: 'Courtesy, not interrupting, using formal address, respecting the dais',
    standing:
      'Strong if you follow the plan. The risk is the intervention-blame exchange — do not let it become personal with Russia',
    rating: 'strong',
  },
  {
    id: 'speaking',
    dimension: 'Speaking frequency and quality',
    means: 'Speaking often enough to be visible, without dominating',
    standing:
      'Watch this. Your strategy deliberately trades floor time for recruitment. Two good speeches plus visible note-passing scores well; two speeches and silence does not. Take at least one POI and answer it well',
    rating: 'watch',
  },
  {
    id: 'resolution-contribution',
    dimension: 'Resolution contribution',
    means: 'Authorship, clause drafting, getting language into the final text',
    standing: 'Strong. You have full operative clause wording pre-drafted in file 05. Almost nobody else will',
    rating: 'strong',
  },
  {
    id: 'bloc-leadership',
    dimension: 'Bloc leadership',
    means: 'Convening, brokering, holding a working group together',
    standing:
      "Your best category. File 01's entire strategy is built on this. Make sure the dais can see you doing it — convening is invisible if it all happens in a corner",
    rating: 'best',
  },
  {
    id: 'procedural-competence',
    dimension: 'Procedural competence',
    means: 'Correct motions, correct verbs, knowing the rules',
    standing:
      'Strong. File 06 §2.4 has your motion scripted; file 07 Part 4 has verb strength by mandate. Using Recommends rather than Demands in an HRC body is a visible marker',
    rating: 'strong',
  },
];

export default judging;
