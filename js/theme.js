// Maneja el botón de tema (sol / luna) y recuerda la elección
// del visitante en localStorage.

export function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');

  // Al cargar: si el visitante ya eligió un tema antes, se respeta.
  try {
    const saved = localStorage.getItem('theme');
    if (saved) root.setAttribute('data-theme', saved);
  } catch (e) {
    // localStorage puede fallar (modo privado, permisos, etc.)
  }

  toggle.addEventListener('click', () => {
    const current =
      root.getAttribute('data-theme') === 'dark' ? 'dark' :
      root.getAttribute('data-theme') === 'light' ? 'light' :
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);

    try {
      localStorage.setItem('theme', next);
    } catch (e) {}
  });
}
