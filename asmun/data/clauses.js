// clauses.js
// Canada — ASMUN, Monday 10 August 2026
//
// Source: knowledge/07-speech-and-phrase-bank.md, PART 4 (Clause bank). Copied verbatim from the
// two tables there. Edit the markdown first and re-sync — that file is the origin.
//
// `strength` is the source's own rating and drives the colour of the strength chip. Entries the
// source tells you not to use keep that instruction in `when` rather than being dropped, because
// knowing which verbs sink a text is the point of the table.

export const clauseNotes = {
  preambulatory:
    'Non-binding, describe the world as it is, end in a comma. Cheap currency — trade them for ' +
    'operative concessions.',
  operative: 'Binding in form, numbered, end in a semicolon — full stop on the last.',
  discipline:
    '⚑ Verb discipline is scored. Using Demands in an HRC committee is the single most common ' +
    'tell that a delegate has not read the mandate. When in doubt use Calls upon for states and ' +
    'Requests for agencies.',
};

export const clauses = [
  // ---------- Preambulatory starters ----------
  { kind: 'preambulatory', starter: 'Recalling', strength: 'neutral',
    when: 'Citing a treaty or prior resolution. Your default' },
  { kind: 'preambulatory', starter: 'Reaffirming', strength: 'neutral',
    when: 'Restating an agreed principle. Very safe' },
  { kind: 'preambulatory', starter: 'Bearing in mind', strength: 'soft',
    when: 'Slipping in a consideration nobody wants to argue about' },
  { kind: 'preambulatory', starter: 'Noting with concern', strength: 'moderate',
    when: 'Introducing an unwelcome statistic' },
  { kind: 'preambulatory', starter: 'Deeply concerned by', strength: 'strong',
    when: 'Once per resolution, maximum' },
  { kind: 'preambulatory', starter: 'Alarmed by', strength: 'strong',
    when: 'Reserve for the funding collapse' },
  { kind: 'preambulatory', starter: 'Recognizing', strength: 'neutral',
    when: "Crediting another state's contribution — useful for naming Uganda without flattery" },
  { kind: 'preambulatory', starter: 'Emphasizing', strength: 'moderate',
    when: 'Foregrounding the principle your operatives rest on' },
  { kind: 'preambulatory', starter: 'Deeply disturbed by', strength: 'very strong',
    when: 'Avoid. Reads as grandstanding in a technical resolution' },

  // ---------- Operative starters ----------
  { kind: 'operative', starter: 'Encourages', strength: 'weakest',
    when: 'Almost costless. Use to get sceptics to accept a clause at all' },
  { kind: 'operative', starter: 'Invites', strength: 'very weak',
    when: 'For asking an agency to do something optional' },
  { kind: 'operative', starter: 'Recommends', strength: 'weak',
    when: 'Appropriate for a Human Rights Council body. Your workhorse verb' },
  { kind: 'operative', starter: 'Urges', strength: 'weak–moderate',
    when: 'More insistent than Recommends, no more binding' },
  { kind: 'operative', starter: 'Calls upon', strength: 'moderate',
    when: 'The standard ask-states-to-act verb. Safe and normal' },
  { kind: 'operative', starter: 'Requests', strength: 'moderate',
    when: 'For asking a UN organ or official to act — correct for anything aimed at UNHCR' },
  { kind: 'operative', starter: 'Affirms / Reaffirms', strength: 'moderate',
    when: 'For stating a legal position in operative form. Your safeguards clause uses this' },
  { kind: 'operative', starter: 'Stresses', strength: 'moderate',
    when: 'For the non-substitution clause — makes a point without demanding anything' },
  { kind: 'operative', starter: 'Decides', strength: 'strong',
    when: 'A Human Rights Council body generally cannot. Confirm the mandate before using' },
  { kind: 'operative', starter: 'Demands', strength: 'strongest',
    when: 'Security Council register. Do not use' },
  { kind: 'operative', starter: 'Condemns', strength: 'strongest',
    when: 'Do not use. It names states and will sink your text' },
  { kind: 'operative', starter: 'Decides to remain seized of the matter', strength: 'conventional',
    when: 'Traditional closing clause. Harmless, expected, and signals you know the form' },
];

export default clauses;
