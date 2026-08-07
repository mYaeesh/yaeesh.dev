// ASMUN — data/questions.js
//
// ⚠️  PLACEHOLDER CONTENT. These are structurally sound questions written to give
//     the renderer something realistic, not researched attack lines. Replace the
//     wording with your own; keep the shape.
//
// Questions to put to other delegates, grouped by the bloc you are aiming at.
//
// `targetBloc` MUST match an `id` in data/blocs.js — the questions section resolves
// the bloc's display name through it. Current valid ids:
//     'host-countries' | 'western-nations' | 'sovereignty-states'
// A question with an unrecognised targetBloc still renders, under its raw id, so a
// typo degrades visibly rather than silently dropping the entry.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/questions.js.

/**
 * @typedef {Object} Question
 * @property {string} id         - stable slug, unique across the file
 * @property {string} targetBloc - bloc id from data/blocs.js
 * @property {string} question   - ask it exactly as written; short beats clever
 * @property {string} why        - what the question is FOR — the trap, or what a
 *                                 non-answer proves. This is the part you reread
 *                                 thirty seconds before you raise your placard.
 * @property {boolean} placeholder
 */

/** @type {Question[]} */
export const questions = [
  // --- Host Countries ------------------------------------------------------
  {
    id: 'host-01',
    targetBloc: 'host-countries',
    question:
      'Your delegation calls for binding responsibility-sharing. What is the enforcement mechanism ' +
      'when a state simply does not pay?',
    why:
      'Binding language is easy to demand and hard to specify. Either they name a mechanism that ' +
      'the Sovereignty States will never accept — splitting them from a bloc they need — or they ' +
      "concede that what they actually want is stronger voluntary pledging, which is Canada's " +
      'position already.',
    placeholder: true,
  },
  {
    id: 'host-02',
    targetBloc: 'host-countries',
    question:
      'Does your delegation accept that support to host communities should be conditional on ' +
      'displaced people having the legal right to work?',
    why:
      'Separates the states genuinely pursuing self-reliance from those wanting unconditional ' +
      'transfers while keeping refugees out of the labour market. A refusal is worth returning to ' +
      'when they next invoke dignity.',
    placeholder: true,
  },
  {
    id: 'host-03',
    targetBloc: 'host-countries',
    question:
      'If climate displacement is included in this resolution, does your delegation accept that ' +
      'the obligations it creates apply to internal displacement within your own borders?',
    why:
      'Host states push climate hard when it means adaptation finance flowing to them, and go ' +
      'quiet when it implies duties toward their own internally displaced. Ask it once, plainly, ' +
      'and let the pause do the work.',
    placeholder: true,
  },

  // --- Western Nations -----------------------------------------------------
  {
    id: 'west-01',
    targetBloc: 'western-nations',
    question:
      'Your delegation has reaffirmed non-refoulement. Does that principle apply to people ' +
      'intercepted before they reach your territorial waters?',
    why:
      "The gap between stated commitment and border practice is this bloc's weakest point. There " +
      'is no comfortable answer: yes commits them to something they do not do, no undercuts the ' +
      'principle they just invoked. Use sparingly — Canada is in range of this one too.',
    placeholder: true,
  },
  {
    id: 'west-02',
    targetBloc: 'western-nations',
    question:
      'What proportion of your pledged contribution from the last cycle has actually been ' +
      'disbursed, and how much of it was new money rather than reallocated development aid?',
    why:
      'Almost nobody has this number to hand. The value is not the answer — it is establishing in ' +
      'front of the host countries that the pledge figures being quoted are not disbursements.',
    placeholder: true,
  },
  {
    id: 'west-03',
    targetBloc: 'western-nations',
    question:
      'Would your delegation support a floor on resettlement places expressed as a share of ' +
      'population rather than an absolute number?',
    why:
      'A per-capita floor is the framing where Canada does well and most of this bloc does not. ' +
      'Raising it positions Canada as the credible member of its own bloc — but only ask if you ' +
      "have checked Canada's current per-capita figure first.",
    placeholder: true,
  },

  // --- Sovereignty States --------------------------------------------------
  {
    id: 'sov-01',
    targetBloc: 'sovereignty-states',
    question:
      'Your delegation opposes external monitoring. Does it accept reporting on a purely voluntary ' +
      'basis, with the state choosing what it reports?',
    why:
      'Offers a face-saving version of the thing they are refusing. If they take it, you have a ' +
      'reporting clause. If they refuse even voluntary self-reporting, their objection is not ' +
      'about sovereignty and the room can see it.',
    placeholder: true,
  },
  {
    id: 'sov-02',
    targetBloc: 'sovereignty-states',
    question:
      "Given the scale of your delegation's bilateral humanitarian assistance, what prevents " +
      'channelling a share of it multilaterally?',
    why:
      'Deliberately opens by crediting their contribution, which is real and usually ignored. ' +
      'Asking respectfully makes it much harder to dismiss as a Western attack, and the answer ' +
      'tells you whether multilateral funding is negotiable at all.',
    placeholder: true,
  },
  {
    id: 'sov-03',
    targetBloc: 'sovereignty-states',
    question:
      'Does your delegation consider non-refoulement binding on states that are not party to the ' +
      '1951 Convention?',
    why:
      'A genuine legal question, not a trap, and it establishes the floor for the whole ' +
      'negotiation. If they concede customary status, every later objection is about mechanisms ' +
      'rather than principle — which is much easier ground to trade on.',
    placeholder: true,
  },
];

export default questions;
