// questions.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN, Monday 10 August 2026
//
// ⚠️ Groupings mirror data/blocs.js and are a PERSONAL STRATEGIC READ, not a confirmed structure.
//
// POI-style questions grouped by target, ordered most to least aggressive.
// Each question either (a) exposes a factual error, (b) forces an unwanted commitment,
// or (c) creates daylight within a grouping.
//
// Corrected against the real 48-country roster. Questions aimed at Türkiye, Colombia,
// "UAE / Qatar" and Oman have been DELETED — none of those delegations exist in this committee.

export const questions = {
  hostCountries: [
    {
      target: 'Pakistan',
      question:
        'Given the scale of recent deportations of Afghan refugees, how does Pakistan reconcile its position in this committee with its non-refoulement obligations under international law?',
      goal: '[Forces an on-record justification or admission of a gap — either answer weakens Pakistan’s standing to lead on host-country burden-sharing arguments for the rest of the session. ⚠ NOTE: the delegate for AFGHANISTAN is seated in this room. Asking this in front of them is far sharper than it was on paper — decide deliberately whether that is leverage or a cheap shot, and note that Pakistan also PROPOSES THE AGENDA, so this lands against someone who has already held the floor.]',
    },
    {
      target: 'Jordan',
      question:
        "You've called international response plans chronically underfunded for years. If Canada's mechanism ties funding automatically to your hosting numbers rather than to a pledging conference, would Jordan commit today to supporting it — or is the objection about something other than predictability?",
      goal: '[Forces a real commitment or forces Jordan to name its actual objection, which is likely governance/control of the mechanism rather than the funding formula itself.]',
    },
    {
      target: 'Jordan / Pakistan (informal grouping)',
      question:
        "If the two of you can't agree on whether this is a sovereignty issue or a financing issue, how can this committee design one mechanism that satisfies both?",
      goal: '[Mild, grouping-wide — invites them to publicly reveal internal disagreement, which Canada can then use to argue for a flexible, opt-in financing structure rather than a single rigid framework. ⚠ WEAKER THAN IT WAS: this was written for a four-country grouping. With only two members the "you can’t agree among yourselves" framing is much less potent. Consider rewriting once the major hosting states in the unassessed group are analysed.]',
    },
    // ⚠ ORPHANED & DELETED: questions targeting Türkiye and Colombia. Neither is in this committee.
  ],

  westernNations: [
    {
      target: 'US',
      question:
        'If US refugee admissions ceilings can move sharply with a change in administration, how much weight should this committee actually put on US commitments made in this room today?',
      goal: '[Aggressive — forces the US delegate to either concede volatility (weakening US credibility on the issue) or overcommit to a specific number that may not survive real-world politics, which Canada can hold them to later.]',
    },
    {
      target: 'UK',
      question:
        'Given your own asylum backlog and small-boats politics at home, on what basis should this committee treat the UK as a model for the resettlement commitments you’re asking host countries to trust?',
      goal: '[Forces the UK to either admit domestic strain — undercutting its moral authority — or overclaim progress that can be fact-checked, damaging credibility either way.]',
    },
    {
      target: 'Germany',
      question:
        "Does Germany support expanding legal resettlement pathways as part of this resolution, or only expanding host-country capacity-building funding? Because those are two different asks, and your delegation hasn't said which one you're actually backing.",
      goal: '[Forces Germany off vague solidarity language and onto a specific, recordable position — useful for Canada to know before drafting so the resolution doesn’t lose German support at the eleventh hour.]',
    },
    {
      target: 'France',
      question:
        'France has been named repeatedly in this debate over its role in displacement from the Sahel — will France address that directly, or is France content to let Canada speak for the Western delegations on this question?',
      goal: '[Creates daylight by forcing France to either engage on intervention-blame — which Canada wants to avoid doing itself — or visibly defer, revealing coordination to the room.]',
    },
  ],

  sovereigntyStates: [
    {
      target: 'Russia',
      question:
        "If Western military interventions are the root cause you say they are, does Russia's own role in the displacement of millions from Syria and Ukraine also qualify as a root cause this committee should address — and if not, why not?",
      goal: '[Most aggressive question in the set — exposes the double standard in Russia’s causation argument without Canada having to defend Western interventions itself; designed to be unanswerable without conceding the point either way. ⚠ CRITICAL: UKRAINE AND SYRIA ARE BOTH SEATED IN THIS COMMITTEE. This question now names two delegations sitting in the room. That makes it dramatically more powerful and dramatically riskier. Consider whether it is better asked BY Ukraine or Syria than by Canada — handing it to them may buy you a co-sponsor.]',
    },
    {
      target: 'China',
      question:
        'China raises sovereignty and non-interference consistently in this debate — does that principle extend to host countries’ sovereign right to determine their own resettlement and funding priorities, including accepting a financing mechanism they choose to opt into?',
      goal: '[Uses China’s own sovereignty language against a blanket rejection of the funding mechanism — forces China to either accept host-country agency (helping Canada) or reveal the sovereignty argument is selective.]',
    },
    {
      target: 'Saudi Arabia',
      question:
        'Saudi Arabia has real financial capacity and an interest in international standing — is the objection to this mechanism about the money, or about not wanting conditions attached to it?',
      goal: '[Forces Saudi Arabia to separate its financial objection from its governance objection, opening room for Canada to offer an unconditioned or lightly-conditioned funding track. ⚠ NOW LOAD-BEARING: with the UAE, Qatar and Oman gone from this committee, Saudi Arabia is the ONLY wedge available in this grouping. This question has to do the work that four questions used to.]',
    },
    {
      target: 'Sovereignty States (informal grouping)',
      question:
        'This grouping has spent more time in this debate discussing who caused displacement than how to fund a response to it — at what point does the committee move from assigning blame to solving the problem in front of it?',
      goal: '[Mild, grouping-wide, and deliberately anticlimactic — reframes the entire intervention-blame debate as a time-wasting distraction without Canada engaging on the merits, reinforcing Canada’s deflection strategy in front of the room.]',
    },
    // ⚠ ORPHANED & DELETED: questions targeting "UAE / Qatar" and Oman. None are in this committee.
  ],

  unassessed: [
    {
      target: '⚠ PLACEHOLDER — 39 delegations with no questions written',
      isPlaceholder: true,
      question:
        '⚠ PLACEHOLDER — no questions written for: Afghanistan, Belarus, Belgium, Brazil, Chile, ' +
        'DR Congo, Egypt, Eritrea, Ethiopia, Finland, Ghana, India, Indonesia, Iran, Iraq, Ireland, ' +
        'Italy, Kenya, Libya, Mexico, Morocco, Myanmar, New Zealand, North Korea, Norway, Palestine, ' +
        'Poland, Rwanda, Somalia, South Africa, South Korea, Sudan, Switzerland, Syria, Uganda, ' +
        'Ukraine, Uruguay, Yemen, Thailand (unconfirmed).',
      goal:
        '[PRIORITY ORDER — write these first: (1) UGANDA motions the unmoderated caucus. (2) FINLAND ' +
        'moves to adjourn and needs two-thirds. (3) UKRAINE and SYRIA sit opposite Russia. ' +
        '(4) AFGHANISTAN sits opposite Pakistan. (5) ETHIOPIA, KENYA, DR CONGO, IRAN, SUDAN and ' +
        'UGANDA are the real major hosting states in this room. Three of these five hold procedural ' +
        'power and you currently have nothing prepared for any of them.]',
    },
  ],
};

/**
 * Which grouping in data/blocs.js each group above belongs to. The questions section uses this
 * to title each group with the grouping's real name and to build its filter chips — so if an
 * `id` changes there, change it here too and nothing else needs touching.
 */
export const questionGroupBlocIds = {
  hostCountries: 'host-countries',
  westernNations: 'western-nations',
  sovereigntyStates: 'sovereignty-states',
  unassessed: 'unassessed',
};

export default questions;
