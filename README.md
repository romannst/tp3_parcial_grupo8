## GRUPO N8

## Nazareno — Animaciones

Me encargué de todas las animaciones y transiciones visuales del juego, trabajando únicamente sobre archivos CSS y agregando mínimas clases en JS para activarlas.

### Animaciones implementadas

- *Entrada del tablero*: al reiniciar o cargar el juego, el tablero aparece con un efecto de fade + slide hacia arriba.
- *Entrada escalonada de cartas*: cada carta aparece con un pequeño delay incremental, generando un efecto de aparición en cascada. El delay se aplica desde JS con style.animationDelay y la animación se define en CSS.
- *Flip 3D*: al hacer clic en una carta se ejecuta una rotación en el eje Y de 180 grados usando rotateY, transform-style: preserve-3d y backface-visibility: hidden para que el dorso y el frente no se superpongan.
- *Hover*: las cartas no volteadas se elevan levemente al pasar el mouse, con un cambio de color de fondo suave.
- *Pulso en acierto*: cuando dos cartas coinciden, la clase matched activa una animación de escala que simula un pulso, acompañada de un borde verde brillante.
- *Sacudida en error*: cuando las cartas no coinciden, la clase shake activa una animación de movimiento horizontal para indicar el fallo visualmente. Para activar y desactivar esta clase coordiné con el JS agregando las líneas necesarias dentro del bloque de comparación de cartas.

## Julian Peralta - Timers y lógica 

Mi tarea fué implementar los timers del juego, tanto el timer que cuenta los segundos transcurridos de juego como el temporizador para que las cartas distintas vuelvan a voltearse tras 1 segundo. Ambas implementaciones se realizaron utilizando un intervalo y un timeout respectivamente.
Además implementé la lógica básica del juego, la cual añade las dos cartas seleccionadas a un arreglo para luego compararlas por su imágen interna. En caso de ser iguales las dos cartas se bloquean y se mantienen boca arriba. De lo contrario las cartas se vuelven a voltear y el juego continúa. Para que esta lógica funcione y los puntajes se actualicen también agregué todas las variables necesarias, además de actualizar el tablero de puntuación.


## Roman - DOM 

Manipulación dinámica del tablero, generación de tarjetas con JavaScript y actualización de estadísticas.

## Gianfranco Tarulli - Cards

En esta parte se implementó el sistema de cartas del juego de memoria. Las cartas se generan dinámicamente con JavaScript a partir de un array de imágenes. Este array se duplica y se mezcla para obtener un tablero de 16 cartas (4x4) con distribución aleatoria.
Cada carta se crea como un elemento del DOM y contiene un atributo data-card que guarda la imagen correspondiente, lo cual permitirá compararlas en la lógica del juego. La estructura de cada carta incluye un contenedor principal (card), un contenedor interno (card-inner) y dos caras (card-front y card-back), necesarias para el efecto de volteo.
Además, se agregaron eventos de interacción (click y teclado) para permitir seleccionar las cartas, y un pequeño delay en la animación de aparición para mejorar lo visual.
Esta implementación deja preparada la base para integrar la lógica completa del juego, como la comparación de cartas y el control de partidas.

## Sanger - Imagenes y scripts

CSS — css/index.css Se eliminó display: none !important del manejo de popups y se creó la clase .visible que aplica display: flex. Sin esa clase el popup está oculto, con ella se muestra.

JS — js/script.js En onCardClick se agregó una condición para detectar cuando aciertos llega a 8. En ese momento se actualizan los valores de intentos, aciertos y tiempo en el popup y luego se muestra agregando la clase visible. También se agregaron event listeners: uno para "Jugar de nuevo" que oculta el popup y reinicia el juego, y otro para "Jugar ahora" que cierra la bienvenida y muestra el tablero. Además se agregaron las imagenes en el tablero.

HTML — index.html Se agregaron al popup de victoria tres párrafos (resultado-intentos, resultado-aciertos, resultado-tiempo) con valores iniciales en cero para luego ser actualizados desde JS.

## Nico - CSS 

En esta parte se desarrollaron los estilos globales del proyecto y la estructura visual general de la aplicación. Se definieron reglas base para normalizar márgenes, tipografías y colores, asegurando coherencia en toda la interfaz.
Se trabajó el layout principal utilizando Flexbox, lo que permitió organizar los elementos de forma flexible y responsiva, adaptándose correctamente a distintos tamaños de pantalla. Además, se diseñaron los componentes de botones, incluyendo estados interactivos como hover y active, cuidando tanto la estética como la usabilidad.
También se estableció una estructura ordenada de carpetas CSS, separando los estilos en módulos (globales, layout y componentes) para facilitar el mantenimiento y la escalabilidad del proyecto.
Esta implementación proporciona una base sólida para el diseño visual, permitiendo integrar de manera consistente el resto de las funcionalidades del sistema.