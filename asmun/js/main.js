import { ping } from './modules/ping.js';

console.log('ES module loaded:', ping());

const timestampEl = document.getElementById('build-timestamp');
if (timestampEl) {
  timestampEl.textContent = new Date().toISOString();
}
