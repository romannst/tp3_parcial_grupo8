// Array de las imagenes
const cards = [
    "assets/img/momo.jpg",   //<-- Podes cambiar la imagen, es de prueba (Alejo)
    "assets/img/momo-2.jpg", //<-- Podes cambiar la imagen, es de prueba (Alejo)
    "", //<-- vincular url de imagen (Alejo)
    "", //<-- vincular url de imagen (Alejo)
    "", //<-- vincular url de imagen (Alejo)
    "", //<-- vincular url de imagen (Alejo)
    "", //<-- vincular url de imagen (Alejo)
    ""  //<-- vincular url de imagen (Alejo)
];

//Elementos de HTML
const tablero = document.getElementById("juego");
const botonReiniciar = document.getElementById("reiniciar");


//Mezclar cartas
function mezclarCartas(array) {
    return array.sort(() => Math.random() - 0.5);
}

//Agrega o Saca la clase "flipped" al hacer click
function onCardClick(card) {
    card.classList.toggle("flipped");
}

//Inicia el tablero
function iniciarTablero() {
    //Limpia el tablero
    tablero.innerHTML = "";

    //Duplica las cartas para que haya pares
    const cartasDuplicadas = [...cards, ...cards];

    //Mezcla las cartas al iniciar el tablero
    const cartasMezcladas = mezclarCartas(cartasDuplicadas);

    //Recorre cada carta
    cartasMezcladas.forEach((cards, index) => {
        //Crea el div de la carta (card)
        const contenedor = document.createElement('div');

        //Agrega la clase "card"
        contenedor.classList.add('card');
        
        //Guarda la imagen para despues poder comparar
        contenedor.dataset.image = cards;

        //Delay en animacion
        contenedor.style.animationDelay = `${index * 40}ms`;

        //Estructura interna de la card
        contenedor.innerHTML = `
          <div class="card-inner">
            <div class="card-back" aria-hidden="true">
              <span class="card-back-symbol">?</span>
            </div>
            <div class="card-front" aria-hidden="true">
              <img src="${cards}" class="card-img">
            </div>
          </div>
        `;

        //Al hacer click, ejecutra "onCardClick" y da vuelta la carta
        contenedor.addEventListener('click', () => onCardClick(contenedor));
        
        //Agrega la carta altablero (HTML)
        tablero.appendChild(contenedor);

    });
}

//Se generan nuevas cartas al tocar el boton de reiniciar
botonReiniciar.addEventListener("click", iniciarTablero);

//Ejecuta el juego al cargar la pagina
iniciarTablero();