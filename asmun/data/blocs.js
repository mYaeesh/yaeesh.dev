// blocs.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN, Monday 10 August 2026
//
// ⚠️ THIS IS A PERSONAL STRATEGIC READ. IT IS NOT AN OFFICIAL OR PREDICTED STRUCTURE.
// This committee has NO pre-assigned blocs or alliances. Working groups form organically during
// the unmoderated caucus, and draft resolutions are numbered 1.1, 1.2… as submitted. Treat every
// grouping below as a prior to revise in the room, not a map of what will happen.
//
// Membership corrected against the real 48-country roster. Countries that were in this file but
// are NOT in the committee have been REMOVED. Their analysis is orphaned — see ORPHANED notes.
//
// The `id` values are the join key js/sections/questions.js groups questions by —
// change one here and change it in data/questions.js too.

export const blocsDisclaimer =
  'Personal strategic read — not an official or confirmed alliance structure. This committee has ' +
  'no pre-assigned blocs; working groups form live during the unmoderated caucus.';

export const blocs = [
  {
    id: 'host-countries',
    name: 'Host Countries',
    members: ['Jordan', 'Pakistan'],
    canadaRole: 'flip target',
    summary:
      '[PERSONAL READ — not a confirmed bloc.] The delegations actually carrying the weight of the ' +
      'crisis: both host large refugee or displaced populations directly, and both are chronically ' +
      "frustrated that international 'burden-sharing' rhetoric has not translated into proportional " +
      'financing. They are not natural allies of the West, but they are not aligned with sovereignty-' +
      'protective states on principle either — their alignment is transactional, built around whoever ' +
      'offers real resources with the fewest strings attached.',
    breakdown: {
      whatTheyWant: [
        'Predictable, scaled international financing tied to actual hosting numbers, not to donor political cycles or one-off pledging conferences.',
        "Faster processing and expansion of legal pathways out of their territory (resettlement, sponsorship, labour mobility) so hosting isn't purely a one-way, indefinite obligation.",
        'Recognition — rhetorical and financial — that they, not distant wealthy states, are absorbing the actual human and infrastructural cost of displacement.',
        'Flexibility to manage returns and domestic politics (labour market pressure, security concerns) without being lectured by Western states that host a fraction of the population.',
      ],
      faultLines: [
        'Pakistan: currently engaged in large-scale, controversial deportations of Afghan refugees — this puts Pakistan at real risk of attack on non-refoulement grounds, and makes Pakistan defensive rather than a confident coalition leader. ⚠ NOTE: Afghanistan IS seated in this committee. That attack line is no longer abstract — the delegate it concerns is in the room.',
        'Jordan: smaller, more aid-dependent, and historically the most vocal about underfunded response plans (Syrian refugee response funding gaps have been a recurring Jordanian talking point for a decade) — the likeliest to publicly welcome a funding mechanism rather than posture against it. ⚠ NOTE: Syria is also seated in this committee.',
        '⚠ ORPHANED — the original Türkiye and Colombia fault-line analysis has been DELETED. Neither is in this committee. Roughly half this grouping’s original strategic content went with them.',
      ],
    },
    whoTheyAttack:
      "Western delegations, on the gap between resettlement rhetoric and resettlement numbers (Canada's own PSR cut is exhibit A); occasionally each other, when burden-sharing arguments imply one host country's suffering outweighs another's for funding-priority purposes.",
    canadaStrategyMapping:
      'This is Canada’s flip target. The GDP-scaled automatic funding mechanism is built to answer ' +
      'their core, legitimate complaint — that funding is currently discretionary and unpredictable — ' +
      "with something that isn't dependent on any single country's electoral cycle or PSR target. The " +
      "argument's weakest point: it's still a Canadian/Western-designed instrument, funded and " +
      'administered by the same donor countries host states already distrust, and it requires them to ' +
      "trust that 'automatic' actually means automatic rather than automatic-until-a-recession. " +
      '⚠ WEAKENED: Jordan is the likelier early mover; Pakistan will want to see the mechanism’s ' +
      'governance structure first. The original early-mover analysis leaned on Colombia and Türkiye, ' +
      'neither of which is in this committee. This recommendation needs rethinking, and the wider ' +
      'host-country coalition should probably be rebuilt from delegations currently in the ' +
      'unassessed group below (Ethiopia, Kenya, Uganda, DR Congo, Iran and Bangladesh-equivalents all ' +
      'host at scale).',
  },
  {
    id: 'western-nations',
    name: 'Western Nations',
    members: ['US', 'Germany', 'UK', 'France'],
    canadaRole: 'hold',
    summary:
      "[PERSONAL READ — not a confirmed bloc.] Canada's natural coalition on paper — shared treaty " +
      'commitments, shared donor-state framing, shared vocabulary about rules-based order and ' +
      'resettlement leadership. But this is not a monolith: each member has a different domestic ' +
      "politics problem that pulls its floor position away from Canada's in a different direction, " +
      'and Canada needs to actively manage those divergences rather than assume alignment.',
    breakdown: {
      whatTheyWant: [
        'A resolution that affirms existing frameworks (1951 Convention, GCR, GCM) without creating new binding obligations that expose them to fresh domestic political liability.',
        'Credit for existing funding and resettlement contributions, without deep scrutiny of recent cuts or backlogs (every Western state on this roster has one).',
        'A forum that keeps the focus on host-country capacity building and financing mechanisms rather than on the root-cause conflicts and interventions some of them are implicated in.',
        'To avoid being the group singled out for hypocrisy — safety in numbers on messaging.',
      ],
      faultLines: [
        'US: politically the most volatile of the four — refugee admissions ceilings and resettlement posture can swing sharply with administration changes, meaning US positions may be more restrictionist in tone than Canada wants its anchor to be. Diverges from Canada by being less willing to embrace new multilateral financing mechanisms that imply ongoing obligation.',
        "Germany: the strongest resettlement and funding record in recent years, but domestically under real political pressure over migration generally, which can make German delegates cautious about a resolution that reads as expanding intake commitments — Germany may push for a text heavier on 'host country capacity' and lighter on 'resettlement pathway expansion' than Canada would prefer, since that's the less politically costly frame at home.",
        "UK: closest natural ally on burden-sharing language (Commonwealth ties to several other delegations here), but has its own well-publicised small-boats/asylum-backlog political fights, which others can weaponise the same way they'd weaponise Canada's PSR cut — the UK is a liability multiplier, not just an ally, if the conversation turns to 'name your own numbers.'",
        'France: most exposed of the four on the intervention-blame front given its historical and ongoing role in Francophone Africa and the Sahel — France may actively want Canada to lead on deflection rather than engage, since France cannot credibly deflect intervention-blame the way Canada (a genuine middle power with no comparable colonial security footprint in the relevant regions) can. ⚠ NOTE: DR Congo, Rwanda, Morocco, Chile and several other Francophone-adjacent delegations are seated here and currently unassessed.',
      ],
    },
    whoTheyAttack:
      "Sovereignty-protective states, on human rights and transparency grounds; sometimes host countries indirectly, when pushing 'root causes' or governance-conditionality language that host states read as paternalistic.",
    canadaStrategyMapping:
      'Canada holds this grouping by not asking it to do anything domestically costly — the GDP-scaled ' +
      'mechanism is framed as new multilateral plumbing, not a resettlement-numbers commitment, which ' +
      'keeps the US and UK comfortable. Expect friction: Germany may want less resettlement-pathway ' +
      'language than Canada’s own EMPP/complementary-pathways framing implies, and France will want ' +
      'Canada out in front on any intervention-blame exchange. It holds as long as Canada doesn’t ask ' +
      'any single member to name a number they’re not ready to defend. All four members are real and ' +
      'this analysis survives the roster correction intact.',
  },
  {
    id: 'sovereignty-states',
    name: 'Sovereignty States',
    members: ['China', 'Russia', 'Saudi Arabia'],
    canadaRole: 'deflect',
    summary:
      '[PERSONAL READ — not a confirmed bloc.] United by a shared scepticism of Western-led ' +
      'humanitarian frameworks as vehicles for interference in domestic and regional affairs, but ' +
      'spanning a wide range of actual material interest — from Russia and China, frequently named as ' +
      'root causes of displacement crises themselves, to Saudi Arabia, a major humanitarian financier ' +
      'with little interest in refereeing intervention-blame fights. Treating this as monolithic is ' +
      'the single biggest analytical error Canada could make.',
    breakdown: {
      whatTheyWant: [
        'Sovereignty and non-interference language protected in any resolution text — no conditionality tied to domestic governance, no naming of specific conflicts in ways that assign blame.',
        'Recognition of their own contributions without being folded into a Western-designed accountability framework.',
        "For China and Russia specifically: to redirect committee attention toward the argument that Western military interventions (Iraq, Libya, Syria-adjacent, Afghanistan) are the actual root cause of the largest modern displacement crises, and that a resolution focused on financing mechanisms without addressing 'root causes' is treating a symptom while the West avoids responsibility for the disease.",
        '⚠ ORPHANED — the Gulf-financing bullet (bilateral giving via IsDB and Islamic financial institutions rather than UNHCR/Western-administered channels) has been DELETED. It described the UAE, Qatar, Kuwait, Bahrain and Oman, none of which are in this committee.',
      ],
      faultLines: [
        'China: focuses attack on Western intervention history and on human mobility/migration governance sovereignty broadly; has comparatively little direct refugee-hosting exposure itself, which makes its position more purely rhetorical/strategic than material.',
        'Russia: most aggressive and least conciliatory — particularly given its own role in generating displacement (Syria, Ukraine); likely to push intervention-blame hardest and to resist any language that could be read as precedent for humanitarian-intervention justification elsewhere. ⚠ CRITICAL: UKRAINE AND SYRIA ARE BOTH SEATED IN THIS COMMITTEE. Russia is arguing across the table from two delegations representing populations it displaced. This is the single biggest floor dynamic the pre-correction file missed.',
        'Saudi Arabia: significant financial capacity and increasing interest in international standing/soft power, less ideologically committed to the China/Russia intervention-blame framing — moveable toward a financing-mechanism conversation if it doesn’t come with human-rights conditionality attached. It is now the ONLY available wedge in this grouping.',
        '⚠ ORPHANED — UAE, Qatar, Kuwait, Bahrain and Oman fault-line analysis has been DELETED. None are in this committee.',
      ],
    },
    whoTheyAttack:
      'Western delegations, on the intervention-blame argument (steelmanned: Western-led or Western-armed military interventions in Iraq, Libya, and Syria’s periphery, plus decades of arms sales into conflicts that produced displacement, are a materially larger driver of the current global refugee figure than anything host countries have done — a resolution silent on this while asking host countries to simply ‘manage capacity better’ is, on this reading, asking the countries least responsible to do the most adjusting).',
    canadaStrategyMapping:
      'Canada deflects rather than engages on intervention-blame — not because the argument is baseless ' +
      "(it isn't; it's a real and defensible position with real evidence behind it), but because Canada " +
      'has genuinely limited exposure on this specific charge compared to the US, UK and France, and ' +
      'litigating historical blame will not produce a resolution by the end of the session. Canada’s ' +
      "move: acknowledge the argument has merit in the abstract ('the causes of displacement are " +
      "contested and this committee is not going to resolve them today'), then pivot immediately to the " +
      'financing mechanism as the actionable item. ' +
      '⚠ THE SPLIT-THE-BLOC PLAY IS GONE. It depended on engaging UAE, Qatar and Oman on technical ' +
      'merits; none of the three is in this committee. Saudi Arabia is the only remaining wedge, and a ' +
      'one-country wedge is not a bloc split. THIS STRATEGY NEEDS REWRITING FROM SCRATCH.',
  },
  {
    id: 'unassessed',
    name: '⚠ PLACEHOLDER — Not yet assessed (39 delegations)',
    isPlaceholder: true,
    members: [
      'Afghanistan', 'Belarus', 'Belgium', 'Brazil', 'Chile', 'DR Congo', 'Egypt', 'Eritrea',
      'Ethiopia', 'Finland', 'Ghana', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Italy',
      'Kenya', 'Libya', 'Mexico', 'Morocco', 'Myanmar', 'New Zealand', 'North Korea', 'Norway',
      'Palestine', 'Poland', 'Rwanda', 'Somalia', 'South Africa', 'South Korea', 'Sudan',
      'Switzerland', 'Syria', 'Uganda', 'Ukraine', 'Uruguay', 'Yemen', 'Thailand (UNCONFIRMED)',
    ],
    canadaRole: '⚠ PLACEHOLDER — not yet decided',
    summary:
      '⚠ PLACEHOLDER — NO ANALYSIS WRITTEN. These 39 delegations are in the real committee and have no ' +
      'strategic read at all. That is 39 of 51 — the clear majority of the room. Nothing here is ' +
      'inferred or guessed. PRIORITY ORDER: (1) Uganda — motions the unmoderated caucus. (2) Finland — ' +
      'moves to adjourn, needs two-thirds. (3) Ukraine and Syria — both displaced by a delegation ' +
      'seated opposite them. (4) Afghanistan — directly affected by the Pakistan deportation line. ' +
      '(5) Ethiopia, Kenya, DR Congo, Iran, Uganda, Sudan — the actual major hosting states in this ' +
      'room, and the natural replacement for the collapsed Host Countries grouping.',
    breakdown: {
      whatTheyWant: ['⚠ PLACEHOLDER — not written.'],
      faultLines: ['⚠ PLACEHOLDER — not written.'],
    },
    whoTheyAttack: '⚠ PLACEHOLDER — not written.',
    canadaStrategyMapping: '⚠ PLACEHOLDER — not written.',
  },
];

export default blocs;
