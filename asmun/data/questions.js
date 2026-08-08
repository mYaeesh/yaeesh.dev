// questions.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN, Monday 10 August 2026
//
// POI-style questions grouped by target bloc, ordered most to least aggressive.
// Each question either (a) exposes a factual error, (b) forces an unwanted commitment, or (c) creates daylight within a bloc.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/questions.js.

export const questions = {
  hostCountries: [
    {
      target: "Türkiye",
      question:
        "If sovereignty over migration policy is non-negotiable for your government domestically, why should this committee treat your funding needs as an international obligation rather than your own sovereign responsibility?",
      goal: "[Forces Türkiye to choose between its sovereignty rhetoric and its funding ask — exposes the tension so Canada can offer the GDP-scaled mechanism as the resolution to that exact contradiction.]"
    },
    {
      target: "Pakistan",
      question:
        "Given the scale of recent deportations of Afghan refugees, how does Pakistan reconcile its position in this committee with its non-refoulement obligations under international law?",
      goal: "[Forces an on-record justification or admission of a gap — either answer weakens Pakistan's standing to lead on host-country burden-sharing arguments for the rest of the session.]"
    },
    {
      target: "Jordan",
      question:
        "You've called international response plans chronically underfunded for years. If Canada's mechanism ties funding automatically to your hosting numbers rather than to a pledging conference, would Jordan commit today to supporting it — or is the objection about something other than predictability?",
      goal: "[Forces a real commitment or forces Jordan to name its actual objection, which is likely governance/control of the mechanism rather than the funding formula itself.]"
    },
    {
      target: "Colombia",
      question:
        "Colombia frames its Venezuelan displacement response as integration rather than encampment — does that mean Colombia agrees the solution is more legal pathways and financing, not the sovereignty-and-non-interference framing some of your Host Country colleagues are using?",
      goal: "[Creates daylight between Colombia and Türkiye/Pakistan within the Host Countries bloc, isolating Colombia as a natural early supporter.]"
    },
    {
      target: "Host Countries (bloc)",
      question:
        "If the four of you can't agree on whether this is a sovereignty issue or a financing issue, how can this committee design one mechanism that satisfies all of you?",
      goal: "[Mild, bloc-wide — invites the bloc to publicly reveal its own internal disagreement, which Canada can then use to argue for a flexible, opt-in financing structure rather than a single rigid framework.]"
    }
  ],
  westernNations: [
    {
      target: "United States",
      question:
        "If US refugee admissions ceilings can move sharply with a change in administration, how much weight should this committee actually put on US commitments made in this room today?",
      goal: "[Aggressive — forces the US delegate to either concede volatility (weakening US credibility on the issue) or overcommit to a specific number that may not survive real-world politics, which Canada can hold them to later.]"
    },
    {
      target: "United Kingdom",
      question:
        "Given your own asylum backlog and small-boats politics at home, on what basis should this committee treat the UK as a model for the resettlement commitments you're asking Host Countries to trust?",
      goal: "[Forces the UK to either admit domestic strain — undercutting its moral authority — or overclaim progress that can be fact-checked, damaging credibility either way.]"
    },
    {
      target: "Germany",
      question:
        "Does Germany support expanding legal resettlement pathways as part of this resolution, or only expanding host-country capacity-building funding? Because those are two different asks, and your delegation hasn't said which one you're actually backing.",
      goal: "[Forces Germany off vague solidarity language and onto a specific, recordable position — useful for Canada to know before drafting so the resolution doesn't lose German support at the eleventh hour.]"
    },
    {
      target: "France",
      question:
        "France has been named repeatedly in this debate over its role in displacement from the Sahel — will France address that directly, or is France content to let Canada speak for the Western bloc on this question?",
      goal: "[Creates daylight inside the Western bloc by forcing France to either engage on intervention-blame — which Canada wants to avoid doing itself — or visibly defer, revealing bloc coordination to the room.]"
    }
  ],
  sovereigntyStates: [
    {
      target: "Russia",
      question:
        "If Western military interventions are the root cause you say they are, does Russia's own role in the displacement of millions from Syria and Ukraine also qualify as a root cause this committee should address — and if not, why not?",
      goal: "[Most aggressive question in the set — exposes the double standard in Russia's causation argument without Canada having to defend Western interventions itself; designed to be unanswerable without conceding the point either way.]"
    },
    {
      target: "China",
      question:
        "China raises sovereignty and non-interference consistently in this debate — does that principle extend to host countries' sovereign right to determine their own resettlement and funding priorities, including accepting a financing mechanism they choose to opt into?",
      goal: "[Uses China's own sovereignty language against a blanket rejection of the funding mechanism — forces China to either accept host-country agency (helping Canada) or reveal the sovereignty argument is selective.]"
    },
    {
      target: "Saudi Arabia",
      question:
        "Saudi Arabia has real financial capacity and an interest in international standing — is the objection to this mechanism about the money, or about not wanting conditions attached to it?",
      goal: "[Forces Saudi Arabia to separate its financial objection from its governance objection, opening room for Canada to offer an unconditioned or lightly-conditioned funding track.]"
    },
    {
      target: "UAE / Qatar",
      question:
        "Both of your governments have positioned yourselves as constructive humanitarian and diplomatic actors on the world stage — does that reputation extend to supporting a transparent, GDP-scaled financing mechanism, or only to bilateral giving on your own terms?",
      goal: "[Aimed at the bloc's most persuadable members — invites them to publicly distinguish themselves from Russia and China's blanket rejection, accelerating a bloc split.]"
    },
    {
      target: "Oman",
      question:
        "Oman has historically taken a more neutral, mediating role in regional diplomacy than some of your Sovereignty bloc colleagues — would Oman be willing to co-sponsor language on financing mechanisms even if China and Russia do not?",
      goal: "[Least aggressive — a genuine coalition-building overture designed to peel off the bloc's most moderate member as a working-paper co-sponsor.]"
    },
    {
      target: "Sovereignty States (bloc)",
      question:
        "This bloc has spent more time in this debate discussing who caused displacement than how to fund a response to it — at what point does the committee move from assigning blame to solving the problem in front of it?",
      goal: "[Mild, bloc-wide, and deliberately anticlimactic — reframes the entire intervention-blame debate as a time-wasting distraction without Canada engaging on the merits, reinforcing Canada's deflection strategy in front of the room.]"
    }
  ]
};

/**
 * Which bloc in data/blocs.js each group above belongs to. The questions section uses this
 * to title each group with the bloc's real name and to build its filter chips — so if a bloc
 * `id` changes there, change it here too and nothing else needs touching.
 */
export const questionGroupBlocIds = {
  hostCountries: "host-countries",
  westernNations: "western-nations",
  sovereigntyStates: "sovereignty-states"
};

export default questions;
