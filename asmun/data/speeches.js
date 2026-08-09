// speeches.js
// Canada — ASMUN, Monday 10 August 2026
//
// Source: knowledge/07-speech-and-phrase-bank.md, PART 1. Copied verbatim — no speech here was
// written for this file. That source file explicitly asks to be the single origin for this data
// ("if you later build speeches.js … seed them from this file so the site and the Project cannot
// drift apart"), so edit the markdown first and re-sync, never the other way round.
//
// Word counts are the ones stated in the source headings and were verified there programmatically,
// not estimated. Do not lengthen a speech; if you add a sentence, cut one.

/** The rule every speech below is timed against. Shown as the section blurb. */
export const timingRule =
  'Confirmed speaking time is 90 seconds. At a controlled diplomatic pace of roughly 140–150 ' +
  'words per minute, that is 210–230 words. Practise out loud with a timer at least twice — ' +
  'silent reading runs about 30% faster than delivery.';

export const speeches = [
  {
    id: 'opening',
    title: 'Opening speech — moderated caucus',
    timing: '211 words · ~87 sec',
    use:
      'Your first intervention, early in the 60-minute moderated caucus. This is the version ' +
      'referenced in file 05 — it exists only here, so the two files cannot diverge.',
    body: [
      { text: 'Honourable chair, distinguished delegates.' },
      { text: 'Canada will begin with a number that does Canada no credit. This year our private sponsorship target fell from twenty-three thousand to sixteen thousand — a thirty per cent cut — and new applications are suspended until December. Canada is not going to stand here and describe that as anything other than a reduction.' },
      { text: "Canada raises it because it is the argument. Our numbers moved for Canadian reasons: a housing debate, a processing backlog. Germany's move for German reasons. And this year the consequences arrived — UNHCR's budget fell roughly twenty per cent, nearly five thousand posts were cut, and food rations in Uganda and Kenya were reduced by around forty per cent." },
      { text: 'That is not a funding gap. That is a design failure. A protection system resting on the annual goodwill of donor parliaments will keep producing years like this one.' },
      { text: "Sixty-eight per cent of the world's refugees are hosted by low- and middle-income countries. Seven of the largest hosting states on earth are seated in this room, and they are not all wealthy and they are not all poor." },
      { text: 'Canada therefore proposes a Global Hosting Support Facility: contributions indexed to national income, disbursed on hosting numbers, governed by host states in the majority.' },
      { text: 'Canada yields to the chair.' },
    ],
    notes:
      'Pause after "a reduction" — let the concession land before you use it. Slow down on ' +
      '"design failure." Do not yield to points of information on this speech; you want the idea ' +
      'to sit unanswered until you have recruited privately. Do not mention climate, jobs or ' +
      'processing here — one idea per opening.',
  },
  {
    id: 'coalition',
    title: 'Coalition speech — second intervention',
    timing: '206 words · ~85 sec',
    use:
      'Later in the moderated caucus, once you know who is sympathetic. This is the speech that ' +
      'forms your working group. Naming delegations publicly is an invitation they find hard to decline.',
    body: [
      { text: 'Honourable chair.' },
      { text: 'Canada has listened to the delegates of Uganda, Ethiopia, Kenya, Jordan and Egypt, and Canada would like to say plainly what it heard: these states have done what the international community asked of them, and the international community has not held up its end.' },
      { text: "Uganda gives refugees land, work and freedom of movement. Uganda's rations were cut anyway. Canada has no defence to offer for that." },
      { text: "So Canada is not asking this committee to trust donor goodwill. Canada is proposing three structural tests, and we invite delegations to hold our text against them. Is the contribution indexed rather than pledged, so it does not depend on any parliament's mood? Is it disbursed on verified hosting numbers rather than donor preference? And do hosting states hold a majority on the governing body?" },
      { text: 'Canada answers yes to all three, and Canada will put the third in writing before it is asked.' },
      { text: 'Canada notes that Germany and Poland host at the same scale as Uganda and Ethiopia. This is not a proposal by wealthy states for poor ones. It is a proposal by states that host, for states that host.' },
      { text: 'Canada will be drafting during the unmoderated caucus and invites any delegation to join it. Canada yields.' },
    ],
    notes:
      'Look at the delegations you name. The Germany-and-Poland sentence is the load-bearing one — ' +
      'it pre-empts the "Western instrument" attack for the rest of the session. Deliver the last ' +
      'two sentences slowly; they are the actual recruitment.',
  },
  {
    id: 'rebuttal',
    title: 'Rebuttal speech',
    timing: '119 words fixed + 3 fill-in slots',
    use:
      "After a substantive attack on Canada's record. Template — swap the bracketed section for " +
      'whichever rebuttal in file 03 applies. Budget your slots: the fixed text is 119 words, so ' +
      'you have roughly 90 words across the three brackets — about 30 each — to land inside 90 ' +
      'seconds. Going long on the concession is the usual failure.',
    body: [
      { text: 'Honourable chair.' },
      { text: 'Canada thanks the delegate, and Canada is going to begin by agreeing with them.' },
      { text: 'CONCESSION — state their point back accurately, in one or two sentences. Do not soften it. Do not add "however" yet.', slot: true },
      { text: 'Canada does not think that admission weakens its position. Canada thinks it makes the case.' },
      { text: 'PIVOT — one sentence connecting their criticism to the structural problem: the commitment was voluntary, so it moved.', slot: true },
      { text: "Every delegation in this room sets its protection commitments inside domestic constraints. The delegate's government does. Mine does. That is not a failure of any one state; it is what a system built entirely on annual voluntary commitments produces." },
      { text: 'So Canada accepts the premise and reaches the opposite conclusion. If protection is hostage to domestic politics everywhere, the answer is to build something that is not renegotiated every budget year.' },
      { text: 'REDIRECT — one sentence naming the specific clause that answers them, and inviting them to amend it.', slot: true },
      { text: 'Canada would rather the delegate improve this text than sign a weaker one. Canada yields to the chair.' },
    ],
    notes:
      'The structure is concede fully → refuse the implication → generalise → redirect to the ' +
      'clause → invite amendment. Never open a rebuttal with "however." Conceding first is what ' +
      'makes the rest credible, and in a room where most delegates deny everything, it is also ' +
      'what makes you memorable to the dais.',
  },
  {
    id: 'closing',
    title: 'Closing speech',
    timing: '195 words · ~81 sec',
    use: 'During the resolution block, presenting or defending your draft.',
    body: [
      { text: 'Honourable chair, distinguished delegates.' },
      { text: 'This committee has spent the afternoon on a disagreement it does not actually have. Nobody here has argued that hosting states are adequately supported. Nobody has argued that financing is predictable. What we have disagreed about is whether this body can do anything about it.' },
      { text: "Canada's answer is in the text before you. An indicative scale of contributions, published and indexed to national income. Disbursement determined by verified hosting numbers, not by donor preference. A three-year cycle, so that a hosting state can plan past December. And a governing body on which host states hold a majority, because a mechanism designed for them and controlled by us would fail, and would deserve to." },
      { text: 'Canada makes no claim that this is sufficient. It is a scale, not an assessment; appropriation remains sovereign; no legislature is bound by anything in this text.' },
      { text: 'What changes is that a shortfall becomes visible, attributable and on the record, instead of disappearing into an aggregate.' },
      { text: "Canada's own numbers fell this year. Canada would rather be measured against a published scale than trusted on a promise." },
      { text: 'Canada commends this draft to the committee and yields to the chair.' },
    ],
    notes:
      'The opening two sentences reframe the whole session as consensus, which makes voting yes ' +
      'feel like the default. The penultimate paragraph is your PSR cut coming back as an asset. ' +
      'End cleanly — do not trail off into thanks.',
  },
  {
    id: 'short-intervention',
    title: 'Short intervention',
    timing: '93 words · ~39 sec',
    use:
      'When the chair sets a shorter speaking time, or when you want to make one point and sit ' +
      'down. [Judgement] Underusing your time is a power move nobody expects.',
    body: [
      { text: 'Honourable chair.' },
      { text: "Canada will be brief. Sixty-eight per cent of the world's refugees are hosted by low- and middle-income countries, and this year rations in Uganda and Kenya were cut by around forty per cent while UNHCR's budget fell by a fifth." },
      { text: 'Canada does not believe this committee disagrees about those facts. Canada believes the disagreement is about whether we write a mechanism or a sentiment.' },
      { text: 'Canada is drafting a mechanism. Any delegation that wants to improve it is welcome to find this delegate in the unmoderated caucus.' },
      { text: 'Canada yields to the chair.' },
    ],
    notes: '',
  },
];

export default speeches;
