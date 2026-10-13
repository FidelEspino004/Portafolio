// =====================================================================
// main.js — PUNTO DE ENTRADA DEL JAVASCRIPT
//
// Es el único archivo que enlazan los HTML:
//     <script type="module" src="js/main.js"></script>
// y desde acá se "enchufan" los demás (nav.js y contact.js).
//
// CÓMO FUNCIONA
// 1) type="module" es lo que permite usar import / export. Por eso el
//    proyecto hay que abrirlo con un servidor local (Live Server, etc.)
//    y no haciendo doble clic en el HTML.
// 2) Cada archivo exporta una función "init..." que, al llamarla, le
//    agrega comportamiento a la página (escuchar clics, enviar el
//    formulario, etc.). Acá las importamos y las llamamos una por una.
// 3) Se llaman dentro de DOMContentLoaded para asegurarnos de que el
//    navegador ya leyó todo el HTML. Si las llamáramos antes, los
//    botones todavía no existirían y document.querySelector no los
//    encontraría.
//
// Este mismo main.js se usa en index.html y en proyectos.html. Cada
// función init revisa si los elementos que necesita existen en la
// página actual y, si no existen, no hace nada (ver "return" al
// principio de initContact e initContactForm).
//
// IMPORTANTE: si agregás una función nueva en otro archivo, tenés que
// (a) exportarla en ese archivo, (b) importarla acá arriba y
// (c) llamarla dentro de DOMContentLoaded. Si importás algo que el otro
// archivo no exporta, el navegador corta TODO el JavaScript y ningún
// botón funciona (en la consola, F12, aparece "does not provide an
// export named ...").
// =====================================================================

import { initNav } from './nav.js';
import { initContact, initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();          // botones del sidebar: cambian de sección
  initContact();      // botón "Copiar correo"
  initContactForm();  // formulario de Contacto (abre el mail con todo cargado)
});
