// allies.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN, Monday 10 August 2026
//
// All 16 committee countries scored individually (Gulf States broken out, not treated as a bloc score).
// Sorted descending by SCORE. 10 = closest ally to Canada, 1 = most hostile/rival.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/allies.js.

export const allies = [
  {
    country: "United States",
    score: 8,
    category: "ally",
    rationale:
      "Deepest institutional relationship on the roster (NORAD, Five Eyes, shared border and asylum-cooperation history), but genuinely movable off Canada's script if US domestic refugee politics runs restrictionist in this committee's simulated moment — treat as a strong ally that still needs managing, not an automatic vote."
  },
  {
    country: "United Kingdom",
    score: 8,
    category: "ally",
    rationale:
      "Shares Canada's Commonwealth-mediated relationships with several Host and Gulf states and broadly aligns on resettlement-framework language, but its own asylum-backlog politics make it a liability if the debate turns to 'name your numbers' — a strong but exposed ally."
  },
  {
    country: "Germany",
    score: 7,
    category: "ally",
    rationale:
      "Has the strongest actual resettlement and funding record of the Western bloc, which makes it a useful validator for Canada's proposals, but domestic migration politics may push German delegates toward less resettlement-forward language than Canada wants — aligned on substance, cautious on framing."
  },
  {
    country: "France",
    score: 7,
    category: "ally",
    rationale:
      "Institutionally aligned with Canada and the broader Western bloc, but its exposure on intervention-blame (Sahel, Francophone Africa) means France benefits from Canada leading the deflection strategy rather than engaging directly — a dependable ally that needs Canada's cover as much as it gives Canada support."
  },
  {
    country: "Colombia",
    score: 5,
    category: "neutral",
    rationale:
      "The most persuadable Host Country: frames its Venezuelan-displacement response in integration and rights terms closer to Western vocabulary than Türkiye or Pakistan do, and has real incentive to back a predictable funding mechanism rather than ad hoc pledging — genuinely movable toward Canada."
  },
  {
    country: "Jordan",
    score: 4,
    category: "neutral",
    rationale:
      "Jordan: 4 — hostile on burden-sharing rhetoric but the GDP-scaled proposal is designed for exactly their complaint (chronic underfunding of a disproportionate hosting burden), so genuinely movable if the mechanism looks credible and fast."
  },
  {
    country: "Türkiye",
    score: 4,
    category: "neutral",
    rationale:
      "Material interest (major host, funding-hungry) pulls it toward Canada's mechanism, but its sovereignty-and-security framing of refugee policy pulls its rhetoric closer to the Sovereignty bloc — a country whose vote is gettable but whose floor speeches may sound adversarial."
  },
  {
    country: "United Arab Emirates",
    score: 4,
    category: "neutral",
    rationale:
      "The Gulf bloc's most pragmatic, soft-power-oriented member; genuinely interested in being seen as a constructive financing partner rather than a sovereignty hardliner, making it a plausible partial-mover on a blended or GDP-scaled mechanism."
  },
  {
    country: "Qatar",
    score: 4,
    category: "neutral",
    rationale:
      "Active humanitarian-diplomacy track record and appetite for convening/mediation roles make Qatar more interested in constructive positioning than in rigid non-interference doctrine — approachable on mechanism design, not on rights-conditionality language."
  },
  {
    country: "Oman",
    score: 4,
    category: "neutral",
    rationale:
      "Traditionally the Gulf's most neutral, mediation-oriented foreign policy voice, with the least invested stake in the China/Russia intervention-blame framing — plausibly the single most persuadable Sovereignty-bloc member on procedural or financing questions."
  },
  {
    country: "Pakistan",
    score: 3,
    category: "neutral",
    rationale:
      "Major host with real funding interest, but currently exposed and defensive over large-scale Afghan deportations, which puts Pakistan on the back foot and makes it likelier to align with sovereignty-protective language than to champion a Western-designed mechanism openly."
  },
  {
    country: "Saudi Arabia",
    score: 3,
    category: "neutral",
    rationale:
      "Significant financial capacity and rising interest in international standing give it a real incentive to engage on financing mechanics, but it remains far less ideologically committed to Western frameworks than the UAE or Qatar and will resist any human-rights conditionality attached to funding."
  },
  {
    country: "Kuwait",
    score: 3,
    category: "neutral",
    rationale:
      "A Gulf bloc follower rather than an independent policy actor in this space — generally tracks Saudi-aligned positioning, so treat as gettable only if Saudi Arabia itself is gettable first."
  },
  {
    country: "Bahrain",
    score: 3,
    category: "neutral",
    rationale:
      "Smallest and most conservative Gulf voice on the roster, with limited independent stake in the outcome — like Kuwait, moves with the wider Gulf consensus rather than leading it."
  },
  {
    country: "China",
    score: 2,
    category: "rival",
    rationale:
      "Low direct refugee-hosting exposure makes its position more purely strategic than material — expect consistent, disciplined use of the intervention-blame and sovereignty-non-interference arguments, with little appetite for financing-mechanism specifics."
  },
  {
    country: "Russia",
    score: 1,
    category: "rival",
    rationale:
      "The bloc's most adversarial member and the one most implicated in generating displacement itself (Syria, Ukraine) — will push intervention-blame hardest and resist any resolution language that could read as precedent for humanitarian-intervention justification; not a realistic mechanism partner in this committee."
  }
];

export default allies;
