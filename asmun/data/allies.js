// ASMUN — data/allies.js
//
// ⚠️  PLACEHOLDER CONTENT. Every score and rationale below is an educated guess
//     written to give the ally-score chart realistic data to lay out. None of it
//     is researched. Re-score the whole file yourself — the numbers are the point
//     of this section, and wrong numbers are worse than no numbers.
//
// Alignment of each delegation with CANADA, the home delegation.
// Canada itself is deliberately absent: you cannot be your own ally. That is why
// this file has 59 entries and data/roster.js has 60.
//
// score     1-10, where 10 is the closest possible ally and 1 is outright opposition.
// category  'ally' | 'neutral' | 'rival'. The chart colours and groups by this, and
//           the chips filter on it. Keep it roughly consistent with the score
//           (ally ≈ 7-10, neutral ≈ 4-6, rival ≈ 1-3) — nothing enforces that, but
//           a brass bar labelled RIVAL will just confuse you at 2am.
//
// Sorted by score descending at render time, so add entries in any order.
// Pure data — no imports, no DOM. Rendering lives in js/sections/allies.js.

/**
 * @typedef {Object} Ally
 * @property {string} country   - as spoken in committee; matches roster.js
 * @property {string} flag      - emoji, purely decorative (aria-hidden when rendered)
 * @property {number} score     - 1-10 integer
 * @property {'ally'|'neutral'|'rival'} category
 * @property {string} rationale - ONE line on why. Written to be read under pressure.
 * @property {boolean} placeholder
 */

/** @type {Ally[]} */
export const allies = [
  // --- Core partners -------------------------------------------------------
  {
    country: 'United Kingdom',
    flag: '🇬🇧',
    score: 9,
    category: 'ally',
    rationale:
      'Reliable co-sponsor on protection language and shares the Convention-defence framing; will ' +
      'follow Canada on non-refoulement wording but breaks away on anything touching irregular ' +
      'arrivals or offshore processing, so keep those clauses in a separate paragraph.',
    placeholder: true,
  },
  {
    country: 'Australia',
    flag: '🇦🇺',
    score: 9,
    category: 'ally',
    rationale:
      'Close on resettlement architecture and durable solutions; brittle on maritime interception.',
    placeholder: true,
  },
  {
    country: 'New Zealand',
    flag: '🇳🇿',
    score: 9,
    category: 'ally',
    rationale:
      'Consistent protection voice, strong on climate displacement — a natural early co-sponsor.',
    placeholder: true,
  },
  {
    country: 'Sweden',
    flag: '🇸🇪',
    score: 9,
    category: 'ally',
    rationale:
      'High per-capita intake and firm on rights language; will push text further than Canada wants.',
    placeholder: true,
  },
  {
    country: 'Norway',
    flag: '🇳🇴',
    score: 9,
    category: 'ally',
    rationale:
      'Major flexible donor with real convening power in the room; low-cost, high-value ally.',
    placeholder: true,
  },
  {
    country: 'Netherlands',
    flag: '🇳🇱',
    score: 8,
    category: 'ally',
    rationale:
      'Technically strong drafters; useful for turning your intent into clauses that survive review.',
    placeholder: true,
  },
  {
    country: 'Denmark',
    flag: '🇩🇰',
    score: 8,
    category: 'ally',
    rationale:
      'Generous donor but hard-edged on domestic asylum; align on funding, not on admissions.',
    placeholder: true,
  },
  {
    country: 'Ireland',
    flag: '🇮🇪',
    score: 8,
    category: 'ally',
    rationale:
      'Small but principled protection voice; will back rights language others find too strong.',
    placeholder: true,
  },
  {
    country: 'Germany',
    flag: '🇩🇪',
    score: 8,
    category: 'ally',
    rationale:
      'The one Western state with an admissions record it can defend out loud, which makes it the ' +
      'most useful partner when host countries accuse the bloc of paying instead of hosting.',
    placeholder: true,
  },

  // --- Reliable but conditional -------------------------------------------
  {
    country: 'France',
    flag: '🇫🇷',
    score: 7,
    category: 'ally',
    rationale:
      'Aligned on the legal framework, more sovereigntist on implementation than it sounds.',
    placeholder: true,
  },
  {
    country: 'Belgium',
    flag: '🇧🇪',
    score: 7,
    category: 'ally',
    rationale: 'Follows the EU consensus; secure it by winning Germany and the Netherlands first.',
    placeholder: true,
  },
  {
    country: 'Switzerland',
    flag: '🇨🇭',
    score: 7,
    category: 'ally',
    rationale:
      'Neutral posture but deep humanitarian credibility; valuable as a bridge to sceptical states.',
    placeholder: true,
  },
  {
    country: 'Japan',
    flag: '🇯🇵',
    score: 7,
    category: 'ally',
    rationale:
      'Large donor with a very small intake; will fund almost anything that avoids admissions targets.',
    placeholder: true,
  },
  {
    country: 'Republic of Korea',
    flag: '🇰🇷',
    score: 7,
    category: 'ally',
    rationale: 'Similar profile to Japan; supportive on process, cautious on binding commitments.',
    placeholder: true,
  },
  {
    country: 'Portugal',
    flag: '🇵🇹',
    score: 7,
    category: 'ally',
    rationale: 'Consistently constructive and rarely a blocker; easy signature to collect early.',
    placeholder: true,
  },
  {
    country: 'United States',
    flag: '🇺🇸',
    score: 7,
    category: 'ally',
    rationale:
      'Largest single donor and normally aligned, but the Safe Third Country Agreement makes it ' +
      'the delegation whose criticism of Canada would land hardest — do not build your position ' +
      'on standing next to it.',
    placeholder: true,
  },
  {
    country: 'Austria',
    flag: '🇦🇹',
    score: 6,
    category: 'neutral',
    rationale:
      'Restrictive domestically, cooperative on funding — expect support on money, not on quotas.',
    placeholder: true,
  },
  {
    country: 'Spain',
    flag: '🇪🇸',
    score: 6,
    category: 'neutral',
    rationale: 'Frontline pressures pull it toward externalisation despite supportive rhetoric.',
    placeholder: true,
  },

  // --- Genuinely undecided -------------------------------------------------
  {
    country: 'Mexico',
    flag: '🇲🇽',
    score: 6,
    category: 'neutral',
    rationale:
      'Both transit and destination; strong on regional cooperation, wary of northern conditionality.',
    placeholder: true,
  },
  {
    country: 'Brazil',
    flag: '🇧🇷',
    score: 6,
    category: 'neutral',
    rationale:
      'Good regional protection record; will lead Latin America if courted early rather than late.',
    placeholder: true,
  },
  {
    country: 'Colombia',
    flag: '🇨🇴',
    score: 6,
    category: 'neutral',
    rationale:
      'Host-bloc member but its regularisation record is genuinely strong, so praising it publicly ' +
      'is the cheapest available way to split the host bloc without attacking anyone.',
    placeholder: true,
  },
  {
    country: 'Uganda',
    flag: '🇺🇬',
    score: 6,
    category: 'neutral',
    rationale:
      'Its settlement and right-to-work model is the one host-country policy Canada can praise ' +
      'without qualification — lead with it when you need host-bloc goodwill cheaply.',
    placeholder: true,
  },
  {
    country: 'Italy',
    flag: '🇮🇹',
    score: 5,
    category: 'neutral',
    rationale: 'Mediterranean arrivals dominate its position; winnable on burden-sharing money alone.',
    placeholder: true,
  },
  {
    country: 'Greece',
    flag: '🇬🇷',
    score: 5,
    category: 'neutral',
    rationale:
      'Frontline state fatigue; sympathetic to host-country arguments despite being in the EU bloc.',
    placeholder: true,
  },
  {
    country: 'Ecuador',
    flag: '🇪🇨',
    score: 5,
    category: 'neutral',
    rationale: 'Major regional host under strain; votes with the host bloc on money.',
    placeholder: true,
  },
  {
    country: 'Peru',
    flag: '🇵🇪',
    score: 5,
    category: 'neutral',
    rationale: 'Similar regional host profile to Ecuador; moves with the Latin American caucus.',
    placeholder: true,
  },
  {
    country: 'South Africa',
    flag: '🇿🇦',
    score: 5,
    category: 'neutral',
    rationale: 'Swing voice with continental weight; leans Global South on burden-sharing framing.',
    placeholder: true,
  },
  {
    country: 'Nepal',
    flag: '🇳🇵',
    score: 5,
    category: 'neutral',
    rationale: 'Smaller host with practical concerns; reachable on technical assistance clauses.',
    placeholder: true,
  },
  {
    country: 'Poland',
    flag: '🇵🇱',
    score: 5,
    category: 'neutral',
    rationale: 'Large recent intake gives it standing; wary of anything resembling mandatory relocation.',
    placeholder: true,
  },
  {
    country: 'Indonesia',
    flag: '🇮🇩',
    score: 4,
    category: 'neutral',
    rationale: 'Non-signatory, transit state; engages pragmatically but resists Convention framing.',
    placeholder: true,
  },
  {
    country: 'Malaysia',
    flag: '🇲🇾',
    score: 4,
    category: 'neutral',
    rationale: 'Non-signatory hosting a large refugee population with no legal status framework.',
    placeholder: true,
  },
  {
    country: 'Thailand',
    flag: '🇹🇭',
    score: 4,
    category: 'neutral',
    rationale:
      'Non-signatory, long-term encampment policy; sensitive to any language on the right to work.',
    placeholder: true,
  },
  {
    country: 'India',
    flag: '🇮🇳',
    score: 4,
    category: 'neutral',
    rationale: 'Non-signatory hosting substantial populations; strongly resists external monitoring.',
    placeholder: true,
  },
  {
    country: 'Czechia',
    flag: '🇨🇿',
    score: 4,
    category: 'neutral',
    rationale:
      'Sceptical of quota mechanisms; persuadable on funding and on regional protection capacity.',
    placeholder: true,
  },

  // --- Host bloc -----------------------------------------------------------
  {
    country: 'Jordan',
    flag: '🇯🇴',
    score: 5,
    category: 'neutral',
    rationale: 'Pragmatic and less confrontational than the rest of the bloc; a realistic bridge partner.',
    placeholder: true,
  },
  {
    country: 'Ethiopia',
    flag: '🇪🇹',
    score: 5,
    category: 'neutral',
    rationale: 'Major host with its own internal displacement; open on technical cooperation.',
    placeholder: true,
  },
  {
    country: 'Kenya',
    flag: '🇰🇪',
    score: 5,
    category: 'neutral',
    rationale: 'Long-term camps and periodic closure threats; responsive to development-linked funding.',
    placeholder: true,
  },
  {
    country: 'Chad',
    flag: '🇹🇩',
    score: 5,
    category: 'neutral',
    rationale: 'Very large caseload against a very small resource base; almost purely funding-driven.',
    placeholder: true,
  },
  {
    country: 'Türkiye',
    flag: '🇹🇷',
    score: 4,
    category: 'neutral',
    rationale:
      'Leads the host bloc and will be the loudest single voice in the room; opposed to Canada on ' +
      'binding finance but genuinely winnable on resettlement, which is the trade to look for.',
    placeholder: true,
  },
  {
    country: 'Pakistan',
    flag: '🇵🇰',
    score: 4,
    category: 'neutral',
    rationale: 'Ties climate displacement to adaptation finance; hard-line on donor obligations.',
    placeholder: true,
  },
  {
    country: 'Lebanon',
    flag: '🇱🇧',
    score: 4,
    category: 'neutral',
    rationale: 'Highest refugee share per capita and acute economic strain; return language is a red line.',
    placeholder: true,
  },
  {
    country: 'Bangladesh',
    flag: '🇧🇩',
    score: 4,
    category: 'neutral',
    rationale: 'Large protracted caseload plus climate exposure; wants burden-sharing and an exit path.',
    placeholder: true,
  },
  {
    country: 'Egypt',
    flag: '🇪🇬',
    score: 4,
    category: 'neutral',
    rationale: 'Hosts significant numbers while resisting protection oversight; sits between the blocs.',
    placeholder: true,
  },

  // --- Sovereignty bloc ----------------------------------------------------
  {
    country: 'Qatar',
    flag: '🇶🇦',
    score: 5,
    category: 'neutral',
    rationale: 'Mediation-minded and often willing to broker; the most reachable of the Gulf delegations.',
    placeholder: true,
  },
  {
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    score: 4,
    category: 'neutral',
    rationale: 'Substantial bilateral humanitarian funding but outside Convention frameworks entirely.',
    placeholder: true,
  },
  {
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    score: 4,
    category: 'neutral',
    rationale: 'Active donor, procedurally cooperative; will not accept status or monitoring language.',
    placeholder: true,
  },
  {
    country: 'Kuwait',
    flag: '🇰🇼',
    score: 4,
    category: 'neutral',
    rationale: 'Reliable donor, follows the Gulf line on sovereignty; rarely moves independently.',
    placeholder: true,
  },
  {
    country: 'Democratic Republic of the Congo',
    flag: '🇨🇩',
    score: 4,
    category: 'neutral',
    rationale: 'Vast internal displacement; engages on humanitarian access more than on legal status.',
    placeholder: true,
  },
  {
    country: 'Iraq',
    flag: '🇮🇶',
    score: 4,
    category: 'neutral',
    rationale: 'Returns and internal displacement dominate; cooperative on technical assistance.',
    placeholder: true,
  },
  {
    country: 'China',
    flag: '🇨🇳',
    score: 3,
    category: 'rival',
    rationale:
      'Will block any monitoring or compliance mechanism on non-interference grounds and is ' +
      'procedurally disciplined enough to do it late in the process; concede preambulatory ' +
      'framing early to buy abstention on the operative clauses.',
    placeholder: true,
  },
  {
    country: 'Iran',
    flag: '🇮🇷',
    score: 3,
    category: 'rival',
    rationale: 'Very large host population, but frames the whole file around sanctions and intervention.',
    placeholder: true,
  },
  {
    country: 'Hungary',
    flag: '🇭🇺',
    score: 3,
    category: 'rival',
    rationale: 'The most restrictionist EU voice; will oppose relocation and rights language directly.',
    placeholder: true,
  },
  {
    country: 'Afghanistan',
    flag: '🇦🇫',
    score: 3,
    category: 'rival',
    rationale: 'Origin state with contested representation; expect procedural challenges around it.',
    placeholder: true,
  },
  {
    country: 'South Sudan',
    flag: '🇸🇸',
    score: 3,
    category: 'rival',
    rationale: 'Origin and host simultaneously; dependent on aid, defensive about internal conditions.',
    placeholder: true,
  },

  // --- Origin and conflict-affected states ---------------------------------
  {
    country: 'Russian Federation',
    flag: '🇷🇺',
    score: 2,
    category: 'rival',
    rationale: 'Opposes protection oversight outright and will use procedure to slow the committee.',
    placeholder: true,
  },
  {
    country: 'Syria',
    flag: '🇸🇾',
    score: 2,
    category: 'rival',
    rationale: 'Origin state; will press for return and reconstruction language on its own terms.',
    placeholder: true,
  },
  {
    country: 'Venezuela',
    flag: '🇻🇪',
    score: 2,
    category: 'rival',
    rationale: 'Origin state; disputes the framing of regional outflows and blames external pressure.',
    placeholder: true,
  },
  {
    country: 'Sudan',
    flag: '🇸🇩',
    score: 2,
    category: 'rival',
    rationale: 'Both origin and host amid active conflict; resists access and monitoring provisions.',
    placeholder: true,
  },
  {
    country: 'Myanmar',
    flag: '🇲🇲',
    score: 1,
    category: 'rival',
    rationale: 'Origin state; rejects any characterisation of the displacement it caused.',
    placeholder: true,
  },
];

export default allies;
