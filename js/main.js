import { initTheme } from './theme.js';
import { initNav } from './nav.js';
import { initContact } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initContact();
});
