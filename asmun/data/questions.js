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

  // The 39 delegations that had no questions written. Merged verbatim from
  // ASMUN-Canada-Research-Pack.md §B2. `predictedGroup` carries the pack's own bloc prediction —
  // note it is NOT the same field as the `group` key above, which js/sections/questions.js
  // derives from the object key and would otherwise overwrite.
  unassessed: [
    {
      target: 'Uganda',
      question:
        "Uganda's model already meets rights benchmarks most hosting states resist — will you support tying new donor funding to freedom-of-movement and right-to-work standards in ALL hosting states?",
      goal: '[daylight: splits Uganda from encampment-model neighbours Kenya and Ethiopia inside its own caucus]',
      predictedGroup: 'predicted: African hosting states (convener)',
    },
    {
      target: 'Finland',
      question:
        "UNHCR called Finland's Border Security Act a dangerous precedent for denying access to asylum — is that law compatible with the non-refoulement language you will vote for today?",
      goal: '[daylight/error-exposure: forces Finland to defend the law before EU allies; hold in reserve — only if Finland turns hostile]',
      predictedGroup: 'predicted: Western/EU donor bloc',
    },
    {
      target: 'Ukraine',
      question:
        "Ukraine received Europe's fastest-ever temporary protection — will you support extending those same standards to non-European refugees such as Sudanese and Afghans?",
      goal: '[commitment: locks an ally into universalist language Canada wants; mild daylight with tightening EU hosts]',
      predictedGroup: 'predicted: Western/EU donor bloc',
    },
    {
      target: 'Syria',
      question:
        'Syria asks this committee to fund returns while remaining a non-party to the 1951 Refugee Convention — will you commit today to accession as part of any resolution you support?',
      goal: '[commitment: refusal exposes the gap between funding asks and legal obligations]',
      predictedGroup: 'predicted: Arab grouping — semi-unpredictable, may court Western donors',
    },
    {
      target: 'Afghanistan',
      question:
        'Will you accept independent UNHCR monitoring of returnee protection inside Afghanistan, including unhindered access to returned women and girls?',
      goal: '[commitment: acceptance concedes oversight the de facto authorities reject; refusal shows why deportees fear return]',
      predictedGroup: 'predicted: origin-state grievance group — genuinely unpredictable',
    },
    {
      target: 'Ethiopia',
      question:
        'Ethiopia maintains reservations to Articles 17 and 22 of the 1951 Convention — employment and education. Will your delegation support withdrawing those reservations as part of the inclusion agenda it asks donors to finance?',
      goal: "[commitment: refusal exposes the gap between inclusion rhetoric and Ethiopia's own treaty position]",
      predictedGroup: 'predicted: African hosting states',
    },
    {
      target: 'Kenya',
      question:
        'The Shirika Plan promises freedom of movement and the right to work. Will Kenya support binding treaty-level language on those two rights for all refugees, or does it reserve the right to reimpose encampment on security grounds?',
      goal: '[commitment/daylight: either locks Kenya into rights language Canada wants, or exposes a security carve-out that separates Kenya from Uganda]',
      predictedGroup: 'predicted: African hosting states — likeliest defector to donor bloc',
    },
    {
      target: 'DR Congo',
      question:
        'DR Congo asks this committee for IDP protection standards. Will your delegation accept independent international monitoring of displacement sites inside DRC, including those controlled by its own security forces?',
      goal: '[commitment: DRC wants IDP financing without IDP oversight; the answer either wins a monitoring clause or exposes the asymmetry]',
      predictedGroup: 'predicted: African hosting states / accountability caucus — cross-cutting',
    },
    {
      target: 'Iran',
      question:
        'Iran acceded to the 1951 Convention in 1976 while reserving Articles 17, 23, 24 and 26 — employment, public relief, social security and freedom of movement. On what basis does this delegation ask to be compensated for providing rights it formally declined to guarantee?',
      goal: "[error-exposure/daylight: breaks Iran's credibility with the African and Asian hosting states it is courting]",
      predictedGroup: 'predicted: sovereignty bloc',
    },
    {
      target: 'Sudan',
      question:
        'Sudan reserved Article 26 of the 1951 Convention — freedom of movement — and asks this committee to fund a response inside its territory. Will your delegation commit to unimpeded humanitarian access across conflict lines and borders, including into Darfur and Kordofan?',
      goal: '[commitment: refusal in front of donors hands Canada the argument that funding must be conditioned on access]',
      predictedGroup: 'predicted: Arab/sovereignty grouping',
    },
    {
      target: 'Belarus',
      question:
        'Belarus acceded to the 1951 Convention in 2001 without reservation. Does that unreserved obligation extend to the third-country nationals your government has facilitated to the Polish and Lithuanian frontier — and how many of them has Belarus granted asylum?',
      goal: '[error-exposure: Belarus has no asylum record to cite, and its unreserved treaty position makes the silence louder]',
      predictedGroup: 'predicted: sovereignty bloc',
    },
    {
      target: 'Belgium',
      question:
        "Belgium's Constitutional Court annulled its own law removing financial support from asylum seekers it could not house, and the European Court found that failure to be degrading treatment. Will Belgium therefore support binding minimum reception standards in this resolution rather than voluntary ones?",
      goal: '[commitment: friendly fire — a yes wins Canada binding reception language with EU cover. Use only if the text needs strengthening]',
      predictedGroup: 'predicted: Western/EU donor bloc',
    },
    {
      target: 'Brazil',
      question:
        'Brazil asks this committee to adopt the expanded refugee definition. Will your delegation accept that it applies equally to people displaced by state aggression — Ukrainians and Sudanese — with corresponding obligations on the states that caused that displacement?',
      goal: '[daylight: invites Brazil to endorse a principle that implicates Russia, which its non-aligned posture resists]',
      predictedGroup: 'predicted: Latin American grouping',
    },
    {
      target: 'Chile',
      question:
        'Chile has suspended regularisation for over 180,000 people and begun deportation flights while consular relations with Venezuela remain frozen. Where does your delegation intend to return Venezuelan nationals to, and does Chile accept that non-refoulement applies to them?',
      goal: '[error-exposure/commitment: Chile cannot deport to Venezuela and has not said what happens to those it refuses to regularise]',
      predictedGroup: 'predicted: Latin American grouping — semi-unpredictable, may defect to border-security caucus',
    },
    {
      target: 'Egypt',
      question:
        'UN human rights experts raised the alarm in March 2026 over violations against refugees in Egypt, and its 2024 asylum law penalises those who shelter them. Will your delegation accept independent monitoring of non-refoulement as a condition of the direct budget support it is requesting?',
      goal: '[commitment: refusal in front of donors puts on the record that Egypt wants money without oversight]',
      predictedGroup: 'predicted: Arab grouping (likely convener)',
    },
    {
      target: 'Eritrea',
      question:
        "UNHCR's April 2026 Guidance Note documents the conditions driving Eritreans to seek protection abroad. If your delegation disputes it, will Eritrea accept an independent UNHCR assessment mission and open access to returnees?",
      goal: '[commitment: refusal concedes on the record that its denial is unverifiable]',
      predictedGroup: 'predicted: sovereignty bloc, but largely isolated',
    },
    {
      target: 'Ghana',
      question:
        'Ghana granted prima facie status to displaced Burkinabe. Will your delegation support operative language encouraging group-based recognition wherever displacement is caused by generalised violence — and does Ghana accept that this standard binds it at its own northern border?',
      goal: '[commitment: friendly — hands Canada an African precedent for the recognition language Brazil also wants, and quietly tests the expulsion reporting]',
      predictedGroup: 'predicted: African hosting states, drafts with Western donors',
    },
    {
      target: 'India',
      question:
        "India protects Tibetans and Sri Lankan Tamils for decades while deporting Rohingya. If protection under India's model depends on executive discretion rather than a legal standard, what guarantee does this committee have that any group India currently shelters will still be sheltered next year?",
      goal: "[error-exposure/daylight: exposes the selectivity at the core of India's argument and splits it from Indonesia]",
      predictedGroup: 'predicted: non-party sovereignty caucus (likely leader)',
    },
    {
      target: 'Indonesia',
      question:
        'Indonesia is asking resettlement states for departures. If this committee secures firm resettlement commitments for the Aceh caseload, will Indonesia commit in return to granting lawful stay and the right to work to those still awaiting departure?',
      goal: "[commitment: converts Indonesia's grievance into a trade Canada can deliver, and a yes visibly separates it from India]",
      predictedGroup: 'predicted: non-party caucus — swing vote, most winnable member',
    },
    {
      target: 'Iraq',
      question:
        'Iraq protects refugees under the 1971 Political Refugee Act, written for political refugees, not for a Syrian caseload above 300,000 or for camp closures. As Iraq consolidates its remaining twenty IDP camps, what legal standard governs whether those returns are voluntary — and will Iraq accept independent verification?',
      goal: '[error-exposure/commitment: exposes a legislative gap Iraq cannot deny; ammunition for when Syria makes the same argument]',
      predictedGroup: 'predicted: Arab grouping, secondary pull to non-party caucus',
    },
    {
      target: 'Ireland',
      question:
        "Ireland's International Protection Act 2026 completes screening in seven days. Will your delegation support a provision guaranteeing access to legal advice and an effective appeal in every accelerated procedure, including in border and transit contexts?",
      goal: '[commitment: friendly — a yes from a Pact state gives Canada procedural-safeguard language with EU cover]',
      predictedGroup: 'predicted: Western/EU donor bloc',
    },
    {
      target: 'Italy',
      question:
        'Italy is proposing EU-funded processing and return centres in Africa. Which state bears responsibility for non-refoulement when a person is detained for up to eighteen months in a third country under Italian authority — Italy, the host state, or neither?',
      goal: "[error-exposure/commitment: forces a legal answer Italy has avoided; creates daylight with Ireland and Belgium inside Canada's own bloc]",
      predictedGroup: 'predicted: Western/EU bloc — leads externalisation sub-caucus',
    },
    {
      target: 'Libya',
      question:
        'Libya ratified the 1969 OAU Refugee Convention but has never adopted asylum legislation, so every refugee in Libya is legally an illegal immigrant. Will your delegation commit to enacting an asylum law before requesting further border-management funding from this body?',
      goal: "[commitment/error-exposure: reframes Libya's funding ask as unearned — a principle that also lands on Egypt and Iraq]",
      predictedGroup: 'predicted: Arab grouping, but marginal',
    },
    {
      target: 'Mexico',
      question:
        'Mexico opposes receiving third-country nationals removed by others. Will your delegation support operative language requiring that no person be transferred to any third state without an individualised assessment and a functioning asylum system in the receiving state?',
      goal: "[commitment: friendly — turns Mexico's grievance into the clause that kills Italy's return-hub proposal]",
      predictedGroup: 'predicted: Latin American grouping',
    },
    {
      target: 'Morocco',
      question:
        'Morocco ratified the 1951 Convention, yet as of last month it still had no national asylum system and UNHCR continues to determine status on its behalf. After Ceuta, will your delegation commit to a date by which Moroccan law will provide for refugee status determination?',
      goal: "[commitment: Morocco cannot refuse outright in the week of a mass-casualty event; refusal undercuts Italy's case for making Morocco a processing partner]",
      predictedGroup: "predicted: Arab grouping, with real pull toward Italy's externalisation caucus — genuinely uncertain",
    },
    {
      target: 'Myanmar',
      question:
        "Myanmar says it wants Rohingya returns handled bilaterally. Since the obstacle to return is that Rohingya are denied citizenship under Myanmar's own law, will your delegation state the legal status returnees would hold on arrival — and accept independent verification of it?",
      goal: '[error-exposure/commitment: cannot be answered without conceding statelessness or committing to citizenship reform]',
      predictedGroup: 'predicted: sovereignty bloc, but substantively isolated',
    },
    {
      target: 'New Zealand',
      question:
        "New Zealand's quota is fixed at 1,500 places a year through 2028. Will your delegation support converting national quotas into binding multi-year pledges registered with UNHCR, so resettlement commitments cannot be revised downward mid-cycle?",
      goal: '[commitment: friendly — builds the multi-year pledging architecture Canada wants, and pre-frames the sponsorship-cut attack]',
      predictedGroup: 'predicted: Western donor bloc, resettlement wing',
    },
    {
      target: 'North Korea',
      question:
        'North Koreans who reach China are classified as economic migrants and returned under a 1986 bilateral protocol, without any status determination. Does this delegation accept that the right to have a protection claim heard exists independently of any bilateral agreement between two states?',
      goal: '[daylight: unanswerable without implicating China, which is seated here and IS a Convention party — China is the real target]',
      predictedGroup: 'predicted: sovereignty bloc',
    },
    {
      target: 'Norway',
      question:
        'Norway has reduced its resettlement quota sharply from its earlier peak while increasing its emphasis on funding. Does your delegation accept that financial contributions cannot substitute for resettlement places, and will it support text treating the two as separate, non-fungible obligations?',
      goal: '[commitment: closes the "money instead of places" loophole before hosting states exploit it]',
      predictedGroup: 'predicted: Western donor bloc',
    },
    {
      target: 'Palestine',
      question:
        'Palestine asks this committee to close the Article 1D gap. The State of Palestine is itself not a party to the 1951 Convention and has no domestic asylum framework. Will your delegation commit to accession, so the standards it asks others to apply also bind it?',
      goal: '[commitment: fair rather than hostile — but HOLD unless Palestine attacks Canada first; the co-sponsorship offer is worth more]',
      predictedGroup: 'predicted: Arab grouping, carried by Egypt',
    },
    {
      target: 'Poland',
      question:
        "Poland's asylum suspension law was intended as temporary, has run over a year, and a Polish court ruled against it in January 2026. Will your delegation commit to a fixed end date for the suspension as part of any text this committee adopts?",
      goal: '[commitment: a date Canada can bank. Consider pre-clearing in the unmoderated rather than springing it]',
      predictedGroup: 'predicted: Western/EU bloc, border-security wing',
    },
    {
      target: 'Rwanda',
      question:
        'Rwanda agreed to receive up to 250 people deported from the United States for a payment of $7.5 million. Will your delegation disclose what protection assessment each transferred person receives on arrival, and accept independent monitoring of their status?',
      goal: '[commitment/error-exposure: either concedes monitoring or establishes on record that paid transfers occur without individual assessment]',
      predictedGroup: "predicted: African group nominally, but cross-pressured toward Italy's externalisation caucus",
    },
    {
      target: 'Somalia',
      question:
        'Somalia hosts close to four million IDPs — more than most states here host refugees — yet IDPs fall outside the 1951 Convention entirely. Will your delegation join Canada in supporting binding protection standards for internally displaced persons in this resolution?',
      goal: '[commitment, used cooperatively to RECRUIT: builds the Somalia-DR Congo-Sudan-Yemen IDP coalition at no cost to Canada]',
      predictedGroup: 'predicted: African hosting/origin group',
    },
    {
      target: 'South Africa',
      question:
        "South Africa has over 161,000 pending asylum appeals and saw organised anti-migrant violence this year, with its own High Court intervening to protect migrants' access to healthcare. Will your delegation support text guaranteeing refugees' access to essential services and effective remedies — the standards its own courts have had to enforce?",
      goal: "[commitment/error-exposure: uses South Africa's own judiciary as the authority, making refusal a concession]",
      predictedGroup: 'predicted: African group / Global South non-aligned — possible rival convener to Uganda',
    },
    {
      target: 'South Korea',
      question:
        'South Korea recognises about 2.7% of asylum claims against an OECD average near 25%, and its largest applicant group is now Russian nationals. Does your delegation attribute that gap to the merits of the claims or to the procedure — and will it support text on procedural safeguards and reasoned decisions?',
      goal: '[error-exposure/commitment: USE SPARINGLY — South Korea is a probable yes-vote worth recruiting]',
      predictedGroup: 'predicted: Western donor bloc, low-profile',
    },
    {
      target: 'Switzerland',
      question:
        'Switzerland is narrowing Status S by region of origin within Ukraine and consulting on excluding men of military age. Does your delegation accept that temporary protection must not discriminate on grounds of sex, and will it support text to that effect?',
      goal: '[commitment: a Swiss yes makes it very hard for Finland, Poland or Italy to strip non-discrimination language]',
      predictedGroup: 'predicted: Western donor bloc, financing-and-institutions wing',
    },
    {
      target: 'Uruguay',
      question:
        "Uruguay has pursued community and private-sector co-sponsorship of refugees. Will your delegation support operative language recognising community sponsorship as a complementary pathway that counts toward states' burden-sharing commitments?",
      goal: "[commitment, used to RECRUIT: puts Canada's flagship policy into the text in a Latin American voice]",
      predictedGroup: 'predicted: Latin American grouping, follows Brazil',
    },
    {
      target: 'Yemen',
      question:
        'Yemen reports that floods and climate disasters now drive the majority of its new displacement, yet climate displacement falls outside the 1951 Convention entirely. Will your delegation join Canada and Somalia in supporting protection standards for people displaced internally, including by climate and disaster?',
      goal: '[commitment, used to RECRUIT: pulls an Arab-grouping member toward a Canadian clause without breaking with Egypt]',
      predictedGroup: 'predicted: Arab grouping, follows Egypt',
    },
    {
      target: 'Thailand',
      question:
        "Thailand's National Screening Mechanism has reportedly granted protection to seven people since its 2023 launch, and excludes Myanmar migrant workers and Rohingya from access. Will your delegation commit to extending the mechanism to those excluded groups?",
      goal: "[error-exposure/daylight: seven decisions is the counter-example to India's claim that non-party states protect effectively. CONFIRM THAILAND IS SEATED BEFORE USING]",
      predictedGroup: 'predicted: non-party caucus with India and Indonesia — doubly uncertain',
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
