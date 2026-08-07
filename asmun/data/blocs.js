// ASMUN — data/blocs.js
//
// ⚠️  PLACEHOLDER CONTENT. Every entry below is scaffolding written to give the
//     renderer something realistic to lay out. The bloc names and memberships
//     are the ones you specified; the summaries, detail points and attack lines
//     are NOT researched positions. Replace them.
//
// Committee: Strengthening the Protection of Refugees and Displaced Civilians
//            through International Cooperation.  Home delegation: Canada.
//
// This file is pure data — no imports, no DOM, no logic. Rendering lives in
// js/sections/blocs.js. Add, remove or reorder blocs freely; nothing else needs
// to change. `id` is the only field other files depend on (questions.js
// references it via targetBloc).

/**
 * @typedef {Object} BlocAttack
 * @property {string} target  - who this bloc goes after (bloc name or country)
 * @property {string} grounds - the argument they use, in their own framing
 *
 * @typedef {Object} Bloc
 * @property {string}   id        - stable slug; referenced by questions.js targetBloc
 * @property {string}   name
 * @property {string[]} members   - country names as spoken in committee
 * @property {string}   summary   - ONE scannable paragraph. Shown in "Short" view.
 * @property {string[]} detail    - point-form breakdown. Shown in "Detailed" view.
 * @property {BlocAttack[]} attacks
 * @property {string}   [canadaLine] - where Canada sits relative to this bloc
 * @property {boolean}  placeholder  - remove once you've written real content
 */

/** @type {Bloc[]} */
export const blocs = [
  {
    id: 'host-countries',
    name: 'Host Countries',
    members: ['Türkiye', 'Jordan', 'Pakistan', 'Colombia'],
    summary:
      'The states carrying the largest displaced populations in absolute terms. They argue that ' +
      'protection obligations are being paid for by the countries least able to afford them, and ' +
      'that "international cooperation" is meaningless unless it means money and resettlement ' +
      'places moving toward them. Expect them to be the loudest voices for binding burden-sharing ' +
      'and the most hostile to language that only reaffirms existing commitments.',
    detail: [
      'Core demand: responsibility-sharing that is binding and quantified, not voluntary pledges.',
      'Will push for a fixed percentage of donor GNI earmarked for host-country support.',
      'Deeply resistant to any text implying hosting is a permanent arrangement — they want ' +
        'resettlement and return framed as the donor side of the bargain.',
      'Sensitive to language on host-community strain: unemployment, housing, school capacity.',
      'Climate displacement is a growing plank for them — Pakistan in particular ties flood ' +
        'displacement directly to adaptation finance owed by industrialised states.',
      "Internal fracture: Colombia's situation is regional and largely one-origin, so it does not " +
        "always share the others' framing. Splittable if pressed.",
    ],
    attacks: [
      {
        target: 'Western Nations',
        grounds:
          'Pledge-and-forget. They accuse donors of announcing headline figures that arrive late, ' +
          'partially, or as loans, while tightening their own borders.',
      },
      {
        target: 'Sovereignty States',
        grounds:
          'Free-riding. Large economies that invoke non-interference to avoid both resettlement ' +
          'quotas and meaningful financial contribution.',
      },
    ],
    canadaLine:
      'PLACEHOLDER — Canada can credibly meet them on resettlement volume while resisting binding ' +
      'financial quotas. Decide before session which half you lead with.',
    placeholder: true,
  },

  {
    id: 'western-nations',
    name: 'Western Nations',
    members: ['United States', 'Germany', 'United Kingdom', 'France'],
    summary:
      'The principal funders. They defend the existing legal architecture — the 1951 Convention, ' +
      'UNHCR primacy, non-refoulement — and prefer voluntary, pledge-based cooperation over ' +
      'binding quotas. Publicly committed to protection, domestically constrained on admissions. ' +
      'Their weak point is the visible gap between what they fund and what they will actually let ' +
      'across their own borders.',
    detail: [
      'Prefer voluntary pledging conferences to any formula-based allocation of responsibility.',
      'Will defend UNHCR as coordinator and resist proposals routing funds through new bodies.',
      'Strong on non-refoulement language in the abstract; evasive on interception and ' +
        'externalised processing in practice.',
      "Internal split worth exploiting: Germany's admissions record differs sharply from the " +
        "others', and the US position swings hardest with domestic politics.",
      'Receptive to durable-solutions and self-reliance framing — livelihoods, right to work, ' +
        'education access — because it shifts emphasis away from admissions numbers.',
      'Cautious on climate displacement: accepting a legal category of climate refugee implies ' +
        'obligations they have not agreed to.',
    ],
    attacks: [
      {
        target: 'Sovereignty States',
        grounds:
          'Contribution asymmetry. Large economies giving a fraction of what comparable Western ' +
          'donors give, while blocking protection language on sovereignty grounds.',
      },
      {
        target: 'Host Countries',
        grounds:
          'Conditionality and absorption. They question whether unearmarked funds reach displaced ' +
          'people, and raise governance and reporting standards as a precondition.',
      },
    ],
    canadaLine:
      'PLACEHOLDER — Canada is normally read into this bloc. Being visibly better than it on ' +
      'resettlement per capita is the cheapest way to earn host-country trust without defecting.',
    placeholder: true,
  },

  {
    id: 'sovereignty-states',
    name: 'Sovereignty States',
    members: ['China', 'Russia', 'Gulf States'],
    summary:
      'Defenders of non-interference. They accept humanitarian assistance as a matter of consent ' +
      'and national discretion, and reject anything that reads as external supervision of how a ' +
      'state treats people inside its borders. They favour addressing "root causes" — which in ' +
      'their framing means development and an end to sanctions and intervention, not protection ' +
      'obligations. Procedurally disciplined and hard to move by moral argument alone.',
    detail: [
      "Red line: any monitoring, reporting or compliance mechanism with authority over a state's " +
        'internal treatment of displaced persons.',
      'Prefer bilateral, consent-based assistance to multilateral obligation.',
      'Argue displacement is a symptom of intervention and coercive economic measures, and will ' +
        'try to steer preambulatory language toward that causal story.',
      'Gulf states contribute substantially in absolute humanitarian funding but almost entirely ' +
        'bilaterally and outside Convention frameworks — a real distinction, not hypocrisy, and ' +
        'arguing it carelessly will cost you the room.',
      'Not signatories in the way Western states are; "reaffirm the 1951 Convention" is not a ' +
        'neutral phrase to them.',
      'Will trade on operative paragraphs about funding if preambulatory language on sovereignty ' +
        'is preserved. That trade is usually available.',
    ],
    attacks: [
      {
        target: 'Western Nations',
        grounds:
          'Selectivity and hypocrisy. Protection rhetoric alongside border externalisation, plus ' +
          'responsibility for the conflicts and sanctions that produced the displacement.',
      },
      {
        target: 'Any monitoring mechanism',
        grounds:
          'Sovereignty and precedent. Oversight of internal treatment is framed as interference ' +
          'and as a template that will later be aimed at them.',
      },
    ],
    canadaLine:
      'PLACEHOLDER — you will not win them on rights language. The realistic goal is buying their ' +
      'abstention on operative clauses by conceding preambulatory framing.',
    placeholder: true,
  },
];

export default blocs;
