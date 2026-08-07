// ASMUN — main.js
// Boot order matters: every section must mount before initSearch() runs, because
// mountSection() is what registers a section's items with the global search index.

import { initThemeToggle } from './modules/theme.js?v=4';
import { initActiveNav } from './modules/nav.js?v=4';
import { initSearch } from './modules/search.js?v=4';

import { initAgenda } from './sections/agenda.js?v=4';
import { initBlocs } from './sections/blocs.js?v=4';
import { initGlossary } from './sections/glossary.js?v=4';
import { initFacts } from './sections/facts.js?v=4';
import { initQuestions } from './sections/questions.js?v=4';
import { initAllies } from './sections/allies.js?v=4';
import { initRoster } from './sections/roster.js?v=4';

initThemeToggle();

initAgenda();
initBlocs();
initGlossary();
initFacts();
initQuestions();
initAllies();
initRoster();

initSearch();

// Nav last: it observes .panel-section elements, which only have their final
// height once the sections above have rendered their content.
initActiveNav();
