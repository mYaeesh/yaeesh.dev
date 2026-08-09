// rebuttals.js
// Canada — ASMUN, Monday 10 August 2026
//
// Source: knowledge/03-rebuttals.md. All twelve attacks, copied verbatim — attack text, response
// text, strength rating, IF PRESSED exchange and warning notes. Nothing here was written for this
// file, and the honest strength ratings ('adequate', 'weak-to-adequate') are preserved exactly:
// they are the most useful field in the data and softening them would defeat the purpose.
//
// NOT YET RENDERED. No section mounts this data — there is no #rebuttals section in index.html.
// The file exists so the content is available to the site the moment a section is built for it.
//
// `strength` is one of: solid | adequate | weak-to-adequate. `risk: true` marks the ones the
// source flags with ⚠ as your worst exposures.

export const rebuttals = [
  // ---------- GROUP 1 — Attacks on Canada's record ----------
  {
    id: 'psr-cut',
    n: 1,
    group: "Attacks on Canada's record",
    title: 'The Private Sponsorship cut',
    attack:
      "The delegate of Canada speaks of leadership in resettlement. Yet Canada's own private sponsorship target has been cut from twenty-three thousand to sixteen thousand — a thirty per cent reduction — and new applications have been suspended entirely until the end of this year. How does Canada propose that this committee take seriously a lecture on burden-sharing from a delegation that is closing its own doors?",
    from:
      'Most likely Kenya, Jordan, Iran, China or Russia. Russia will phrase it as hypocrisy; Kenya and Jordan will phrase it as disappointment, which is harder to answer.',
    response: [
      'The delegate is correct, and Canada said so before they did. Our private sponsorship target fell by thirty per cent this year and new intake is paused until December. Canada is not going to stand here and describe that as anything other than a reduction.',
      "But Canada would ask the committee to notice what that fact actually demonstrates. Canada's resettlement numbers move with Canadian domestic politics — with our housing debate, with our processing backlog, with our electoral cycle. So do Germany's. So do the United States'. That is precisely the problem this committee exists to solve. A protection system that depends on the annual goodwill of donor parliaments will keep producing years like this one.",
      'Canada is not asking this committee to trust Canadian generosity. Canada is proposing a mechanism that does not require anyone to trust it — because it is indexed, automatic, and does not ask any parliament to vote on it twice.',
    ],
    strength: 'solid',
    strengthNote:
      'This is your best rebuttal in the file, because pre-disclosure has already removed the surprise and the concession converts the attack into the argument for your proposal. It only works if you disclosed the cut in your opening speech. If you did not disclose it first, this response drops to adequate and sounds like damage control.',
    ifPressed: {
      question: 'Cuts are cuts. Will Canada commit today to restoring the twenty-three thousand?',
      answer:
        'This delegate cannot commit the Government of Canada to a number in this room, and any delegate who tells you they can is not being straight with you. What Canada can commit to is the mechanism on the floor, which is the part that outlasts all of our governments.',
    },
    note: 'Refusing to over-promise is stronger than a promise nobody believes. Do not invent a Canadian commitment.',
  },
  {
    id: 'cuts-political',
    n: 2,
    group: "Attacks on Canada's record",
    title: '"The cuts are about housing, not principle"',
    attack:
      'Canada tells us this is a matter of processing capacity. It is not. Canada cut refugees because of a domestic housing shortage and an election. Canada reduced protection for the convenience of Canadian voters. Will the delegate admit that the cut was political?',
    from: 'Russia, China, Belarus — designed to make you either lie or concede that Canadian protection is contingent.',
    response: [
      "Canada will answer that directly: yes, domestic conditions shaped the number. Canada is a democracy, our immigration levels are set by a government answerable to an electorate, and pretending otherwise would insult this committee's intelligence.",
      "The delegate appears to think that admission damages Canada's position. Canada thinks it makes the case. Every state in this room sets its protection commitments inside its own domestic constraints — the delegate's government does, mine does, all forty-eight of us do. That is not a Canadian failing; it is a structural feature of a system built entirely on voluntary annual commitments.",
      'So Canada agrees with the premise and draws the opposite conclusion. If protection is hostage to domestic politics everywhere, the answer is to build something that is not renegotiated every budget year. That is the proposal in front of this committee.',
    ],
    strength: 'solid',
    strengthNote:
      'Full concession is the correct move — the attack is designed to catch you denying something obviously true, and the entire force of it evaporates the moment you agree.',
    ifPressed: {
      question: 'Then Canada admits refugees are a lower priority than housing.',
      answer:
        "Canada admits that governments make choices under constraint, including this one. The delegate's government does too. Canada's response to that reality is to propose a mechanism that removes some of it. What is the delegate's?",
    },
    note: 'Turning the question back is legitimate here because the attacking delegation has typically proposed nothing.',
  },
  {
    id: 'stca',
    n: 3,
    group: "Attacks on Canada's record",
    title: 'The Safe Third Country Agreement',
    risk: true,
    riskLabel: 'your worst exposure',
    attack:
      'The delegate of Canada speaks eloquently about non-refoulement. Canada also operates an agreement returning asylum claimants to the United States — an agreement that Amnesty International and the Canadian Council for Refugees challenged in Canadian courts as recently as June of this year, on the grounds that Canada is returning refugees to danger. Does Canada apply to itself the standard it is proposing for everyone else?',
    from:
      'Kenya, Jordan, Iran, China, Russia — or, worst case, Afghanistan or Syria, which would be far more damaging because it would be sincere.',
    response: [
      "That litigation is real, it is current, and it is before Canada's own courts — which is where Canada believes it belongs. Canada's Supreme Court considered the agreement in 2023; a new challenge was filed in June. This delegate is not going to argue that case on this floor, in either direction.",
      "What Canada will say is this. The principle the delegate is invoking against Canada is the same principle Canada is defending in this committee — that no one may be returned to serious harm, and that returns must be voluntary, safe, dignified and informed. Canada does not claim that its own practice is beyond scrutiny. It claims that the standard is right, that Canadian institutions are being asked to apply it at home, and that this committee's task is to make the standard operational everywhere.",
      'Canada would rather be a state that is being held to the standard than a state that has never accepted one.',
    ],
    strength: 'adequate',
    strengthNote:
      'And this is the most honest rating in this file. You cannot win this exchange. You can only survive it without lying and without abandoning your government. The response works because it refuses the trap on both sides. It will not satisfy the attacker and it is not meant to; it is aimed at the undecided delegates listening.',
    ifPressed: {
      question: 'Is the United States a safe country for refugees, yes or no?',
      answer:
        'That is precisely the question before a Canadian court, and this delegate is not going to prejudge it from a committee floor. Canada is happy to be judged by whatever that court decides.',
    },
    note:
      '⚠ Do not answer that question either way. "Yes" is indefensible in this room and puts you at odds with Mexico and much of the room; "no" contradicts your own government and hands Russia a clip. The refusal is the answer. Say it once, calmly, and stop talking. ⚑ Preparation note: this attack is seven weeks old and is the one you are least ready for. Read it aloud twice before Monday.',
  },
  {
    id: 'empp-closed',
    n: 4,
    group: "Attacks on Canada's record",
    title: 'The EMPP is closed',
    attack:
      'Canada offers the Economic Mobility Pathways Pilot as proof that labour mobility works. Canada closed that programme to new applications in March. Is the delegation aware that it is citing a programme its own government has shut down?',
    from:
      'Germany or the UK — the two delegations most likely to have checked, and they would raise it collegially, which makes it worse, not better.',
    response: [
      'Canada is aware, and the delegate is right to raise it. The pilot is closed to new applications. Canada cites it as a completed pilot, not a running programme, and this delegation should have been clearer about that.',
      "What a pilot is for is evidence, and the evidence held: skilled refugees selected through economic streams were admitted, employed, and concentrated in occupations Canada was short of — health care above all. That finding does not expire because the pilot did. It is the reason Canada is proposing that this mechanism be built multilaterally rather than as one country's experiment.",
    ],
    strength: 'adequate',
    strengthNote:
      "Provided you have already framed EMPP in the past tense. If you cited it as live and are then corrected, this drops to weak — you will look as though you did not know your own government's programme, and everything else you have said becomes suspect.",
    ifPressed: {
      question: 'Why did Canada close it?',
      answer:
        "This delegate does not know, and would rather say so than speculate about his own government's reasoning in front of this committee.",
    },
    note: '⚠ You genuinely do not know. Do not guess. "I don\'t know" costs you almost nothing here and a wrong guess costs you everything.',
  },

  // ---------- GROUP 2 — Structural attacks on the West ----------
  {
    id: 'western-take-too-few',
    n: 5,
    group: 'Structural attacks on the West',
    title: '"Western nations take too few"',
    attack:
      "Sixty-eight per cent of the world's refugees are hosted by low- and middle-income countries. Uganda hosts more than two million people. Canada's entire annual humanitarian intake is forty-nine thousand. On what basis does the wealthiest quartile of this committee consider itself qualified to design the solution?",
    from: 'Kenya, Ethiopia, Uganda, Egypt, Pakistan, Iran — and it is a correct argument, not a rhetorical one.',
    response: [
      "The delegate's figure is right and Canada has cited it too. Sixty-eight per cent. Canada would add that Uganda hosts more refugees than Canada has admitted in the whole of the last four decades, on a fraction of the income, and that this is a fact about the world that Canadians should find uncomfortable.",
      'Canada does not consider itself qualified to design the solution and is not proposing to. What Canada is proposing is that the states doing the hosting stop being asked to also do the fundraising. Under this mechanism Canada does not decide who is hosted or how — Canada pays, on a formula it cannot renegotiate in a bad year.',
      'Canada would rather be assessed than thanked.',
    ],
    strength: 'solid',
    strengthNote:
      'Total concession plus an offer that transfers control away from you. The last line is worth memorising.',
    ifPressed: {
      question: 'Then will Canada increase its intake?',
      answer:
        'This delegate cannot pledge a number for the Government of Canada. What Canada can do here is make the money predictable, and Canada suggests that a formula it cannot walk away from is worth more to Uganda than a figure I could promise and my successor could ignore.',
    },
  },
  {
    id: 'burden-sharing',
    n: 6,
    group: 'Structural attacks on the West',
    title: 'Burden-sharing, from a major hosting state',
    attack:
      'Uganda has kept its borders open, given refugees land, work rights and freedom of movement, and has been held up by every agency in this system as a model. This year our rations were cut by forty per cent. Model behaviour has not been rewarded. Why should Uganda believe that another financing framework, designed by donors, will end differently?',
    from:
      'Uganda, Kenya, Ethiopia, Jordan. This is not hostile — it is the most important question in the room, and how you answer it decides whether you get a coalition.',
    response: [
      'Canada has no answer to why it ended that way, because there is no good answer. Uganda did what the international community asked, and the international community did not hold up its end. Canada will not insult this committee by explaining that away.',
      "So Canada will not ask Uganda to believe in donor goodwill, because Uganda has correctly stopped believing in it. Canada is asking Uganda to look at whether this instrument is different in structure, not in tone. Three tests: is the contribution indexed rather than pledged, so it does not depend on any parliament's mood? Is it disbursed on hosting numbers rather than on donor priorities? And is it governed with host states in the majority, not as observers?",
      'If it fails any of those, Uganda should reject it — and Canada would rather Uganda amend this text than sign a weaker one.',
    ],
    strength: 'solid',
    strengthNote:
      'Inviting them to amend is the single most useful sentence you can say to a hosting state, and it costs you nothing because you want their amendments anyway.',
    ifPressed: {
      question: 'Will host states hold a majority on the governing body?',
      answer:
        "Canada's answer is yes, and Canada will put it in the text. If that is what it takes to get Uganda's name on this paper, it is a price worth paying and Canada would rather pay it now than negotiate it later.",
    },
    note:
      '⚠ Say this only if you mean it — and you should. [Judgement] Host-state majority governance is the concession that makes your funding clause pass, and you should offer it before it is demanded. It also protects you against the "Western instrument" attack for the rest of the session.',
  },
  {
    id: 'intervention-blame',
    n: 7,
    group: 'Structural attacks on the West',
    title: 'Intervention-blame',
    attack:
      'This committee proposes to discuss financing while ignoring cause. Iraq. Libya. Afghanistan. The largest displacement crises of this century were produced by Western military action and Western arms. A resolution that asks host states to manage capacity better, while saying nothing about who created the capacity problem, asks the least responsible to do the most adjusting.',
    from:
      'Russia, China, Belarus — and versions of it from Iraq, Libya, Syria, Afghanistan, Palestine, Yemen with far more standing.',
    response: [
      'Canada is not going to tell this committee that the causes of displacement are irrelevant, because they are not, and delegations in this room have lived them.',
      "Canada will say two things. First, this committee will not settle the question of historical responsibility in one session, and the attempt would guarantee that we adjourn with nothing. Second, the people in Dadaab and in Cox's Bazar and in White Nile do not become less displaced while we establish whose fault it is.",
      "Canada's position is that responsibility for cause and responsibility for response are different obligations, and that a state can be asked to meet the second without the committee first resolving the first. Canada is willing to be assessed on the second, today, on a formula. Canada invites the delegate to do the same.",
    ],
    strength: 'adequate',
    strengthNote:
      'It is a deflection and everyone will know it. The saving element is the last line, which puts a cost on the attacker: if they keep pressing cause, they are visibly declining to fund response.',
    ifPressed: {
      question: 'Canada refuses to name any cause at all?',
      answer:
        "Canada names displacement's causes as conflict, persecution and increasingly climate. Canada does not name states from this chair, and would apply that rule to itself as readily as to anyone else.",
    },
    note: '⚠ See attack 8 immediately. This deflection is significantly more dangerous in this room than your old notes assumed.',
  },
  {
    id: 'ukraine-syria-deflection',
    n: 8,
    group: 'Structural attacks on the West',
    title: 'Ukraine or Syria, if you deflect too hard',
    risk: true,
    riskLabel: 'the most dangerous attack in the file',
    attack:
      "The delegate of Canada has just told this committee that it should not assign responsibility. My delegation represents people who were displaced by a state seated in this room. Canada says the cause can wait. Ukraine would like to know how long Canada expects us to wait, and whether Canada's neutrality is a principle or a convenience.",
    from:
      "Ukraine, or Syria in a sharper form. [Judgement] Your old notes did not anticipate this and it is the most dangerous attack in the file — because it comes from a delegation you support, it is morally correct, and answering it badly loses you the room's sympathy rather than just an argument.",
    response: [
      "Canada withdraws nothing it has said about Ukraine and would say it again outside this chamber and inside it. Canada's position on the origin of that displacement has never been ambiguous and is not ambiguous now.",
      "What Canada said was narrower, and Canada should have said it more carefully. Canada's caution is about what goes into an operative clause — because a clause that names a state will be voted down, and everything attached to it goes down with it, including the financing that Ukrainian and Syrian displaced people need. That is a drafting judgement, not a moral one.",
      'Canada does not ask Ukraine to be quiet about what happened to Ukraine. Canada will yield time to this delegate rather than ask them to trim it. Canada asks only that we not tie the protection of the displaced to a sentence we already know will fail.',
    ],
    strength: 'adequate',
    strengthNote:
      'At best, and only if delivered with genuine warmth. There is no clean answer. The distinction between moral position and drafting strategy is real and defensible, but it can sound like lawyering, and to a delegate representing a displaced population, lawyering is the insult.',
    ifPressed: {
      question: "So Canada's support has a limit and the limit is the operative clause.",
      answer:
        "Canada's support does not have a limit. Canada's assessment of what this committee will pass does. If Ukraine wishes to bring that language, Canada will not oppose it — and Canada will still be here afterwards with the financing text.",
    },
    note:
      "⚑ [Judgement] The real prevention is behavioural, not verbal. Do not deliver attack 7's deflection in a cold, procedural tone. Before you deflect, acknowledge Ukraine and Syria by name and yield time to one of them early in the moderated caucus. If you have visibly stood with them once, this attack does not get made. If your first interaction with Ukraine is a deflection, it does — and you will deserve it.",
  },
  {
    id: 'afghanistan-responsibility',
    n: 9,
    group: 'Structural attacks on the West',
    title: 'Afghanistan on Western responsibility',
    risk: true,
    riskLabel: 'strongest moral position in the room',
    attack:
      'Afghanistan is the largest displacement crisis of the last four decades. Western states occupied my country for twenty years, and left. Millions are now being returned across two borders into a country the same Western states will not recognise or fund. Canada proposes a formula. Afghanistan would like to know whether Canada considers itself a donor to this crisis or a party to it.',
    from:
      'Afghanistan — seated opposite both Pakistan and Iran, and holding the strongest moral position in the room. [Judgement] Afghanistan may well spend it on the West rather than on its neighbours; that is the harder version for you.',
    response: [
      'Canada was in Afghanistan for twelve years and Canadians should not need reminding of it. Canada does not claim the status of a disinterested donor to this crisis and will not pretend to it here.',
      'Canada would say to the delegate that this is the strongest argument in this room for the mechanism on the floor, not against it. What Afghanistan is describing is exactly what happens when responsibility is voluntary: states engage when it suits them and disengage when it stops suiting them, and the obligation ends the day the last aircraft leaves. An indexed contribution does not end when attention does.',
      'And Canada will say the other part plainly, because the delegate should not have to: returns to Afghanistan at the present scale are not voluntary, safe, dignified or informed, and Canada does not accept them as durable solutions.',
    ],
    strength: 'solid',
    strengthNote:
      '[Judgement] It is the highest-value thing you can say all session. The last paragraph gives Afghanistan something no other Western delegation will give it, and it does so without naming Pakistan or Iran — the principle carries the whole weight. Afghanistan hears an ally; Pakistan cannot object to a sentence that names nobody.',
    ifPressed: {
      question: 'Then will Canada resettle Afghans?',
      answer:
        'Canada has resettled Afghans and this delegate will not stand here and pretend the number was adequate to what was owed. Canada cannot pledge a new figure from this chair. Canada can put the standard for returns into the operative text of this resolution today, and invites Afghanistan to draft that clause with us.',
    },
    note: "⚠ Do not cite a figure for Canada's Afghan resettlement. You do not have a verified one.",
  },

  // ---------- GROUP 3 — Attacks on your proposals ----------
  {
    id: 'climate-no-legal-basis',
    n: 10,
    group: 'Attacks on your proposals',
    title: 'Climate displacement has no legal basis',
    attack:
      'There is no such thing as a climate refugee in international law. The 1951 Convention requires persecution on five enumerated grounds and environmental degradation is not among them. Canada proposes to invent a legal category by resolution. Does the delegate seriously suggest that this committee can create protection status where treaty law provides none?',
    from:
      'China, Russia, Saudi Arabia, India — and possibly, on purely technical grounds, from a well-briefed Switzerland or Germany.',
    response: [
      'The delegate is right about the 1951 Convention and Canada agrees with them. Environmental degradation is not a Convention ground, Canada does not propose to make it one, and Canada opposes reopening that treaty — which, once opened, is far likelier to be narrowed than widened.',
      'But the delegate has described only one instrument. In Teitiota v New Zealand the UN Human Rights Committee found that a state may not return a person where climate conditions create a real risk to the right to life under Article 6 of the Covenant. That obligation already exists, for every party to the ICCPR, including Canada and including most of this committee. Canada is not inventing a category. Canada is proposing that this committee do the unglamorous work of specifying an obligation states already have.',
    ],
    strength: 'solid',
    strengthNote:
      'Solid on the law, weak on the politics. Teitiota is real, correctly characterised, and most delegates will not have heard of it — citing it accurately will land. What it will not do is produce consensus for a new status, because none exists. Pitch process, not status (see file 05) and this attack mostly disappears.',
    ifPressed: {
      question: 'Teitiota lost his case.',
      answer:
        'He did, on the facts — the Committee found the risk was not imminent. It also found the obligation exists. Canada relies on the second finding, and Canada would note that New Zealand is seated in this committee and may wish to speak to it.',
    },
    note:
      '⚑ [Judgement] Inviting New Zealand in is the move. It is their case, they are in the room, and no one else will have thought of it. Speak to New Zealand during the break before you ever say the word Teitiota on the floor.',
  },
  {
    id: 'gdp-formula-sovereignty',
    n: 11,
    group: 'Attacks on your proposals',
    title: 'The GDP formula overrides budgetary sovereignty',
    attack:
      "Canada proposes automatic contributions scaled to national income. That is an assessed levy imposed by formula, removing appropriation from national legislatures. No state in this room can bind its successors' budgets. Canada's proposal is either unenforceable, in which case it is voluntary pledging with extra steps, or it is enforceable, in which case Canada should say plainly that it is proposing a tax.",
    from:
      'Russia, China, Saudi Arabia, India, the US — and this is the sharpest technical objection you will face, because it is correct.',
    response: [
      'It is the second thing, softened, and Canada will describe it accurately rather than hide behind the word "automatic."',
      'What Canada proposes is an indicative scale — published, indexed to national income, reviewed on a fixed cycle — with contributions remaining sovereign acts of appropriation, and with non-contribution recorded and reported rather than penalised. No legislature is bound. What changes is that a shortfall becomes visible, attributable, and on the record, instead of disappearing into an aggregate.',
      'Canada accepts that this is weaker than an assessment. It is considerably stronger than a pledging conference, because a pledging conference has no memory. Transparency is the enforcement mechanism, and for most states in this room it is a real one.',
    ],
    strength: 'adequate',
    strengthNote:
      'You are conceding the design is softer than the label. That is the honest position and it is survivable, but it does weaken the pitch to Uganda — so do not oversell "automatic" earlier in the session, or this concession will look like a retreat. Say "indexed" from the start.',
    ifPressed: {
      question: 'So there is no consequence for non-payment.',
      answer:
        'The consequence is publication. The delegate may think that is nothing. Canada would observe that most states in this room care a great deal about which column their name appears in, and that the ones who genuinely do not were never going to sign a binding instrument either.',
    },
  },
  {
    id: 'biometric-data-sovereignty',
    n: 12,
    group: 'Attacks on your proposals',
    title: 'Biometric processing and data sovereignty',
    attack:
      "Canada proposes UNHCR-managed biometric processing. In 2021 Human Rights Watch found that UNHCR had collected Rohingya biometric data and that it was shared with the government those people had fled, without informed consent and without a data impact assessment, in breach of UNHCR's own policy. Canada proposes to expand the system that did that.",
    from:
      'China, Russia, Iran on sovereignty grounds — and, far more damagingly, Myanmar is seated, as is a committee full of states whose nationals are in those databases.',
    response: [
      'The delegate has stated that accurately and Canada does not dispute a word of it. The 2021 findings were serious, they concerned a real failure of consent, and Canada is not going to defend them.',
      "Canada's proposal is not to expand that system as it stood. It is to condition support on the safeguards whose absence caused that failure: no transfer of biometric data to a country of origin under any circumstances, a mandatory data protection impact assessment before deployment, consent obtained in the language of the population concerned, and no linkage of biometric enrolment to food or medical assistance.",
      'If this committee cannot agree those four safeguards, Canada would rather withdraw the processing proposal than pass a weaker version of it.',
    ],
    strength: 'weak-to-adequate',
    strengthNote:
      'And this is the honest rating. The response is decent, but the underlying proposal is the most attackable of your four and the attack is documented, recent and easy to make. [Judgement] Recommendation: do not lead with processing, do not defend it hard, and be genuinely prepared to trade it away. Offering to drop it is worth more as a negotiating concession than the clause is worth on its own.',
    ifPressed: {
      question: 'Will Canada accept host-state control of the data instead of UNHCR?',
      answer:
        "Canada's concern is with the safeguards, not with the custodian. If a delegation can propose an arrangement that meets those four conditions, Canada will support it and does not need to have drafted it.",
    },
  },
];

export default rebuttals;
