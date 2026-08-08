// ASMUN — main.js
// Boot order matters: every section must mount before initSearch() runs, because
// mountSection() is what registers a section's items with the global search index.

import { initThemeToggle } from './modules/theme.js?v=5';
import { initActiveNav } from './modules/nav.js?v=5';
import { initSearch } from './modules/search.js?v=5';
import { initTooltips } from './modules/tooltips.js?v=6';
import { initWelcome } from './modules/welcome.js?v=1';

import { initAgenda } from './sections/agenda.js?v=5';
import { initBlocs } from './sections/blocs.js?v=5';
import { initGlossary } from './sections/glossary.js?v=6';
import { initFacts } from './sections/facts.js?v=5';
import { initQuestions } from './sections/questions.js?v=5';
import { initAllies } from './sections/allies.js?v=5';
import { initRoster } from './sections/roster.js?v=5';

initThemeToggle();

initAgenda();
initBlocs();
initGlossary();
initFacts();
initQuestions();
initAllies();
initRoster();

// After every section has rendered: the glossary pass reads the DOM those
// sections just produced, and re-runs itself when any of them re-renders.
initTooltips();

initSearch();

// Nav last: it observes .panel-section elements, which only have their final
// height once the sections above have rendered their content.
initActiveNav();
initWelcome();
