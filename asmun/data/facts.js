// ASMUN — data/facts.js
//
// ⚠️  READ THIS BEFORE QUOTING ANYTHING HERE IN COMMITTEE.
//
// How `verified` is set in this seed file, honestly:
//
//   verified: true   Only for stable, definitional facts about legal instruments —
//                    what a treaty says, when it was adopted, what an article covers.
//                    These do not drift year to year and the source is the instrument
//                    itself, which you can check in one search.
//
//   verified: false  EVERY statistic. All figures below were written from memory as
//                    layout placeholders and several are certainly stale or wrong.
//                    Displacement, funding and resettlement numbers move every year.
//                    Do not read a `false` number aloud — look it up, replace it,
//                    then flip the flag yourself.
//
// The facts section renders `verified: false` with a red border, an UNVERIFIED
// badge and a text label, so unchecked claims are impossible to miss on screen.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/facts.js, which
// groups by the `group` field. Add groups just by using a new string.

/**
 * @typedef {Object} Fact
 * @property {string}  id       - stable slug, unique across the file
 * @property {string}  group    - heading it renders under; new strings make new groups
 * @property {string}  text     - the claim, as you would say it out loud
 * @property {string}  source   - where it came from. Always fill this in.
 * @property {boolean} verified - true ONLY if you have checked it against the source
 */

/** @type {Fact[]} */
export const facts = [
  // --- Scale & Displacement ------------------------------------------------
  {
    id: 'scale-01',
    group: 'Scale & Displacement',
    text:
      'PLACEHOLDER FIGURE — roughly 120 million people worldwide are forcibly displaced, counting ' +
      'refugees, asylum seekers and the internally displaced together.',
    source: 'CHECK: UNHCR Global Trends, most recent edition',
    verified: false,
  },
  {
    id: 'scale-02',
    group: 'Scale & Displacement',
    text:
      'PLACEHOLDER FIGURE — the substantial majority of refugees are hosted by low- and ' +
      'middle-income countries, not by wealthy donor states.',
    source: 'CHECK: UNHCR Global Trends, most recent edition',
    verified: false,
  },
  {
    id: 'scale-03',
    group: 'Scale & Displacement',
    text:
      'PLACEHOLDER FIGURE — internally displaced people outnumber cross-border refugees, and fall ' +
      'outside the 1951 Convention entirely because they have not crossed an international border.',
    source: 'CHECK: IDMC Global Report on Internal Displacement',
    verified: false,
  },
  {
    id: 'scale-04',
    group: 'Scale & Displacement',
    text:
      'PLACEHOLDER FIGURE — Türkiye, Iran, Colombia, Germany and Pakistan are consistently among ' +
      'the largest refugee-hosting states by absolute numbers. Verify the current ordering before ' +
      'citing it; it changes.',
    source: 'CHECK: UNHCR Global Trends, most recent edition',
    verified: false,
  },

  // --- Legal Framework -----------------------------------------------------
  {
    id: 'legal-01',
    group: 'Legal Framework',
    text:
      'The 1951 Convention Relating to the Status of Refugees is the foundational instrument of ' +
      'international refugee law. It was adopted in 1951 and entered into force in 1954.',
    source: 'Convention Relating to the Status of Refugees (1951)',
    verified: true,
  },
  {
    id: 'legal-02',
    group: 'Legal Framework',
    text:
      'The 1951 Convention as adopted was limited to events occurring before 1 January 1951. The ' +
      '1967 Protocol removed that temporal limit, making the definition universal in time.',
    source: 'Protocol Relating to the Status of Refugees (1967)',
    verified: true,
  },
  {
    id: 'legal-03',
    group: 'Legal Framework',
    text:
      'Non-refoulement — the prohibition on returning a person to a territory where their life or ' +
      'freedom would be threatened — is set out in Article 33 of the 1951 Convention. It is widely ' +
      'regarded as binding on all states as customary international law, including non-signatories.',
    source: 'Convention Relating to the Status of Refugees (1951), Article 33',
    verified: true,
  },
  {
    id: 'legal-04',
    group: 'Legal Framework',
    text:
      'The Convention definition in Article 1A(2) turns on a well-founded fear of persecution for ' +
      'reasons of race, religion, nationality, membership of a particular social group, or ' +
      'political opinion. Those five grounds are exhaustive — which is exactly why climate and ' +
      'disaster displacement do not fit inside it.',
    source: 'Convention Relating to the Status of Refugees (1951), Article 1A(2)',
    verified: true,
  },
  {
    id: 'legal-05',
    group: 'Legal Framework',
    text:
      'The Global Compact on Refugees was affirmed by the UN General Assembly in 2018. It is ' +
      'explicitly non-binding, which is the central complaint host states make about it.',
    source: 'UN General Assembly resolution 73/151 (2018)',
    verified: true,
  },

  // --- Climate & Displacement ---------------------------------------------
  {
    id: 'climate-01',
    group: 'Climate & Displacement',
    text:
      'There is no "climate refugee" status in international law. A person displaced by drought, ' +
      'flooding or sea-level rise falls outside the 1951 Convention definition unless they also ' +
      'meet one of the five persecution grounds.',
    source: 'Convention Relating to the Status of Refugees (1951), Article 1A(2)',
    verified: true,
  },
  {
    id: 'climate-02',
    group: 'Climate & Displacement',
    text:
      'PLACEHOLDER FIGURE — weather-related hazards displace tens of millions of people internally ' +
      'each year, and in most years account for the large majority of new internal displacements.',
    source: 'CHECK: IDMC Global Report on Internal Displacement',
    verified: false,
  },
  {
    id: 'climate-03',
    group: 'Climate & Displacement',
    text:
      'PLACEHOLDER — the UN Human Rights Committee has found that returning a person to a country ' +
      'where climate impacts pose a real risk to life could engage non-refoulement obligations. ' +
      'Confirm the case name and the exact scope of the finding before citing it; this one gets ' +
      'overstated constantly in committee.',
    source: 'CHECK: UN Human Rights Committee jurisprudence (Teitiota v. New Zealand, 2020)',
    verified: false,
  },

  // --- Funding & Burden-Sharing -------------------------------------------
  {
    id: 'funding-01',
    group: 'Funding & Burden-Sharing',
    text:
      'PLACEHOLDER FIGURE — UNHCR appeals are routinely funded at well under two thirds of ' +
      'requirements, and the shortfall has widened in recent years.',
    source: 'CHECK: UNHCR Global Appeal / funding update for the current year',
    verified: false,
  },
  {
    id: 'funding-02',
    group: 'Funding & Burden-Sharing',
    text:
      'PLACEHOLDER FIGURE — a small number of donor states provide the large majority of UNHCR ' +
      'voluntary contributions, which is the concentration risk host countries point to when they ' +
      'argue pledging is unreliable.',
    source: 'CHECK: UNHCR donor contributions table for the current year',
    verified: false,
  },
  {
    id: 'funding-03',
    group: 'Funding & Burden-Sharing',
    text:
      'PLACEHOLDER FIGURE — resettlement places made available worldwide each year amount to a ' +
      'low single-digit percentage of the people UNHCR assesses as being in need of resettlement.',
    source: 'CHECK: UNHCR Projected Global Resettlement Needs, current edition',
    verified: false,
  },

  // --- Canada's Record -----------------------------------------------------
  {
    id: 'canada-01',
    group: "Canada's Record",
    text: 'Canada is a party to both the 1951 Convention and the 1967 Protocol.',
    source: 'UN Treaty Collection, status of ratifications',
    verified: true,
  },
  {
    id: 'canada-02',
    group: "Canada's Record",
    text:
      'PLACEHOLDER — Canada operates a private sponsorship model in which community groups take on ' +
      'financial and settlement responsibility for named refugees alongside the government stream. ' +
      'It is genuinely distinctive and is your strongest single talking point; get the current ' +
      'programme names and intake numbers right before you lead with it.',
    source: 'CHECK: IRCC resettlement programme figures, current year',
    verified: false,
  },
  {
    id: 'canada-03',
    group: "Canada's Record",
    text:
      'PLACEHOLDER FIGURE — Canada has in several recent years ranked among the highest countries ' +
      'for refugees resettled in absolute terms. Verify the year and the ranking; this is the ' +
      'claim most likely to be challenged directly on the floor.',
    source: 'CHECK: UNHCR resettlement data, specify the year',
    verified: false,
  },
  {
    id: 'canada-04',
    group: "Canada's Record",
    text:
      'PLACEHOLDER — the Safe Third Country Agreement with the United States constrains asylum ' +
      'claims at the land border and is the most likely line of attack on Canada in this ' +
      'committee. Know the criticism before someone makes it at you.',
    source: 'CHECK: Canada–US Safe Third Country Agreement, current terms and litigation history',
    verified: false,
  },
];

export default facts;
