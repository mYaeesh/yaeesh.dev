// allies.js
// Canada — ASMUN, Monday 10 August 2026
//
// ⚠️ PERSONAL READ, NOT A CONFIRMED STRUCTURE. Scores are Yaeesh's judgement, revisable in the room.
//
// Corrected against the real 48-country roster. Canada is excluded (you don't score yourself),
// leaving 47 confirmed + 1 unconfirmed (Thailand) = 48 entries.
//
// All 48 are now scored. The 39 placeholders that stood here previously have been replaced with
// the consolidated assessments from ASMUN-Canada-Research-Pack.md §B1, verbatim. The P() helper
// that generated those placeholders is gone — there is no unscored entry left in this file.
//
// Thailand keeps isUnconfirmed: it is on the sign-in sheet but not the official roll call, so its
// score is provisional in a way the other 47 are not.

export const allies = [
  // ---------- Scored before the merge (9) — preserved verbatim ----------
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

  // ---------- Merged from research pack §B1 (38 confirmed) ----------
  { country: 'Afghanistan', score: 3, category: 'rival',
    rationale: "Values clash over recognition and women's rights; attacks Canadian backlogs. Narrow tactical overlap: both oppose Pakistan's deportation programme." },
  { country: 'Belarus', score: 1, category: 'rival',
    rationale: 'No bilateral basis with Canada; core objective is to strip any "instrumentalization" or state-conduct language from the text, directly opposing Canada. Will second Russian procedural motions. Nothing flips it — outnumber, do not persuade.' },
  { country: 'Belgium', score: 8, category: 'ally',
    rationale: 'EU/NATO partner and reliable co-sponsor on financing, resettlement and non-refoulement. Divergence: its own ECtHR and Constitutional Court defeats on reception make it resist binding reception standards — and make it the ally most easily embarrassed on the floor.' },
  { country: 'Brazil', score: 7, category: 'ally',
    rationale: 'Substantively closer to Canada than much of the Western bloc — expanded Cartagena definition, prima facie recognition, 977,000 hosted — and can carry Global South votes Canada cannot reach. Diverges on framing: refuses Russia-facing language and donor conditionality.' },
  { country: 'Chile', score: 5, category: 'neutral',
    rationale: 'Democratic hemispheric partner, but the government seated since March 2026 is running deportation flights, has halted regularisation for 180,000+, and is fortifying the Peru border; will not vote for text limiting removals. Flips if burden-sharing means relocation OUT of Chile.' },
  { country: 'DR Congo', score: 5, category: 'neutral',
    rationale: 'Transactional overlap on funding and non-refoulement, but prioritises accountability for eastern-DRC aggression over protection text and will trade the latter for the former. Live floor conflict with Rwanda, seated in this room.' },
  { country: 'Egypt', score: 4, category: 'neutral',
    rationale: 'Converges with Canada only on funding the Sudan response; hosts 1.09M and demands direct budget support while rejecting monitoring. Its 2024 asylum law and documented 2026 deportations put it against every accountability clause Canada wants.' },
  { country: 'Eritrea', score: 2, category: 'rival',
    rationale: 'Non-party generating 679,000+ refugees worldwide while denying it is an origin state; exists in this room to block root-cause and accountability language. No funding lever — it is not asking for hosting money. Isolated: adversarial with Ethiopia, and Sudan, Egypt and Uganda all host its nationals.' },
  { country: 'Ethiopia', score: 5, category: 'neutral',
    rationale: 'Aligned with Canada on GCR self-reliance models and donor-funded inclusion, but rejects any human-rights conditionality on hosting funds given scrutiny of its own internal conflicts. Flips to ally if Canada offers financing without governance conditions.' },
  { country: 'Finland', score: 9, category: 'ally',
    rationale: 'Like-minded donor and near-automatic co-sponsor, but needs instrumentalization carve-outs (Border Security Act) that clash with pure non-refoulement language. Holds the adjournment motion — keep close.' },
  { country: 'Ghana', score: 7, category: 'ally',
    rationale: "Granted prima facie status to displaced Burkinabe — exactly the practice Canada wants normalised — and is a Commonwealth partner offering African cover without Uganda or Ethiopia's conditionality fight. Small divergence: needs funding, will not sign donor-conditionality language." },
  { country: 'India', score: 5, category: 'neutral',
    rationale: 'Large democracy with real weight over non-aligned votes and a genuine long-run protection record for Tibetans and Sri Lankan Tamils, but a non-party that has refouled Rohingya and will oppose any binding definition or monitoring. Natural leader of the "we protect without the Convention" caucus — the main structural threat to Canada\'s text.' },
  { country: 'Indonesia', score: 5, category: 'neutral',
    rationale: 'No ideological quarrel with Canada and one tractable ask — resettlement places out of transit. Non-party, so it will not accept binding definitions, but it follows India by default rather than conviction. The softest and most winnable member of the non-party bloc; a swing vote.' },
  { country: 'Iran', score: 2, category: 'rival',
    rationale: 'No functioning Canada-Iran relationship; will use the topic as a sanctions-relief and anti-Western platform. Narrow overlap on opposing forced Afghan returns is undercut by its own expulsion of ~1.8M Afghans in 2025 and its reservations to Convention Arts. 17, 23, 24 and 26.' },
  { country: 'Iraq', score: 4, category: 'neutral',
    rationale: 'Practical rather than adversarial: wants financing for returns, reintegration and camp closure. Non-party operating under the 1971 Political Refugee Act; will vote with the Arab grouping on sovereignty and resist verification of whether returns are voluntary.' },
  { country: 'Ireland', score: 8, category: 'ally',
    rationale: 'Like-minded small state with a strong development-aid record and no baggage in hosting regions — the natural drafting partner and the bloc member most likely to argue generous substance over security carve-outs. Diverges only on protecting its new accelerated-procedure architecture under the EU Pact.' },
  { country: 'Italy', score: 6, category: 'neutral',
    rationale: 'G7/NATO partner who will vote with Canada, but the leading exponent of offshore processing and return hubs — an ally on the vote and a rival on the paragraph. Post-Ceuta it is campaigning to scale the Albania model EU-wide. Cannot be converted; dilute its language instead.' },
  { country: 'Kenya', score: 6, category: 'neutral',
    rationale: "Shirika Plan (camp-to-settlement integration) is close to a Canadian ideal and Kenya is a Commonwealth partner; divergence is its security-based movement restrictions and encampment history. Most likely African delegation to defect toward the donor bloc — Canada's best bridge into the African caucus." },
  { country: 'Libya', score: 2, category: 'rival',
    rationale: 'Non-party with no asylum law at all — ratified the 1969 OAU Convention but never implemented it, so all refugees are legally illegal immigrants. UN documented systemic torture, trafficking and extortion (Feb 2026 report). Its only lever is a funding ask Canada should be opposing.' },
  { country: 'Mexico', score: 7, category: 'ally',
    rationale: "North American partner sharing Canada's institutional model — real asylum agency, expanded Cartagena definition, differentiated procedures — and the best voice for Canada's case inside the Latin American group. Sharp divergence: it resents being a receiving state for others' removals, which cuts against Canada's own Safe Third Country Agreement." },
  { country: 'Morocco', score: 4, category: 'neutral',
    rationale: 'No ideological quarrel with Canada, but a Convention party with no national asylum system, at the centre of the Ceuta mass-casualty event since 30 July 2026, and focused on deflecting responsibility while securing funding. A real deal is available: financing to build the asylum system, offered without blame.' },
  { country: 'Myanmar', score: 2, category: 'rival',
    rationale: 'Origin of 3.7M IDPs and 1.18M Rohingya refugees in Bangladesh, while denying the Rohingya are its nationals; exists here to block return-conditions and accountability language. No funding lever. Substantively isolated — Indonesia and Thailand both bear the costs of its displacement, so it is a wedge into the non-party caucus.' },
  { country: 'New Zealand', score: 9, category: 'ally',
    rationale: 'Closest structural analogue to Canada: Five Eyes and Commonwealth partner, quota-based resettlement state (1,500/year through 2028), no frontline exposure, near-identical interests. Safest delegation in the room. Only caution: at 1,500 places it shares Canada\'s exposure to the "small numbers" attack.' },
  { country: 'North Korea', score: 1, category: 'rival',
    rationale: 'No bilateral relationship, no shared interest, no lever; denies it produces refugees at all. Least persuadable delegation in the room. Tactical significance is only as a reliable second for Russian, Chinese and Belarusian procedural motions.' },
  { country: 'Norway', score: 8, category: 'ally',
    rationale: "High-credibility donor and reliable co-sponsor on humanitarian financing and UNHCR core funding. Liability: its resettlement quota has been cut sharply from a peak of 3,000, so hosting states can cite it to argue the whole donor bloc is retreating — coordinate before the session. Will push money-instead-of-places, which weakens Canada's resettlement argument." },
  { country: 'Palestine', score: 5, category: 'neutral',
    rationale: 'Canada recognised the State of Palestine on 21 Sept 2025 and is a UNRWA donor — a genuine bilateral opening most Western delegations lack. Holds the strongest legal card in the room: Article 1D excludes ~5M Palestine refugees from the very Convention this committee is strengthening. Diverges on right of return and on any resettlement framing.' },
  { country: 'Poland', score: 7, category: 'ally',
    rationale: "NATO partner, most reliable vote on Ukraine and Russia-facing language, and hosts 967,505 Ukrainians under temporary protection. Sharp divergence: its March 2025 law suspending the right to seek asylum at the Belarus border is exactly what Canada's text should prohibit, and it will not trade it. Draft around it or lose Poland, Finland and Italy together." },
  { country: 'Rwanda', score: 4, category: 'neutral',
    rationale: "Capable delegation that genuinely hosts refugees, but the world's most prominent proponent of paid third-country transfer (250 US deportees for $7.5M, Aug 2025) — the practice Canada should constrain. In open conflict with DR Congo, seated here, so backing it costs the African hosting group." },
  { country: 'Somalia', score: 5, category: 'neutral',
    rationale: 'No adversarial interest in Canada; ~4M IDPs and 499,000 refugees abroad give it a real, fundable ask. Will align with the African hosting group against conditionality and has limited delivery capacity. The cheapest ally purchase in the room: name IDP protection and reintegration financing in the text.' },
  { country: 'South Africa', score: 5, category: 'neutral',
    rationale: "Urban non-encampment model is doctrinally close to Canada's and it carries weight with the non-aligned group, but it is firmly non-aligned, will not back Russia-facing language, and its 161,000-case backlog plus the April-June 2026 xenophobic violence make it hostile to any accountability or reception-standards clause." },
  { country: 'South Korea', score: 6, category: 'neutral',
    rationale: 'Treaty-bound democratic middle power that will vote with Canada on funding and UNHCR support and has no interest in the sovereignty bloc. But a 2.7% recognition rate (OECD average ~25%) makes it quietly hostile to procedural or recognition benchmarks. Recruit rather than confront — it is a probable yes.' },
  { country: 'Sudan', score: 3, category: 'rival',
    rationale: 'Belligerent in the war it asks this committee to fund; resists cross-border access, independent monitoring and attribution, all of which Canada wants. Overlap limited to financing the regional response, which it will try to trade against access.' },
  { country: 'Switzerland', score: 8, category: 'ally',
    rationale: 'Credible donor with deep institutional investment in the Geneva system and a reliable co-sponsor for anything strengthening UNHCR financing and mandate. Divergence: narrowing Status S by Ukrainian region of origin and consulting on excluding military-age men sits badly with non-discrimination language.' },
  { country: 'Syria', score: 4, category: 'neutral',
    rationale: 'Post-Assad transitional govt wants Western reconstruction/return funding (transactional alignment) but is a Convention non-party with unproven returnee protections; hostile to conditions-based return language.' },
  { country: 'Uganda', score: 6, category: 'neutral',
    rationale: 'Agrees with Canada on burden-sharing and funding but sides with hosting states against donor conditionality; rights friction outside topic. Flips to ally if Canada offers concrete funding/resettlement out of Uganda.' },
  { country: 'Ukraine', score: 8, category: 'ally',
    rationale: 'Canada is a top backer (CUAET, aid); votes together on almost everything. Divergence: Ukraine wants hard Russia-attribution language that may cost neutral votes.' },
  { country: 'Uruguay', score: 8, category: 'ally',
    rationale: "Wants almost exactly what Canada wants — Cartagena expanded definition, complementary pathways, community co-sponsorship, regional solidarity. Limitation is capacity, not will. Its value is as a Latin American voice making Canada's argument; win Brazil and Brazil carries Uruguay." },
  { country: 'Yemen', score: 4, category: 'neutral',
    rationale: 'No adversarial interest in Canada and a legitimate funding claim: 5.2M IDPs, 22M in need, yet still hosting 63,000 refugees and 142,394 Somalis. Votes with the Arab grouping against monitoring and access conditions, and delivery capacity is near nil. Flips toward Canada on climate/IDP protection language.' },

  // ---------- Merged from research pack §B1 (1 unconfirmed) ----------
  { country: 'Thailand', score: 5, category: 'neutral', isUnconfirmed: true,
    rationale: 'UNCONFIRMED DELEGATION — sign-in sheet only, not on the official roll call; score is provisional. Non-party hosting 93,333 in nine border camps for four decades, but its 2023 National Screening Mechanism has reportedly protected seven people and excludes Rohingya and Myanmar migrant workers. Follows India; winnable on resettlement places like Indonesia.' },
];

export const allyCounts = {
  scored:      allies.filter((a) => typeof a.score === 'number').length, // 48
  placeholder: allies.filter((a) => a.isPlaceholder).length,             //  0
};

export default allies;
