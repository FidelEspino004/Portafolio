# Portafolio — Fidel & Serafín

Portafolio de desarrollador armado como una SPA de una sola página, con 4 secciones navegables sin recargar: **Presentación, Trabajos, Redes y Contacto**.

## Estructura del proyecto dividido

```
portafolio/
├── index.html
├── css/
│   ├── variables.css      → colores y tema claro/oscuro
│   ├── base.css           → reset, tipografía general, foco de teclado
│   ├── layout.css         → topbar, grid Nav/Main, responsive
│   └── components.css     → botón de tema, nav, paneles, tarjetas, links
├── js/
│   ├── theme.js            → toggle de tema + localStorage
│   ├── nav.js               → cambio de sección de la SPA
│   ├── contact.js           → botón de copiar el correo
│   └── main.js               → punto de entrada, importa los otros 3 módulos
├── assets/
│   ├── icons/
│   └── images/
└── README.md               → instrucciones para correrlo localmente
```

## Decisiones de diseño vigentes

- **Paleta:** escala de grises ("papel y tinta"), con variables CSS (`--paper`, `--ink`, `--graphite`, `--line`, `--hover`, `--panel`) que cambian según el tema.
- **Tema claro/oscuro:** automático según el sistema operativo, o forzado con el botón de la esquina superior derecha. Se guarda en `localStorage` del navegador de cada visitante.
- **Tipografía:** `Mrs Saint Delafield` (caligráfica) solo para el nombre/logo de la barra superior; `Cormorant Garamond` (serif elegante) para todo el resto. Se eligió así porque una fuente caligráfica es ilegible en párrafos largos.
  - Todos los tamaños de fuente están escalados ~20% más grandes que la primera versión.
- **Layout Nav/Main:** `display: grid` con `grid-template-columns: 25% 75%` — el Nav ocupa un cuarto del ancho y el Main el resto.
- **Selección de sección activa:** el Nav ya no tiene un borde fijo que lo separe del Main. En cambio, el botón de la sección seleccionada tiene un borde derecho grueso (5px) y un padding vertical mayor que los demás botones, por lo que se ve más "expandido" arriba y abajo.
- **Responsive:** debajo de 860px de ancho, el grid pasa a una sola columna y el Nav se convierte en una barra horizontal con scroll arriba del contenido; ahí el indicador de sección activa usa borde inferior en vez de derecho.

## Próximos pasos posibles

- Añadir contenido real.
- Definir la paleta de colores definitiva (por ahora es blanco/negro/gris).
- Sumar imágenes o capturas reales de los proyectos en `assets/images/`.
- Crear tarjetas para cada uno de los proyectos en Trabajos, las tarjetas redigiran a "Blog".
- Crear 2 tarjetas para las redes de cada uno.
- Crear una pagina neuva; "Blog" en la que se hable de cada uno de los proyectos que hicimos.
