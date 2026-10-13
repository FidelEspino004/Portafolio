# Portafolio — Fidel & Serafín

Portafolio de desarrollador armado como una SPA de una sola página, con 4 secciones navegables sin recargar: **Presentación, Trabajos, Nosotros y Contacto**.

## Estructura del proyecto dividido

```
portafolio/
├── index.html
├── html/
│   └── proyectos.html
├── css/
│   ├── style.css          → estilos generales: paleta de colores, variables, fuentes, base y componentes
│   ├── index.css          → estructura del SPA: barra superior, grid Nav/Main y responsive
│   └── proyectos.css      → estilos propios de la página de proyectos
├── js/
│   ├── nav.js               → cambio de sección de la SPA
│   ├── contact.js           → botón de copiar el correo y formulario de contacto
│   └── main.js               → punto de entrada, importa los otros 2 módulos
├── assets/
│   ├── icons/
│   └── images/
└── README.md               → este archivo
```

## Decisiones de diseño vigentes

- **Paleta:** definida en `css/style.css` (`--rojo`, `--rojo-variante`, `--azul`, `--cian`, `--mostaza`, `--crema`, `--negro`). Cada elemento usa directamente el color que quiera, sin variables intermedias: para cambiarlo se edita su propio bloque.
- **Un solo tema:** fondo negro y texto crema. No hay botón para cambiar de tema.
- **Tipografía:** `Mrs Saint Delafield` (caligráfica) solo para el nombre/logo de la barra superior; `Cormorant Garamond` (serif elegante) para todo el resto. Se eligió así porque una fuente caligráfica es ilegible en párrafos largos.
  - Todos los tamaños de fuente están escalados ~20% más grandes que la primera versión.
- **Layout Nav/Main:** `display: grid` con `grid-template-columns: 25% 75%` — el Nav ocupa un cuarto del ancho y el Main el resto.
- **Selección de sección activa:** el Nav ya no tiene un borde fijo que lo separe del Main. En cambio, el botón de la sección seleccionada tiene un borde derecho grueso (5px) y un padding vertical mayor que los demás botones, por lo que se ve más "expandido" arriba y abajo.
- **Responsive:** debajo de 860px de ancho, el grid pasa a una sola columna y el Nav se convierte en una barra horizontal con scroll arriba del contenido; ahí el indicador de sección activa usa borde inferior en vez de derecho.

## Próximos pasos posibles

- Añadir contenido real.
- Sumar imágenes o capturas reales de los proyectos en `assets/images/`.
- Crear tarjetas para cada uno de los proyectos en Trabajos, las tarjetas redigiran a "Blog".
- Crear 2 tarjetas para las redes de cada uno.
- Crear una pagina neuva; "Blog" en la que se hable de cada uno de los proyectos que hicimos.
