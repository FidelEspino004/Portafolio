// Copia el correo al portapapeles y muestra una confirmación
// breve en el propio botón.

export function initContact() {
  const copyBtn = document.getElementById('copy-email');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    try {
      navigator.clipboard.writeText('hola@fidelserafin.dev');
      copyBtn.textContent = 'Copiado';
      copyBtn.dataset.copied = 'true';

      setTimeout(() => {
        copyBtn.textContent = 'Copiar correo';
        copyBtn.dataset.copied = 'false';
      }, 1800);
    } catch (e) {}
  });
}
