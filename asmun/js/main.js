// ASMUN — main.js
// Boot order matters: every section must mount before initSearch() runs, because
// mountSection() is what registers a section's items with the global search index.

import { initThemeToggle } from './modules/theme.js?v=10';
import { initActiveNav } from './modules/nav.js?v=10';
import { initSearch } from './modules/search.js?v=10';
import { initTooltips } from './modules/tooltips.js?v=10';
import { initWelcome } from './modules/welcome.js?v=10';

import { initAgenda } from './sections/agenda.js?v=10';
import { initBlocs } from './sections/blocs.js?v=10';
import { initGlossary } from './sections/glossary.js?v=10';
import { initFacts } from './sections/facts.js?v=10';
import { initQuestions } from './sections/questions.js?v=10';
import { initAllies } from './sections/allies.js?v=10';
import { initRoster } from './sections/roster.js?v=10';
import { initSpeeches } from './sections/speeches.js?v=10';
import { initPhrases } from './sections/phrases.js?v=10';
import { initClauses } from './sections/clauses.js?v=10';

initThemeToggle();

initAgenda();
initBlocs();
initGlossary();
initFacts();
initQuestions();
initAllies();
initRoster();
initSpeeches();
initPhrases();
initClauses();

// After every section has rendered: the glossary pass reads the DOM those
// sections just produced, and re-runs itself when any of them re-renders.
initTooltips();

initSearch();

// Nav last: it observes .panel-section elements, which only have their final
// height once the sections above have rendered their content.
initActiveNav();
initWelcome();
