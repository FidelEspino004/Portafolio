// =====================================================================
// contact.js — SECCIÓN CONTACTO
//
// Tiene dos funciones independientes, las dos se llaman desde main.js:
//   1) initContact()     -> botón "Copiar correo"
//   2) initContactForm() -> formulario "Enviar mensaje"
//
// El mail de destino (hola@fidelserafin.dev) está escrito a mano en las
// dos funciones y también en index.html (el link "mailto:" y el botón
// de Gmail). Si lo cambian, hay que cambiarlo en los tres lados.
// =====================================================================


// ---------------------------------------------------------------------
// 1) COPIAR EL CORREO AL PORTAPAPELES
//
// Al tocar el botón (<button id="copy-email">):
//   - navigator.clipboard.writeText(...) copia el texto al portapapeles.
//   - Cambia el texto del botón a "Copiado".
//   - Marca el botón con data-copied="true" (un CSS podría usarlo para
//     darle otro estilo mientras está en ese estado).
//   - setTimeout lo deja todo como estaba después de 1,8 segundos
//     (1800 milisegundos).
//
// Nota: si el navegador bloquea el portapapeles (por ejemplo en una
// página sin https), el botón igual muestra "Copiado" aunque no haya
// copiado nada.
// ---------------------------------------------------------------------
export function initContact() {
  const copyBtn = document.getElementById('copy-email');

  // Si esta página no tiene el botón (como proyectos.html), se sale.
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
    } catch (e) {
      // Si algo falla no hacemos nada: el botón queda como estaba.
    }
  });
}


// ---------------------------------------------------------------------
// 2) FORMULARIO DE CONTACTO
//
// El sitio es estático (no tiene servidor), así que NO puede enviar un
// mail por sí solo. Lo que hace es armar un link "mailto:" con lo que la
// persona escribió y abrirlo: eso abre su programa de correo (Mail,
// Outlook, etc.) con destinatario, asunto y mensaje ya cargados. Ahí la
// persona tiene que apretar "enviar" ella misma.
//
// Paso a paso:
//   1. El evento "submit" se dispara cuando se toca el botón de enviar.
//      Antes de eso el navegador ya revisó los campos "required" y que
//      el email tenga formato de email; si algo está mal, ni llega acá.
//   2. e.preventDefault() frena el comportamiento normal del formulario
//      (recargar la página). Así controlamos nosotros qué pasa.
//   3. form.nombre, form.email y form.mensaje leen cada campo por su
//      atributo name="..." del HTML. .value es lo que escribió la
//      persona y .trim() le saca los espacios sobrantes del principio
//      y del final.
//   4. Se arma el asunto y el cuerpo con template strings (las comillas
//      invertidas ` `, que permiten meter variables con ${...}).
//      "\n" es un salto de línea.
//   5. encodeURIComponent convierte el texto para que sea válido dentro
//      de una URL (por ejemplo los espacios pasan a %20 y los saltos de
//      línea a %0A). Sin eso, tildes, "&" o saltos de línea romperían
//      el link.
//   6. window.location.href = "mailto:..." navega a ese link, y el
//      navegador abre el programa de correo del usuario.
// ---------------------------------------------------------------------
export function initContactForm() {
  const form = document.getElementById('contact-form');

  // Si esta página no tiene el formulario, se sale.
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
