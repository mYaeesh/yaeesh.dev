// blocs.js
// Canada — Strengthening the Protection of Refugees and Displaced Civilians Through International Cooperation
// ASMUN, Monday 10 August 2026
//
// Roster (16 countries, confirmed no unaligned/other blocs):
//   Host Countries: Türkiye, Jordan, Pakistan, Colombia
//   Western Nations: USA, Germany, UK, France
//   Sovereignty States: China, Russia, Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, Oman
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/blocs.js.
// The `id` values are the join key js/sections/questions.js groups questions by —
// change one here and change it in data/questions.js too.

export const blocs = [
  {
    id: "host-countries",
    name: "Host Countries",
    members: ["Türkiye", "Jordan", "Pakistan", "Colombia"],
    canadaRole: "flip target",
    summary:
      "The bloc actually carrying the weight of the crisis: all four members host large refugee or displaced populations directly, and all four are chronically frustrated that international 'burden-sharing' rhetoric has not translated into proportional financing. They are not natural allies of the West, but they are not aligned with Sovereignty States on principle either — their alignment is transactional, built around whoever offers real resources with the fewest strings attached.",
    breakdown: {
      whatTheyWant: [
        "Predictable, scaled international financing tied to actual hosting numbers, not to donor political cycles or one-off pledging conferences.",
        "Faster processing and expansion of legal pathways out of their territory (resettlement, sponsorship, labour mobility) so hosting isn't purely a one-way, indefinite obligation.",
        "Recognition — rhetorical and financial — that they, not distant wealthy states, are absorbing the actual human and infrastructural cost of displacement.",
        "Flexibility to manage returns and domestic politics (labour market pressure, security concerns) without being lectured by Western Nations that host a fraction of the population."
      ],
      faultLines: [
        "Türkiye: hosts one of the largest refugee populations in the world and increasingly frames this in sovereignty/security terms (border management, resettlement-of-Syrians-as-domestic-political-issue) rather than pure humanitarian terms — closer in tone to the Sovereignty bloc than Jordan or Colombia on messaging, even though its material position is Host Country.",
        "Pakistan: currently engaged in large-scale, controversial deportations of Afghan refugees — this puts Pakistan at real risk of attack from Western Nations on non-refoulement grounds, and makes Pakistan defensive rather than a confident coalition leader within its own bloc.",
        "Jordan: smaller, more aid-dependent, and historically the most vocal about underfunded response plans (Syrian refugee response funding gaps have been a recurring Jordanian talking point for a decade) — the bloc member most likely to publicly welcome a funding mechanism rather than posture against it.",
        "Colombia: hosts a huge Venezuelan displaced population but frames its response domestically as 'integration' rather than classic refugee camp hosting, and has more diplomatic room to align with Western Nations on democratic/rights language than Türkiye or Pakistan do — Colombia is the bloc's most persuadable member on a rights-inclusive funding mechanism."
      ]
    },
    whoTheyAttack:
      "Western Nations, on the gap between resettlement rhetoric and resettlement numbers (Canada's own PSR cut is exhibit A); occasionally each other, when burden-sharing arguments imply one host country's suffering outweighs another's for funding-priority purposes.",
    canadaStrategyMapping:
      "This is Canada's flip target. The GDP-scaled automatic funding mechanism is built to answer their core, legitimate complaint — that funding is currently discretionary and unpredictable — with something that isn't dependent on any single country's electoral cycle or PSR target. The argument's weakest point: it's still a Canadian/Western-designed instrument, funded and administered by the same donor countries Host States already distrust, and it requires Host Countries to trust that 'automatic' actually means automatic rather than automatic-until-a-recession. Colombia and Jordan are the likeliest early movers; Pakistan and Türkiye will want to see the mechanism's governance structure before committing rhetorical capital to it."
  },
  {
    id: "western-nations",
    name: "Western Nations",
    members: ["USA", "Germany", "UK", "France"],
    canadaRole: "hold",
    summary:
      "Canada's natural coalition on paper — shared treaty commitments, shared donor-state framing, shared vocabulary about rules-based order and resettlement leadership. But the bloc is not a monolith: each member has a different domestic politics problem that pulls its floor position away from Canada's in a different direction, and Canada needs to actively manage those divergences rather than assume alignment.",
    breakdown: {
      whatTheyWant: [
        "A resolution that affirms existing frameworks (1951 Convention, GCR, GCM) without creating new binding obligations that expose them to fresh domestic political liability.",
        "Credit for existing funding and resettlement contributions, without deep scrutiny of recent cuts or backlogs (every Western state on this roster has one).",
        "A forum that keeps the focus on host-country capacity building and financing mechanisms rather than on the root-cause conflicts and interventions some of them are implicated in.",
        "To avoid being the bloc singled out for hypocrisy — safety in numbers on messaging."
      ],
      faultLines: [
        "USA: politically the most volatile of the four — refugee admissions ceilings and resettlement posture can swing sharply with administration changes, meaning US positions in committee may be more restrictionist in tone than Canada wants its 'hold' bloc anchor to be. Diverges from Canada by being less willing to embrace new multilateral financing mechanisms that imply ongoing obligation.",
        "Germany: the bloc's strongest resettlement and funding record in recent years, but domestically under real political pressure over migration generally, which can make German delegates cautious about a resolution that reads as expanding intake commitments — Germany may push for a text heavier on 'host country capacity' and lighter on 'resettlement pathway expansion' than Canada would prefer, since that's the less politically costly frame at home.",
        "UK: closest natural ally on burden-sharing language (Commonwealth ties to several Host and Sovereignty bloc members), but has its own well-publicized small-boats/asylum-backlog political fights, which Host Countries or Sovereignty States can weaponize the same way they'd weaponize Canada's PSR cut — the UK is a liability multiplier, not just an ally, if the conversation turns to 'name your own numbers.'",
        "France: most exposed of the four on the intervention-blame front given its historical and ongoing role in Francophone Africa and the Sahel — France may actively want Canada to lead on deflection rather than engage, since France cannot credibly deflect intervention-blame the way Canada (a genuine middle power with no comparable colonial security footprint in the relevant regions) can."
      ]
    },
    whoTheyAttack:
      "Sovereignty States, on human rights and transparency grounds; sometimes Host Countries indirectly, when pushing 'root causes' or governance-conditionality language that Host States read as paternalistic.",
    canadaStrategyMapping:
      "Canada holds this bloc by not asking it to do anything domestically costly — the GDP-scaled mechanism is framed as new multilateral plumbing, not a resettlement-numbers commitment, which keeps the US and UK comfortable. Where Canada should expect friction: Germany may want less resettlement-pathway language than Canada's own EMPP/complementary-pathways framing implies, and France will want Canada out in front on any intervention-blame exchange with Russia or China. The bloc holds as long as Canada doesn't ask any single member to name a number they're not ready to defend."
  },
  {
    id: "sovereignty-states",
    name: "Sovereignty States",
    members: ["China", "Russia", "Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman"],
    canadaRole: "deflect",
    summary:
      "United by a shared skepticism of Western-led humanitarian frameworks as vehicles for interference in domestic and regional affairs, but this bloc spans a huge range of actual material interest — from Russia and China, who are frequently named as root causes of displacement crises themselves, to the Gulf states, who are major humanitarian financiers with almost no interest in refereeing intervention-blame fights. Treating this bloc as monolithic is the single biggest analytical error Canada could make.",
    breakdown: {
      whatTheyWant: [
        "Sovereignty and non-interference language protected in any resolution text — no conditionality tied to domestic governance, no naming of specific conflicts in ways that assign blame.",
        "Recognition of their own contributions (Gulf humanitarian financing in particular is real and substantial) without being folded into a Western-designed accountability framework.",
        "For China and Russia specifically: to redirect committee attention toward the argument that Western military interventions (Iraq, Libya, Syria-adjacent, Afghanistan) are the actual root cause of the largest modern displacement crises, and that a resolution focused on financing mechanisms without addressing 'root causes' is treating a symptom while the West avoids responsibility for the disease.",
        "For the Gulf states specifically: continued space to fund humanitarian response bilaterally and through Islamic financial institutions (IsDB, etc.) rather than being channeled exclusively through UNHCR/Western-administered mechanisms."
      ],
      faultLines: [
        "China: focuses attack on Western intervention history and on human mobility/migration governance sovereignty broadly; has comparatively little direct refugee-hosting exposure itself, which makes its position more purely rhetorical/strategic than material.",
        "Russia: most aggressive and least conciliatory bloc member, particularly given its own role in generating displacement (Syria intervention, Ukraine); likely to push intervention-blame hardest and to resist any language that could be read as precedent for humanitarian-intervention justification elsewhere.",
        "Saudi Arabia: significant financial capacity and increasing interest in international standing/soft power (Vision 2030-adjacent diplomacy), less ideologically committed to the China/Russia intervention-blame framing — moveable toward a financing-mechanism conversation if it doesn't come with human-rights conditionality attached.",
        "UAE: the bloc's most pragmatic, investment-and-soft-power-oriented member; has hosted major international humanitarian and climate convenings and has real interest in being seen as a constructive, modern financing partner rather than a sovereignty hardliner — a plausible partial-mover on GDP-scaled or blended financing mechanisms.",
        "Qatar: active humanitarian diplomacy track record (mediation roles, conference hosting); like the UAE, more interested in soft-power positioning than in rigid non-interference doctrine — another partial-mover.",
        "Kuwait and Bahrain: smaller, more conservative Gulf voices that generally follow Saudi-aligned positioning rather than setting independent policy in this space — treat as bloc followers rather than independent actors.",
        "Oman: traditionally the Gulf's most neutral, mediation-oriented foreign policy — plausibly the single most persuadable Sovereignty State on procedural or financing questions, since it has less invested in the intervention-blame framing than China, Russia, or even Saudi Arabia."
      ]
    },
    whoTheyAttack:
      "Western Nations, on the intervention-blame argument (steelmanned: Western-led or Western-armed military interventions in Iraq, Libya, and Syria's periphery, plus decades of arms sales into conflicts that produced displacement, are a materially larger driver of the current 41.6 million refugee figure than anything Host Countries or Sovereignty States have done — a resolution silent on this while asking Host Countries to simply 'manage capacity better' is, on this reading, asking the countries least responsible to do the most adjusting).",
    canadaStrategyMapping:
      "Canada deflects rather than engages on intervention-blame — not because the argument is baseless (it isn't; it's a real and defensible position with real evidence behind it), but because Canada has genuinely limited exposure on this specific charge compared to the US, UK, and France, and litigating historical blame will not produce a resolution by the deadline. Canada's move: acknowledge the argument has merit in the abstract ('the causes of displacement are contested and this committee is not going to resolve them today'), then pivot immediately to the financing mechanism as the actionable item regardless of how the causation debate shakes out. Split the bloc by engaging UAE, Qatar, and Oman on the mechanism's technical merits while explicitly not taking the bait from China or Russia on causation — arguing with Russia about root causes is a trap that burns committee time Canada needs for coalition-building elsewhere."
  }
];

export default blocs;
