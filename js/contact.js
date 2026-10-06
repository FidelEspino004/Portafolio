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

// El sitio es estático (sin backend), así que no puede "enviar" un
// mail solo: arma un link mailto: con lo que la persona escribió y
// abre su cliente de correo con todo precargado. Ahí tiene que
// apretar "enviar" ella misma.
export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    const subject = `Mensaje de ${nombre} desde el portafolio`;
    const body = `${mensaje}\n\n— ${nombre} (${email})`;

    window.location.href =
      `mailto:hola@fidelserafin.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}