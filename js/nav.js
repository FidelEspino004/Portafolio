// Cambia de sección sin recargar la página: activa el botón
// tocado y muestra el panel correspondiente.

export function initNav() {
  const buttons = document.querySelectorAll('.nav-btn');
  const panels = document.querySelectorAll('.panel');
  const content = document.getElementById('content');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');

      content.scrollTo({ top: 0, behavior: 'auto' });
    });
  });
}
