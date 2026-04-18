# TODO — TP3 Grupo 8

## Pendientes

- [x] **CSS (Nico)** — Corregir visibilidad de los popups
  - Sacar `display: none !important` de `.bienvenida` y `#popup-ganaste` y reemplazar por `display: flex`
  - Agregar la clase faltante: `.ocultar { display: none; }`

- [x] **JS (Roman / Julián)** — Conectar el botón "Jugar de nuevo"
  - Agregar `id` en el HTML: `<button id="jugar-de-nuevo" class="btn-jugar">Jugar de nuevo</button>`
  - Agregar listener en el JS: `document.getElementById("jugar-de-nuevo").addEventListener("click", iniciarTablero);`

- [x] **JS (Roman / Julián)** — Corregir comparación de cartas
  - Cambiar `cartasSeleccionadas[0].innerHTML == cartasSeleccionadas[1].innerHTML`
  - Por `cartasSeleccionadas[0].dataset.image == cartasSeleccionadas[1].dataset.image`