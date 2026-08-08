// facts.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN, Monday 10 August 2026
//
// Every entry verified against a primary source as of August 2026 unless marked UNVERIFIED.
// This file doubles as the source for the 02-facts-and-figures.md knowledge file — schema is fixed, do not reorder fields.
//
// `verified` is a THREE-STATE string, not a boolean:
//   "yes"        checked against a primary source; safe to say out loud.
//   "partially"  the core claim is primary-sourced but some sub-figure is not — read `verifiedNote`.
//   "no"         could not be substantiated. Do not use in committee as written.
// The facts section renders "partially" and "no" with their own badges and colours, so a
// half-checked claim can never be mistaken for a fully checked one at a glance.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/facts.js.

export const facts = [
  {
    id: "levels-plan-total",
    fact: "Canada's 2026–2028 Immigration Levels Plan sets a target of 49,300 admissions per year under Refugees and Protected Persons (range 42,000–55,000), representing 13% of total planned permanent resident admissions (380,000/year). The 49,300 breaks down as 20,000 Protected Persons in Canada & Dependents Abroad, 13,250 Government-Assisted Refugees, 50 Blended Visa Office-Referred, and 16,000 Privately Sponsored Refugees. The target is flat at 49,300 for 2026, 2027, and 2028.",
    source: "IRCC, 'Supplementary Information for the 2026–2028 Immigration Levels Plan,' canada.ca, issued 2025-11-04, modified 2025-11-05.",
    verified: "yes",
    verifiedNote: "Confirmed directly from the official IRCC levels table — all four sub-targets sum exactly to 49,300.",
    use: "Canada's headline credibility line: state the total, the 13% share, and immediately pivot to the PSR shortfall before an opponent can raise it. Establishes Canada as a numbers-literate, good-faith actor going into the GDP-scaled funding pitch to Host Countries.",
    caveat: "13% is down from the 15% share IRCC cited under the prior (2025–2027) plan. An opposing delegate can frame this drop as a retreat from 'global leadership,' not just a technical rebalancing toward economic immigration."
  },
  {
    id: "psr-target-2026",
    fact: "Canada's 2026 Privately Sponsored Refugee (PSR) target is 16,000, down from 23,000 in 2025 — a 30.4% cut. The target holds flat at 16,000 for 2027 and 2028. IRCC has also extended the pause on new PSR intake (Group of Five and Community Sponsor streams) through December 31, 2026.",
    source: "IRCC, 'Supplementary Information for the 2026–2028 Immigration Levels Plan,' canada.ca (16,000 figure); Canadian Council for Refugees, 'Release: 2026 Immigration Levels,' ccrweb.ca; corroborated by IRCC's 2025–2027 Levels Plan supplementary information (23,000 2025 figure).",
    verified: "yes",
    verifiedNote: "Both the 2026 figure (16,000) and the 2025 comparator (23,000) are confirmed from IRCC primary sources — this is the single most load-bearing number in Canada's brief and the math checks out to almost exactly 30%.",
    use: "Do not wait for someone else to raise this. Name it first, in the opening speech if possible: 'Canada's own privately sponsored refugee target fell 30% this year, and we are not going to pretend otherwise.' Naming your own weakness before an opponent does removes their leverage and buys credibility for the GDP-scaled funding ask.",
    caveat: "This is Canada's single biggest vulnerability in committee. It directly undercuts any line about Canada as a 'global leader in resettlement.' Expect Host Countries and Sovereignty States to use this as the anchor for a hypocrisy attack — have the applications-backlog/intake-pause context ready as the honest explanation, not an excuse."
  },
  {
    id: "gar-target",
    fact: "Canada's 2026–2028 Government-Assisted Refugee (GAR) target is 13,250 per year, including dedicated streams for human rights defenders and LGBTQI+ individuals in need of protection.",
    source: "IRCC, 'Supplementary Information for the 2026–2028 Immigration Levels Plan,' canada.ca.",
    verified: "yes",
    verifiedNote: "Confirmed directly from the official IRCC levels table.",
    use: "Use to show GAR (state-funded) held roughly steady even as PSR (privately-funded) was cut — supports the argument that the PSR cut is a capacity/intake-management issue, not a retreat from resettlement as a whole.",
    caveat: "13,250 is still below GAR's historic highs in some prior plans — don't imply it's been increased if pressed for a year-over-year comparison you haven't verified."
  },
  {
    id: "protected-persons-pr-initiative",
    fact: "As a one-time, two-year initiative, Canada will streamline permanent residence for approximately 115,000 Protected Persons already in Canada who are on a pathway to PR. These admissions are in addition to the regular Refugees and Protected Persons targets in the Levels Plan.",
    source: "IRCC, 'Supplementary Information for the 2026–2028 Immigration Levels Plan,' canada.ca.",
    verified: "yes",
    verifiedNote: "Confirmed verbatim from the official IRCC supplementary information page.",
    use: "Strong deflection tool against the PSR-cut attack: point to the 115,000 as proof Canada is still absorbing large humanitarian volume, just through a different mechanism (regularizing people already here rather than new resettlement).",
    caveat: "This is a domestic backlog-clearing measure, not new intake — it does nothing for refugees still outside Canada waiting for resettlement or sponsorship. An opponent can point out these are people already inside Canada's borders, so it doesn't answer the PSR criticism about reduced pathways in from abroad."
  },
  {
    id: "1951-convention",
    fact: "Canada is a party to the 1951 Convention Relating to the Status of Refugees and its 1967 Protocol.",
    source: "Global Affairs Canada, Treaty Information database (treaty-accord.gc.ca), Treaty ID 104943; UNHCR, 'The 1951 Refugee Convention: 70 years of life-saving protection.'",
    verified: "yes",
    verifiedNote: "Confirmed via Canada's own treaty registry.",
    use: "Baseline legal legitimacy claim — use to ground any non-refoulement argument and to distinguish Canada from states that have not ratified (relevant if any Sovereignty or Host state present has a reservation or non-signatory status — verify country-by-country before deploying against a specific delegate).",
    caveat: "Being a party to the Convention doesn't answer criticism about domestic implementation gaps (e.g., Safe Third Country Agreement critiques, detention practices) — don't overclaim moral high ground on this alone."
  },
  {
    id: "global-compact-refugees",
    fact: "Canada voted for the adoption of the Global Compact on Refugees on 17 December 2018.",
    source: "IRCC news release archive; Library of Parliament, 'Primer on the Global Compact on Refugees and the Global Compact for Safe, Orderly and Regular Migration' (2019).",
    verified: "yes",
    verifiedNote: "Confirmed via IRCC's own historical announcement and Library of Parliament's official primer.",
    use: "Frame Canada's GDP-scaled funding proposal as operationalizing the GCR's 'predictable and equitable responsibility-sharing' principle rather than as a novel Canadian invention — this makes it harder for Sovereignty States to paint it as unilateral Western imposition.",
    caveat: "The GCR is explicitly non-binding — a rival delegate can note that 'affirming' the Compact costs Canada nothing and ask what binding commitment backs the rhetoric."
  },
  {
    id: "global-compact-migration",
    fact: "Canada adopted the Global Compact for Safe, Orderly and Regular Migration on 11 December 2018, in Marrakech.",
    source: "IRCC, 'Canada adopts historic agreement to address migration,' canada.ca news release, December 2018.",
    verified: "yes",
    verifiedNote: "Confirmed via IRCC's own press release.",
    use: "Pair with the GCR citation to show Canada engages both the refugee-specific and broader migration-governance architecture — useful when a Host Country conflates refugee and economic-migration burden-sharing.",
    caveat: "Also non-binding; several states (not on this roster, but worth knowing) withdrew or never joined the GCM, which can be raised to question its practical weight."
  },
  {
    id: "empp",
    fact: "The Economic Mobility Pathways Pilot (EMPP), launched in 2018, let skilled refugees and displaced people immigrate to Canada through economic streams (including a No Job Offer Stream modelled on the Federal Skilled Worker Program). As of the program's closure notice (page last modified 25 March 2026), the EMPP is CLOSED to new applications. Secondary reporting puts total admissions at roughly 970 people, with over 30% in healthcare occupations.",
    source: "IRCC, 'Closed: Economic Mobility Pathways Pilot,' canada.ca (status and program description, confirmed primary); Talent Beyond Boundaries / RSTP program summaries (970-admissions and healthcare-share figures — secondary, not independently confirmed on the IRCC page itself).",
    verified: "partially",
    verifiedNote: "Program existence, design, and CLOSED status are confirmed directly from canada.ca. The 970-admissions and 30%-healthcare figures come from secondary sources (refugee-sector NGOs), not from the IRCC page itself — treat those two sub-numbers as solid but not primary-sourced.",
    use: "Use EMPP as evidence of Canada's complementary-pathways innovation (relevant to Host Countries' skilled-refugee retention concerns), but do not claim it is an active program — it is closed.",
    caveat: "The pilot being closed cuts against a 'Canada is expanding pathways' narrative. If pressed on why it closed, do not guess at the reason — say a successor program status needs confirming rather than inventing a justification on the floor."
  },
  {
    id: "iccpr",
    fact: "Canada acceded to the International Covenant on Civil and Political Rights (ICCPR) on 19 May 1976 and ratified the (First) Optional Protocol the same year, allowing individual complaints to the UN Human Rights Committee. Canada's non-refoulement obligations flow from the Committee's interpretation of ICCPR rights (e.g., Articles 6 and 7) — the leading case is Kindler v. Canada, which held Canada can be in violation if it takes an action whose foreseeable consequence is a Covenant violation elsewhere.",
    source: "UN Treaty Collection (ICCPR ratification status); McGill Law Journal, 'Punting Terrorists, Assassins, and Other Undesirables: Canada, the Human Rights Committee, and Requests for Interim Measures of Protection.'",
    verified: "yes",
    verifiedNote: "Ratification date and Optional Protocol status confirmed; the non-refoulement doctrinal basis is well-established in the secondary legal literature cited.",
    use: "Legal backstop for any non-refoulement argument that doesn't rely on the Refugee Convention alone — useful if a Sovereignty State tries to relitigate whether the 1951 Convention 'really' binds anyone.",
    caveat: "ICCPR non-refoulement is a Human Rights Committee interpretation, not explicit treaty text — a well-prepared opposing delegate can note this is more contestable than the Convention Against Torture's explicit Article 3 non-refoulement clause."
  },
  {
    id: "global-displacement-total",
    fact: "// CORRECTED FROM NOTES — At the end of 2025, 117.8 million people worldwide were forcibly displaced (41.6 million refugees, 9 million asylum-seekers, 68.7 million IDPs). This is a 4.4% DECREASE from 123.25 million at end-2024 — the first decline in forced displacement in a decade, driven by large-scale (often adverse-circumstance) returns to Afghanistan, Syria, and Sudan.",
    source: "UNHCR, Global Trends 2025 report and 'Figures at a Glance,' unhcr.org, published 11 June 2026.",
    verified: "yes",
    verifiedNote: "This figure supersedes the '120M+' figure in the original notes. The current, current-as-of-August-2026 UNHCR total is 117.8 million, not 120M+, and the trend line is now down for the first time since UNHCR started seeing sustained annual increases roughly a decade ago.",
    use: "Lead with the decline as evidence international cooperation frameworks (returns support, resettlement, complementary pathways) are producing real solutions — but pair it immediately with the caveat below so you're not caught overselling a fragile trend.",
    caveat: "UNHCR itself flags that most 2025 returns happened 'under adverse circumstances' (involuntary policy-driven returns, especially of Afghans from Pakistan/Iran) rather than safe, dignified, durable returns. An opposing delegate can — accurately — call this a statistical improvement built on forced returns, not solved crises. Do not present the decline as an unqualified win."
  },
  {
    id: "host-country-share",
    fact: "// CORRECTED FROM NOTES — Low- and middle-income countries hosted 68% of the world's refugees and other people in need of international protection at end-2025 (not ~75%). Separately, 65% of refugees are hosted in countries neighbouring their country of origin. Colombia, Germany, Türkiye, Uganda, Iran, Chad, and Pakistan hosted the largest refugee populations.",
    source: "UNHCR, Global Trends 2025 / 'Figures at a Glance,' unhcr.org, published 11 June 2026.",
    verified: "yes",
    verifiedNote: "The commonly-cited '~75%' figure is from older Global Trends editions (it tracked closer to 73–75% in 2023–2024 reports). The current 2025 figure is 68%. Use 68%, not 75%, and flag the change if anyone in committee cites the older number.",
    use: "This is Canada's central evidentiary plank for the GDP-scaled funding mechanism pitch to Host Countries: developing/host countries carry roughly two-thirds of the global burden. Naming Colombia and Türkiye by name (both in this committee's Host Countries bloc) as top hosts personalizes the ask.",
    caveat: "The declining share (68% vs ~75% previously) could be spun by a skeptical delegate as evidence burden-sharing is already improving on its own — be ready to explain the decline is about total displacement falling and shifting geography, not about wealthy countries suddenly hosting more."
  },
  {
    id: "cop27-climate-mobility-pledge",
    fact: "// UNVERIFIED — The notes claim a ~€340M pledge by Canada, the EU, and New Zealand at COP27 for climate mobility. This could NOT be confirmed against any primary source.",
    source: "None found. Checked: Canada's own official 'COP27 Summary of Outcomes' (canada.ca), which itemizes all COP27-related Canadian funding announcements and totals $84.25 million CAD across clean energy, loss and damage, climate finance access, governance, gender, and carbon pricing — no €340M figure, and no EU/New Zealand joint climate mobility pledge appears anywhere on that page. Also checked UNHCR's Global Compact on Refugees 'Multi-stakeholder Pledge: Climate Action' (a real pledge on this theme) — but that pledge is dated 2023 (Global Refugee Forum, not COP27), led by Ethiopia/Denmark/Germany/Somalia/IFRC (not Canada/EU/New Zealand), and carries no stated dollar figure.",
    verified: "no",
    verifiedNote: "This number could not be substantiated anywhere. It may be a conflation of several different real COP27/GCR pledges, or simply incorrect. DO NOT use the €340M / EU / New Zealand claim in committee as stated.",
    use: "Do not deploy this fact until independently re-verified — if you want a climate-mobility funding hook, use the real, sourced items instead: Canada's $84.25M in COP27 announcements (with the loss-and-damage and climate finance access sub-items), or the 2023 GCR Multi-stakeholder Pledge on Climate Action if a partner recasts it accurately.",
    caveat: "A well-prepared opposing delegate — especially EU-aligned Western Nations or a Host Country doing their own homework — could ask you to cite the pledge document. You would not be able to produce one. Flag this to yourself before committee: either drop it entirely or replace it with the verified $84.25M figure."
  }
];

export default facts;
