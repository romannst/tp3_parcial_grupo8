// Array de las imagenes
const cards = [
    "assets/img/anillo-de-bodas.png",   
    "assets/img/bota.png", 
    "assets/img/cetro.png", 
    "assets/img/cristal.png", 
    "assets/img/espada-larga.png", 
    "assets/img/libro-de-hechizos.png", 
    "assets/img/monstruo.png", 
    "assets/img/sombrero-de-bruja.png"  
];

//Variables globales
let segundos = 0; //Segundos transcurridos desde el inicio del juego
let cartasVolteadas = 0; //Lleva la cuenta de la cantidad de cartas volteadas
let intentos = 0; //Cantidad de intentos 
let aciertos = 0; //Cantidad de aciertos
let cartasSeleccionadas = []; //Arreglo donde se almacenan las cartas seleccionadas para compararlas
let temporizadorActivo = false; //Condicional que determina si el temporizador esta activo o no

//Elementos de HTML
const tablero = document.getElementById("juego");
const botonReiniciar = document.getElementById("reiniciar");
const stat_aciertos = document.getElementById("stats-aciertos");
const stat_intentos = document.getElementById("stats-intentos");
const stat_tiempo = document.getElementById("stats-tiempo");


//Mezclar cartas
function mezclarCartas(array) {
    return array.sort(() => Math.random() - 0.5);
}

//Funcion principal del juego
function onCardClick(card) {
  //Se inicia el temporizador cuando se voltea la primera carta
  if (!temporizadorActivo) {
    temporizador();
  }

  //Las proximas 2 cartas volteadas se agregan a un arreglo para luego compararlas
  if (cartasVolteadas < 2) {
    card.classList.toggle("flipped"); 

    if (!cartasSeleccionadas[0] || cartasSeleccionadas[0] !== card) {
      cartasSeleccionadas.push(card);

      //Cuando se voltean las dos cartas se compara su imagen
      if(++cartasVolteadas == 2){
      intentos++; //Se incrementan los intentos 
      stat_intentos.innerHTML = "Intentos :" + intentos;

        //Si las cartas son iguales se mantienen boca arriba y se actualizan los aciertos
        if(cartasSeleccionadas[0].innerHTML == cartasSeleccionadas[1].innerHTML) {
          cartasSeleccionadas[0].classList.add('matched');
          cartasSeleccionadas[1].classList.add('matched');
          cartasVolteadas = 0;
          cartasSeleccionadas = [];
          aciertos++;
          stat_aciertos.innerHTML = "Aciertos: " + aciertos + "/8";
        }

        //Si las cartas son distintas se vuelven a voltear tras 1 segundo
        else {
          cartasSeleccionadas[0].classList.add('shake');
          cartasSeleccionadas[1].classList.add('shake');

          setTimeout (() => {
            cartasSeleccionadas[0].classList.remove('shake');
            cartasSeleccionadas[1].classList.remove('shake');
            cartasSeleccionadas[0].classList.toggle("flipped");
            cartasSeleccionadas[1].classList.toggle("flipped");
            cartasVolteadas = 0;
            cartasSeleccionadas = [];
          }, 1000);
        }
      }
    }
  }
}

//Inicia el tablero
function iniciarTablero() { 
    //Reseteo de las variables globales
    segundos = 0;
    intentos = 0;
    aciertos = 0;
    temporizadorActivo = false;
    cartasVolteadas = 0;
    cartasSeleccionadas = [];

    //Reseteo del display
    stat_intentos.innerHTML = "Intentos : 0";
    stat_aciertos.innerHTML = "Aciertos : 0/8";
    stat_tiempo.innerHTML = "Tiempo: 0 S"
    
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

//Timer que cuenta la cantidad de segundos de juego transcurridos
function temporizador() {
  //Se establece un intervalo que actualiza el temporizador cada 1000ms
  temporizadorActivo = true
  const temp = setInterval(() => {
    segundos++;
    stat_tiempo.innerHTML = "Tiempo: " + segundos + " S";
    //Cuando la partida termina el temporizador se detiene y se reinicia
    if (aciertos == 8 || !temporizadorActivo) {
      clearInterval(temp);
      segundos = 0;
    }
  }, 1000);
}
