// phrases.js
// Canada — ASMUN, Monday 10 August 2026
//
// Source: knowledge/07-speech-and-phrase-bank.md, PART 2 (Points of Information) and PART 3
// (Phrase bank). Copied verbatim. Edit the markdown first and re-sync — that file is the origin.
//
// `text` is the line you actually say. `note` is the source's own italic annotation about when to
// use it, kept separate so the phrase itself stays clean enough to read off under pressure.

/** How long a POI answer may run. Shown above the POI groups. */
export const poiRule =
  'Answer in 20–30 seconds. A POI answer that runs a minute is a speech, and chairs cut it off. ' +
  'Answer the question in the first sentence, then stop.';

export const phrases = [
  {
    id: 'poi-asking',
    part: 'Points of Information',
    category: 'Asking a POI',
    items: [
      { text: 'Would the delegate not agree that…' },
      { text: 'How does the delegate reconcile [X] with [Y]?' },
      { text: 'Can the delegate tell this committee what their own state contributes to…' },
      { text: 'Is the delegate aware that…', note: 'sharp; use once, and only when you are certain' },
      {
        text: 'Would the delegate be willing to see that in the operative text?',
        note: 'the most useful POI in MUN, because it converts a speech into a commitment',
      },
    ],
  },
  {
    id: 'poi-can-answer',
    part: 'Points of Information',
    category: 'Answering a POI you can answer',
    items: [
      { text: 'Yes — and Canada would go further.' },
      { text: "Canada's answer is in clause four, and Canada is happy to read it out." },
      { text: 'The delegate is right. Canada said so in its opening.' },
    ],
  },
  {
    id: 'poi-cannot-answer',
    part: 'Points of Information',
    category: 'Answering a POI you cannot answer',
    note:
      '⚑ Use these without embarrassment. You have five identified figures you cannot verify ' +
      '(file 02, final section). In a room where most delegates will bluff, an audible refusal to ' +
      'bluff is scored, not penalised.',
    items: [
      { text: 'That is a figure this delegate cannot source, and Canada would rather say so than give the committee a number it cannot stand behind.' },
      { text: 'This delegate does not know. Canada will find out and come back to the delegate directly.' },
      { text: 'That is properly a question for my government, not for this delegate.' },
    ],
  },
  {
    id: 'poi-deflect',
    part: 'Points of Information',
    category: 'Deflecting a hostile POI',
    items: [
      { text: "Canada takes the delegate's point and would return the committee to the clause in front of it." },
      { text: 'Canada does not accept the characterisation, but does accept the underlying concern, and clause seven addresses it.' },
      {
        text: "That is a matter before Canada's own courts and this delegate will not prejudge it from a committee floor.",
        note: 'the STCA answer; say it once, calmly, and stop',
      },
    ],
  },
  {
    id: 'openers',
    part: 'Phrase bank',
    category: 'Openers',
    items: [
      { text: 'Honourable chair, distinguished delegates.' },
      { text: 'Canada thanks the chair for recognising this delegation.' },
      { text: 'Canada will be brief.' },
      { text: 'Canada would like to begin by agreeing with the delegate of [X].' },
      { text: 'Canada rises to support the point just made by [X], and to add one thing to it.' },
      { text: 'Canada will begin with a number that does Canada no credit.' },
    ],
  },
  {
    id: 'agreeing',
    part: 'Phrase bank',
    category: 'Agreeing — while adding something',
    items: [
      { text: 'Canada agrees entirely, and would go one step further.' },
      { text: "Canada endorses the delegate's framing and would ask this committee to put it in the operative text." },
      { text: "That is precisely Canada's position, better expressed than Canada expressed it." },
      { text: "Canada has nothing to add to that and will not waste the committee's time pretending otherwise." },
      { text: 'Canada would be glad to co-sponsor language to that effect.' },
    ],
  },
  {
    id: 'disagreeing',
    part: 'Phrase bank',
    category: 'Disagreeing politely',
    items: [
      { text: "Canada respects the delegate's position and reaches a different conclusion." },
      { text: 'Canada does not accept the characterisation, but does accept the concern behind it.' },
      { text: 'Canada would gently suggest that the figure the delegate cited is from an earlier reporting year.' },
      { text: "Canada wonders whether the delegate's proposal survives contact with a funding shortfall." },
      { text: 'Canada is not persuaded, and would welcome being persuaded.' },
      { text: 'With respect to the delegate — and Canada does mean respect — that is not what the text says.' },
    ],
  },
  {
    id: 'conceding',
    part: 'Phrase bank',
    category: 'Conceding without losing ground',
    note: "This is Canada's signature move. Concede fully, refuse the implication, redirect.",
    items: [
      { text: 'The delegate is right, and Canada said so before they did.' },
      { text: 'Canada will not defend that. Canada will explain what it proposes to do about it.' },
      { text: 'Canada accepts the premise and reaches the opposite conclusion.' },
      { text: 'Canada does not claim its own practice is beyond scrutiny. Canada claims the standard is right.' },
      { text: 'Canada would rather be a state being held to a standard than a state that has never accepted one.' },
      { text: 'Canada has no defence to offer for that.' },
    ],
  },
  {
    id: 'redirecting',
    part: 'Phrase bank',
    category: 'Redirecting to your text',
    items: [
      { text: 'Canada would return the committee to the clause in front of it.' },
      { text: 'That concern is addressed at operative clause [n], and Canada invites the delegate to strengthen it.' },
      { text: 'Canada would rather the delegate amend this text than sign a weaker one.' },
      { text: "If that is what it takes to have the delegate's name on this paper, Canada will put it in writing." },
      { text: 'Canada is less interested in who drafted this than in whether it passes.' },
    ],
  },
  {
    id: 'coalition',
    part: 'Phrase bank',
    category: 'Building a coalition',
    items: [
      { text: 'Canada will be drafting during the unmoderated caucus and invites any delegation to join it.' },
      { text: 'Canada would welcome the delegate of [X] as a co-sponsor rather than a signatory.' },
      { text: 'This is not a proposal by wealthy states for poor ones. It is a proposal by states that host, for states that host.' },
      { text: 'Canada suggests the delegate of Ethiopia is better placed to lead on this than Canada is, and Canada would second them.' },
      { text: 'Canada does not need to have drafted a clause in order to support it.' },
    ],
  },
  {
    id: 'yielding',
    part: 'Phrase bank',
    category: 'Yielding',
    items: [
      { text: 'Canada yields to the chair.', note: 'safe default' },
      {
        text: 'Canada yields its remaining time to the delegate of Ukraine.',
        note: 'a visible act of alliance; worth more than a paragraph of solidarity',
      },
      { text: 'Canada yields to points of information.', note: 'only when you are confident' },
      { text: 'Canada thanks the chair and yields.' },
    ],
  },
  {
    id: 'procedural',
    part: 'Phrase bank',
    category: 'Procedural',
    items: [
      { text: 'Motion for a sixty-minute moderated caucus with a speaking time of ninety seconds, on the topic of predictable, formula-based financing for refugee-hosting states.' },
      { text: 'Point of information to the delegate of [X], through the chair.' },
      { text: 'Canada moves to introduce a friendly amendment to operative clause [n].' },
      { text: 'Canada requests clarification from the dais on the majority required.' },
      { text: 'Present.', note: 'at roll call, not "present and voting"' },
    ],
  },
];

export default phrases;
