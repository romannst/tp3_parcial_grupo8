### GRUPO N8

# 🎮 Memoria Visual - Juego de Parejas

## 📋 Descripción General

**Memoria Visual** es un juego web didáctico que pone a prueba tu memoria visual. Se centra en encontrar todas las parejas de cartas iguales en el menor tiempo posible.

Este proyecto fue desarrollado como trabajo práctico grupal, integrando las contribuciones de 6 miembros del equipo.

---

## 🎮 Cómo Jugar

1. **Inicia el Juego**: Hace click en "Jugar ahora" en la pantalla de bienvenida
2. **Voltea Cartas**: Hace click en cualquier carta para revelar su contenido
3. **Encuentra Parejas**: Recordá las ubicaciones y hace clic en dos cartas iguales consecutivas
4. **Gana**: Cuando encuentres todas las 8 parejas, ganaste el juego

---

## 💻 Tecnologías Utilizadas

| Tecnología | Descripción |
|-----------|-------------|
| **HTML** | Estructura semántica del proyecto |
| **CSS** | Diseño responsivo con Flexbox y animaciones 3D |
| **JavaScript** | Lógica del juego |

---

## 🎯 Características Principales

- 📄 **Estructura Semántica**: Código HTML accesible y bien organizado
- 📱 **Interfaz Intuitiva**: Navegación clara con popups informativos
- 🎨 **Diseño Responsivo**: Interfaz adaptable a diferentes dispositivos
- 🌠 **Efectos Visuales**: Animaciones de entrada, aciertos y errores
- ✨ **Animaciones 3D**: Efectos de volteo de cartas con transformaciones 3D
- ⏱️ **Sistema de Puntuación**: Seguimiento de intentos, aciertos y tiempo transcurrido

---

## 🎨 Características Técnicas Implementadas

### Animaciones y Transiciones
- **Entrada del Tablero**: Fade + slide hacia arriba al cargar
- **Aparición Escalonada de Cartas**: Cascada con delays incrementales
- **Flip 3D**: Rotación 180° con `rotateY` y `preserve-3d`
- **Hover**: Elevación y cambio de color suave
- **Pulso en Acierto**: Animación de escala con borde verde
- **Sacudida en Error**: Movimiento horizontal para indicar fallo

### Lógica del Juego
- **Temporizador de Partida**: Cuenta segundos desde el primer click
- **Temporizador de Cartas**: 1 segundo de delay antes de voltear cartas no coincidentes
- **Sistema de Puntuación**: Seguimiento de intentos y aciertos
- **Generación Dinámica**: Cartas creadas desde JS con distribución aleatoria
- **Validación de Parejas**: Comparación por atributo `data-image`

### Interfaz de Usuario
- Navegación intuitiva entre páginas
- Popup de bienvenida con instrucciones
- Popup de victoria con estadísticas finales
- Botón de reinicio para nuevas partidas
- Actualización en tiempo real de estadísticas

---

## 👨‍💻 Descripciones y Comentarios de los Desarrolladores

## Nazareno Negrete — Animaciones

Me encargué de todas las animaciones y transiciones visuales del juego, trabajando únicamente sobre archivos CSS y agregando mínimas clases en JS para activarlas.

**Animaciones implementadas**

- *Entrada del tablero*: al reiniciar o cargar el juego, el tablero aparece con un efecto de fade + slide hacia arriba.
- *Entrada escalonada de cartas*: cada carta aparece con un pequeño delay incremental, generando un efecto de aparición en cascada. El delay se aplica desde JS con style.animationDelay y la animación se define en CSS.
- *Flip 3D*: al hacer clic en una carta se ejecuta una rotación en el eje Y de 180 grados usando rotateY, transform-style: preserve-3d y backface-visibility: hidden para que el dorso y el frente no se superpongan.
- *Hover*: las cartas no volteadas se elevan levemente al pasar el mouse, con un cambio de color de fondo suave.
- *Pulso en acierto*: cuando dos cartas coinciden, la clase matched activa una animación de escala que simula un pulso, acompañada de un borde verde brillante.
- *Sacudida en error*: cuando las cartas no coinciden, la clase shake activa una animación de movimiento horizontal para indicar el fallo visualmente. Para activar y desactivar esta clase coordiné con el JS agregando las líneas necesarias dentro del bloque de comparación de cartas.

### Julian Peralta - Timers y lógica 

Mi tarea fué implementar los timers del juego, tanto el timer que cuenta los segundos transcurridos de juego como el temporizador para que las cartas distintas vuelvan a voltearse tras 1 segundo. Ambas implementaciones se realizaron utilizando un intervalo y un timeout respectivamente.
Además implementé la lógica básica del juego, la cual añade las dos cartas seleccionadas a un arreglo para luego compararlas por su imágen interna. En caso de ser iguales las dos cartas se bloquean y se mantienen boca arriba. De lo contrario las cartas se vuelven a voltear y el juego continúa. Para que esta lógica funcione y los puntajes se actualicen también agregué todas las variables necesarias, además de actualizar el tablero de puntuación.


### Román Strizzi - DOM 

Me ocupé del desarrollo de la estructura HTML de index y reglas, organizando ambas con una base semántica clara y consistente con el estilo general del proyecto.  
En index.html implementé la pantalla principal del juego, incluyendo el encabezado de navegación, la parte central donde está el tablero, las estadísticas de partida y los popups de bienvenida y victoria, de forma que el DOM quedara preparado para interactuar correctamente con la lógica de JavaScript. 
En reglas.html desarrollé la vista de reglas con una estructura informativa clara, manteniendo coherencia visual y de navegación con la página principal para una mejor experiencia del usuario.  
Además, realicé ajustes en rutas de navegación para mejorar la transición entre secciones y corregí detalles vinculados al comportamiento del juego, especialmente en la interacción de cartas y el funcionamiento del temporizador al reiniciar una partida.

### Gianfranco Tarulli - Cards

En esta parte se implementó el sistema de cartas del juego de memoria. Las cartas se generan dinámicamente con JavaScript a partir de un array de imágenes. Este array se duplica y se mezcla para obtener un tablero de 16 cartas (4x4) con distribución aleatoria.
Cada carta se crea como un elemento del DOM y contiene un atributo data-card que guarda la imagen correspondiente, lo cual permitirá compararlas en la lógica del juego. La estructura de cada carta incluye un contenedor principal (card), un contenedor interno (card-inner) y dos caras (card-front y card-back), necesarias para el efecto de volteo.
Además, se agregaron eventos de interacción (click y teclado) para permitir seleccionar las cartas, y un pequeño delay en la animación de aparición para mejorar lo visual.
Esta implementación deja preparada la base para integrar la lógica completa del juego, como la comparación de cartas y el control de partidas.

### Alejo Sanger - Imágenes y scripts

CSS — css/index.css Se eliminó display: none !important del manejo de popups y se creó la clase .visible que aplica display: flex. Sin esa clase el popup está oculto, con ella se muestra.

JS — js/script.js En onCardClick se agregó una condición para detectar cuando aciertos llega a 8. En ese momento se actualizan los valores de intentos, aciertos y tiempo en el popup y luego se muestra agregando la clase visible. También se agregaron event listeners: uno para "Jugar de nuevo" que oculta el popup y reinicia el juego, y otro para "Jugar ahora" que cierra la bienvenida y muestra el tablero. Además se agregaron las imagenes en el tablero.

HTML — index.html Se agregaron al popup de victoria tres párrafos (resultado-intentos, resultado-aciertos, resultado-tiempo) con valores iniciales en cero para luego ser actualizados desde JS.

### Nicolás Castellini - CSS 

En esta parte se desarrollaron los estilos globales del proyecto y la estructura visual general de la aplicación. Se definieron reglas base para normalizar márgenes, tipografías y colores, asegurando coherencia en toda la interfaz.
Se trabajó el layout principal utilizando Flexbox, lo que permitió organizar los elementos de forma flexible y responsiva, adaptándose correctamente a distintos tamaños de pantalla. Además, se diseñaron los componentes de botones, incluyendo estados interactivos como hover y active, cuidando tanto la estética como la usabilidad.
También se estableció una estructura ordenada de carpetas CSS, separando los estilos en módulos (globales, layout y componentes) para facilitar el mantenimiento y la escalabilidad del proyecto.
Esta implementación proporciona una base sólida para el diseño visual, permitiendo integrar de manera consistente el resto de las funcionalidades del sistema.
