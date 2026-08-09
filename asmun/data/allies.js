// allies.js
// Canada — ASMUN, Monday 10 August 2026
//
// ⚠️ PERSONAL READ, NOT A CONFIRMED STRUCTURE. Scores are Yaeesh's judgement, revisable in the room.
//
// Corrected against the real 48-country roster. Canada is excluded (you don't score yourself),
// leaving 47 confirmed + 1 unconfirmed (Thailand) = 48 entries.
//   9 scored (analysis preserved verbatim from the pre-correction file)
//  39 PLACEHOLDER — score: null. NOT guessed, NOT inferred, NOT zero.
//
// score: null means UNSCORED. It is NOT a low score. js/sections/allies.js must render null as a
// hollow hatched track with an "UNSCORED" chip. A raw null would render "null/10" with a 0%-width
// bar, which reads as "worst ally on the roster" — actively misleading.

const P = (country) => ({
  country,
  score: null,
  category: 'unscored',
  isPlaceholder: true,
  rationale: '⚠ PLACEHOLDER — no alignment assessed. Not guessed. Fill this in.',
});

export const allies = [
  // ---------- SCORED (9) — preserved verbatim from the pre-correction file ----------
  { country: 'US', score: 8, category: 'ally',
    rationale: "Deepest institutional relationship on the roster (NORAD, Five Eyes, shared border and asylum-cooperation history), but genuinely movable off Canada's script if US domestic refugee politics runs restrictionist in this committee's simulated moment — treat as a strong ally that still needs managing, not an automatic vote." },
  { country: 'UK', score: 8, category: 'ally',
    rationale: "Shares Canada's Commonwealth-mediated relationships with several Host and Gulf states and broadly aligns on resettlement-framework language, but its own asylum-backlog politics make it a liability if the debate turns to 'name your numbers' — a strong but exposed ally." },
  { country: 'Germany', score: 7, category: 'ally',
    rationale: "Has the strongest actual resettlement and funding record of the Western bloc, which makes it a useful validator for Canada's proposals, but domestic migration politics may push German delegates toward less resettlement-forward language than Canada wants — aligned on substance, cautious on framing." },
  { country: 'France', score: 7, category: 'ally',
    rationale: "Institutionally aligned with Canada and the broader Western bloc, but its exposure on intervention-blame (Sahel, Francophone Africa) means France benefits from Canada leading the deflection strategy rather than engaging directly — a dependable ally that needs Canada's cover as much as it gives Canada support." },
  { country: 'Jordan', score: 4, category: 'neutral',
    rationale: 'Hostile on burden-sharing rhetoric but the GDP-scaled proposal is designed for exactly their complaint (chronic underfunding of a disproportionate hosting burden), so genuinely movable if the mechanism looks credible and fast.' },
  { country: 'Pakistan', score: 3, category: 'neutral',
    rationale: 'Major host with real funding interest, but currently exposed and defensive over large-scale Afghan deportations, which puts Pakistan on the back foot and makes it likelier to align with sovereignty-protective language than to champion a Western-designed mechanism openly. ⚠ REVISIT: Pakistan PROPOSES THE AGENDA ITEM — it opens the session holding the floor, which is more influence than a 3 implies.' },
  { country: 'Saudi Arabia', score: 3, category: 'neutral',
    rationale: 'Significant financial capacity and rising interest in international standing give it a real incentive to engage on financing mechanics, but it remains far less ideologically committed to Western frameworks than the UAE or Qatar and will resist any human-rights conditionality attached to funding. ⚠ REVISIT: the UAE/Qatar comparison is orphaned — neither is in this committee. Saudi Arabia is now your only non-China/Russia wedge.' },
  { country: 'China', score: 2, category: 'rival',
    rationale: 'Low direct refugee-hosting exposure makes its position more purely strategic than material — expect consistent, disciplined use of the intervention-blame and sovereignty-non-interference arguments, with little appetite for financing-mechanism specifics.' },
  { country: 'Russia', score: 1, category: 'rival',
    rationale: "The bloc's most adversarial member and the one most implicated in generating displacement itself (Syria, Ukraine) — will push intervention-blame hardest and resist any resolution language that could read as precedent for humanitarian-intervention justification; not a realistic mechanism partner in this committee. ⚠ REVISIT: UKRAINE IS SEATED IN THIS COMMITTEE. Russia is across the table from a delegation it displaced. That changes the floor dynamic entirely." },

  // ---------- PLACEHOLDER (38 confirmed) ----------
  P('Afghanistan'), P('Belarus'), P('Belgium'), P('Brazil'), P('Chile'), P('DR Congo'), P('Egypt'),
  P('Eritrea'), P('Ethiopia'), P('Finland'), P('Ghana'), P('India'), P('Indonesia'), P('Iran'),
  P('Iraq'), P('Ireland'), P('Italy'), P('Kenya'), P('Libya'), P('Mexico'), P('Morocco'),
  P('Myanmar'), P('New Zealand'), P('North Korea'), P('Norway'), P('Palestine'), P('Poland'),
  P('Rwanda'), P('Somalia'), P('South Africa'), P('South Korea'), P('Sudan'), P('Switzerland'),
  P('Syria'), P('Uganda'), P('Ukraine'), P('Uruguay'), P('Yemen'),

  // ---------- PLACEHOLDER (1 unconfirmed) ----------
  { ...P('Thailand'), isUnconfirmed: true,
    rationale: '⚠ PLACEHOLDER + UNCONFIRMED DELEGATION — not on the official roll call. No alignment assessed.' },
];

export const allyCounts = {
  scored:      allies.filter((a) => typeof a.score === 'number').length, //  9
  placeholder: allies.filter((a) => a.isPlaceholder).length,             // 39
};

export default allies;
