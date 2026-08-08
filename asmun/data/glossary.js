// ASMUN — data/glossary.js
//
// Standard MUN procedural vocabulary. Unlike the other data files, this one is
// NOT placeholder content — these are the real, generally-accepted definitions,
// written plainly. What varies between conferences is the detail (timings,
// majorities, whether a motion is in order at all), so check anything marked
// "Rules vary" against the ASMUN rules of procedure before you rely on it.
//
// Pure data — no imports, no DOM. Rendering lives in js/sections/glossary.js,
// which sorts alphabetically at render time. Add terms in any order you like.

/**
 * @typedef {Object} GlossaryTerm
 * @property {string}   term
 * @property {string}   definition - one or two sentences, plain language
 * @property {string}   [note]     - longer practical note: when to use it, common mistakes
 * @property {string[]} [aliases]  - other spellings that mean this same entry, e.g. the
 *   acronym people actually say out loud. js/modules/tooltips.js links these to the
 *   definition above, so an alias never gets a second copy of the text. Add one only
 *   when it is unambiguous in committee prose.
 */

/** @type {GlossaryTerm[]} */
export const glossary = [
  {
    term: 'Moderated caucus',
    definition:
      'Structured debate on a sub-topic. The chair recognises speakers one at a time for a fixed ' +
      'speaking time, with no yielding between them.',
    note:
      'Motioned with a total duration, a speaking time and a topic — "a ten-minute moderated ' +
      'caucus with a speaking time of forty-five seconds on funding mechanisms". The topic you ' +
      'name frames the debate, so proposing one is a way to steer the room toward ground you are ' +
      'strong on. Rules vary on whether the proposer speaks first.',
  },
  {
    term: 'Unmoderated caucus',
    definition:
      'Debate is suspended and delegates move freely around the room to negotiate, form blocs and ' +
      'draft documents.',
    note:
      'Where the actual work happens. Almost all bloc formation and drafting occurs here rather ' +
      'than in formal debate. Go in knowing which two or three delegates you need to reach — ' +
      'unstructured time disappears very quickly.',
  },
  {
    term: 'Point of information',
    aliases: ['POI'],
    definition:
      'A question put to a delegate who has just finished speaking, asked through the chair.',
    note:
      'Only in order if the speaker has yielded to points of information. It is a question, not a ' +
      'speech — chairs will cut off a delegate who starts making an argument inside one.',
  },
  {
    term: 'Point of order',
    definition:
      'Raised to indicate that the rules of procedure are being applied incorrectly, or that the ' +
      'speaker has strayed from the topic.',
    note:
      'May interrupt a speaker, which makes it the most disruptive point available — and the most ' +
      'costly to misuse. Do not raise it over disagreement with content; that is what debate is ' +
      'for. Raising one incorrectly reads as not knowing the rules.',
  },
  {
    term: 'Working paper',
    definition:
      'An informal draft of ideas circulated to the committee before it has been formatted as, or ' +
      'accepted as, a draft resolution.',
    note:
      'Usually needs no signatories and carries no formal status. Its real function is to plant ' +
      'your language early — text that is already circulating tends to survive into the final ' +
      'draft simply because it exists.',
  },
  {
    term: 'Draft resolution',
    definition:
      'The formal proposed solution: a single long sentence made of preambulatory clauses ' +
      'followed by numbered operative clauses.',
    note:
      'Requires a set number of sponsors and signatories to be introduced — the threshold is set ' +
      'by the conference. Signing is not endorsement; it only means you want to see it debated, ' +
      'which makes signatures cheap to collect and cheap to give.',
  },
  {
    term: 'Preambulatory clause',
    definition:
      'An opening clause establishing context, precedent and justification. Begins with a ' +
      'participle — "Recalling", "Noting with concern", "Deeply disturbed by" — and ends in a comma.',
    note:
      'Describes the world as it is; it commits no one to anything. Because it is non-binding it ' +
      'is the cheapest currency in the room: conceding framing here often buys real operative ' +
      'concessions elsewhere.',
  },
  {
    term: 'Operative clause',
    definition:
      'A numbered clause stating an action the body will actually take. Begins with a present-tense ' +
      'verb — "Calls upon", "Requests", "Establishes" — and ends in a semicolon, or a full stop if last.',
    note:
      'This is the part that matters and the part that gets fought over. The verb sets the ' +
      'strength: "Urges" and "Recommends" are weak, "Demands" and "Establishes" are strong, and ' +
      'a General Assembly body cannot bind members no matter which verb it chooses.',
  },
  {
    term: 'Friendly amendment',
    definition:
      'A change to a draft resolution that every sponsor agrees to. It is incorporated without a vote.',
    note:
      "The efficient way to fix wording, correct errors, or absorb a small bloc's demand. If you " +
      'can get your change accepted as friendly, you avoid spending debate time defending it. ' +
      'Rules vary on whether the chair must still approve it.',
  },
  {
    term: 'Unfriendly amendment',
    definition:
      'A proposed change that the sponsors do not all accept. It must be debated and voted on ' +
      'separately before the resolution itself is voted on.',
    note:
      'A tool of opposition — used to strip out a clause you cannot live with, or to force a bloc ' +
      'to defend its weakest paragraph in public. Needs its own signatories to be introduced.',
  },
  {
    term: 'Motion to table',
    definition:
      'A motion to set a draft resolution or topic aside without voting on its substance, ' +
      'postponing it indefinitely.',
    note:
      'Distinct from adjournment or closure of debate. Kills momentum rather than the document ' +
      'itself, since a tabled item can usually be taken back up by a later motion. Rules vary ' +
      'considerably on the majority required.',
  },
  {
    term: 'Quorum',
    definition:
      'The minimum number of delegates who must be present for the committee to open debate or ' +
      'take a vote.',
    note:
      'Commonly one quarter of members to debate and a simple majority to vote, but the exact ' +
      'thresholds are set by the conference rules. Relevant mainly after breaks, when the room ' +
      'has not fully returned.',
  },
  {
    term: 'Yield',
    definition:
      'What a delegate does with speaking time left over after a formal speech: yield to another ' +
      'delegate, to points of information, or to the chair.',
    note:
      'Yielding to the chair simply ends your speech and is the safe default. Yielding to another ' +
      'delegate hands them your remaining time and is a visible signal of alliance. Yielded time ' +
      'normally cannot be yielded onward a second time.',
  },
  {
    term: 'Placard',
    definition:
      'The card bearing your country name, raised to be recognised by the chair and to vote.',
    note:
      'Raise it high and hold it up — chairs recognise what they can read. In a large committee ' +
      'the delegates who get called on are disproportionately the ones who are simply visible.',
  },
  {
    term: 'Dais',
    definition:
      'The raised platform at the front of the room, and by extension the chairs and directors ' +
      'sitting on it who run the committee.',
    note:
      'All formal communication goes through the dais, and notes to other delegates are usually ' +
      'passed by their staff. They also score you, so procedural courtesy is not merely decorative.',
  },
  {
    term: 'Roll call',
    definition:
      'The chair reads every member state in turn and each delegate responds "present" or ' +
      '"present and voting".',
    note:
      '"Present and voting" gives up your right to abstain on substantive votes — you must vote ' +
      'yes or no. Answer plain "present" unless you specifically want to signal that you will ' +
      'take a side on everything.',
  },
  {
    term: 'Right of reply',
    definition:
      "A request to respond to a remark that directly insulted your country's dignity or " +
      "sovereignty, granted at the chair's discretion.",
    note:
      'Reserved for genuine personal or national attacks, not ordinary policy disagreement. ' +
      'Chairs grant it sparingly and often in writing; requesting one over a normal criticism ' +
      'looks thin-skinned.',
  },
];

export default glossary;
