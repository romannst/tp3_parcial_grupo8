// Array de las imagenes
const cards = [
    "assets/img/necromancer.png",   
    "assets/img/sword.png", 
    "assets/img/card.png",  
    "assets/img/bomb.png",
    "assets/img/spear.png",
    "assets/img/ninja.png",
    "assets/img/chain.png",
    "assets/img/assasin.png"
];

//Variables globales
let segundos = 0; 
let cartasVolteadas = 0; 
let intentos = 0; 
let aciertos = 0; 
let cartasSeleccionadas = []; 
let temporizadorActivo = false; 

//Elementos de HTML
const tablero = document.getElementById("juego");
const botonReiniciar = document.getElementById("reiniciar");
const statAciertos = document.getElementById("stats-aciertos");
const statIntentos = document.getElementById("stats-intentos");
const statTiempo = document.getElementById("stats-tiempo");


//Mezclar cartas
function mezclarCartas(array) {
    return array.sort(() => Math.random() - 0.5);
}

//Funcion principal del juego
function onCardClick(card) {
  if (!temporizadorActivo) {
    temporizador();
  }
  
  if (card.classList.contains("flipped")) return;

  
  if (cartasVolteadas < 2) {
    card.classList.toggle("flipped"); 

    if (!cartasSeleccionadas[0] || cartasSeleccionadas[0] !== card) {
      cartasSeleccionadas.push(card);

      
      if(++cartasVolteadas == 2){
      intentos++; 
      statIntentos.innerHTML = "Intentos :" + intentos;

        
        if(cartasSeleccionadas[0].dataset.image == cartasSeleccionadas[1].dataset.image) {
          cartasSeleccionadas[0].classList.add('matched');
          cartasSeleccionadas[1].classList.add('matched');
          cartasVolteadas = 0;
          cartasSeleccionadas = [];
          aciertos++;
          statAciertos.innerHTML = "Aciertos: " + aciertos + "/8";

          
          if (aciertos == 8) {
            document.getElementById("resultado-intentos").textContent = "Intentos: " + intentos;
            document.getElementById("resultado-aciertos").textContent = "Aciertos: " + aciertos + "/8";
            document.getElementById("resultado-tiempo").textContent = "Tiempo: " + segundos + " segundos";

            document.getElementById("popup-ganaste").classList.add("visible");
          }
        }

       
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
    
    segundos = 0;
    intentos = 0;
    aciertos = 0;
    temporizadorActivo = false;
    cartasVolteadas = 0;
    cartasSeleccionadas = [];

   
    statIntentos.innerHTML = "Intentos : 0";
    statAciertos.innerHTML = "Aciertos : 0/8";
    statTiempo.innerHTML = "Tiempo: 0 S"
    
    
    tablero.innerHTML = "";

   
    const cartasDuplicadas = [...cards, ...cards];

    const cartasMezcladas = mezclarCartas(cartasDuplicadas);

    cartasMezcladas.forEach((cards, index) => {
        const contenedor = document.createElement('div');

        contenedor.classList.add('card');
        
        contenedor.dataset.image = cards;

        contenedor.style.animationDelay = `${index * 40}ms`;

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

        contenedor.addEventListener('click', () => onCardClick(contenedor));
        
        tablero.appendChild(contenedor);
    });
}

botonReiniciar.addEventListener("click", iniciarTablero);

iniciarTablero();

//Timer que cuenta la cantidad de segundos de juego transcurridos
function temporizador() {
  temporizadorActivo = true
  const temp = setInterval(() => {
    if (aciertos == 8 || !temporizadorActivo) {
      segundos = -1;
      clearInterval(temp);
    }
    segundos++;
    statTiempo.innerHTML = "Tiempo: " + segundos + " S";
  }, 1000);
}

document.querySelector("#popup-ganaste .btn-jugar").addEventListener("click", () => {
  document.getElementById("popup-ganaste").classList.remove("visible");
  iniciarTablero();
});

document.getElementById("jugar").addEventListener("click", () => {
  document.getElementById("popup-bienvenida").style.display = "none";
  document.getElementById("body-juego").classList.remove("ocultar");
});