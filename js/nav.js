// =====================================================================
// nav.js — NAVEGACIÓN ENTRE SECCIONES (el "SPA")
//
// QUÉ HACE
// index.html tiene 4 secciones (<section class="panel">: Presentación,
// Trabajos, Nosotros y Contacto) y 4 botones en el sidebar. Este archivo
// hace que al tocar un botón se muestre SOLO la sección correspondiente,
// sin recargar la página. Eso es lo que hace que sea una "Single Page
// Application".
//
// CÓMO LO HACE
// - No muestra ni oculta nada con JavaScript directamente. Lo único que
//   hace es mover la clase "active". El CSS (style.css) se encarga del
//   resto:
//       .panel         { display: none; }   -> todas las secciones ocultas
//       .panel.active  { display: block; }  -> solo la que tiene "active"
//       .nav-btn.active { ... }             -> el botón resaltado
// - Cada botón sabe qué sección le toca por su atributo data-target:
//       <button class="nav-btn" data-target="contacto">
//   El valor tiene que ser IGUAL al id de una sección:
//       <section id="contacto" class="panel">
//   Si no coincide, document.getElementById devuelve null y da error.
//   (Pasa hoy en html/proyectos.html: su botón "Inicio" apunta a
//   "presentacion", que no existe en esa página.)
// =====================================================================

export function initNav() {
  // querySelectorAll devuelve la lista de TODOS los elementos que tengan
  // esa clase (a diferencia de querySelector, que devuelve solo el primero).
  const buttons = document.querySelectorAll('.nav-btn');
  const panels = document.querySelectorAll('.panel');

  // forEach recorre la lista y le agrega a cada botón su propio "oyente"
  // de clics.
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // 1) Apagar todo: sacarle "active" a todos los botones y secciones.
      buttons.forEach((b) => b.classList.remove('active'));
      panels.forEach((p) => p.classList.remove('active'));

      // 2) Prender solo lo que corresponde: el botón tocado y la sección
      //    cuyo id es el data-target de ese botón. (btn.dataset.target
      //    lee el atributo data-target del HTML.)
      btn.classList.add('active');
      document.getElementById(btn.dataset.target).classList.add('active');

      // 3) Volver al principio de la página. Se hace sobre "window"
      //    porque quien scrollea es la página entera (el <main> no tiene
      //    scroll propio). Sin esto, si estabas abajo de todo en una
      //    sección larga y pasabas a Contacto, quedabas a mitad de página.
      window.scrollTo({ top: 0, behavior: 'auto' });
    });
  });
}
