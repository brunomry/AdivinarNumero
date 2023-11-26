const btnEnviar = document.getElementById('enviar'); 
const form = document.querySelector('form');

const obtenerNumero = () => document.getElementById('inputNumber').value;

const validarNumero = numeroIngresado => !isNaN(numeroIngresado) && (numeroIngresado >= 0 || numeroIngresado <= 10)

const generarNumero = () => Math.floor(Math.random() * 11);

let numeroRandom = generarNumero();
let numeroIngresado;

const esGanador = (numeroIngresado, numeroRandom, intentosUsuario) => {
  if(numeroIngresado == numeroRandom){
    return true;
  }else if(numeroIngresado < numeroRandom && intentosUsuario < 3){
    alert(`Estuviste cerca! El número ingresado es menor que el número a adivinar`);
  }else if(intentosUsuario < 3){
    alert(`Estuviste cerca! El número ingresado es mayor que el número a adivinar`);
  }
  return false;
}

let intentosUsuario = 0;
const intentosTotales = 3;

const adivinarNumero = (e) => {
  e.preventDefault();

  numeroIngresado = obtenerNumero(); 
  intentosUsuario++;

  if(!validarNumero(numeroIngresado)){
    alert(`ingresa un numero válido`);
    form.reset();
    return;
  }

  if(esGanador(numeroIngresado, numeroRandom, intentosUsuario)) {
    alert(`Bien por ti, ganaste!! 🥳 Número Ganador: ${numeroIngresado}`);
    numeroRandom = generarNumero();
    intentosUsuario = 0;
  }

  if(intentosUsuario === intentosTotales){
    alert(`Casi lo logras! Se te acabaron los intentos. Vuelve a jugar`);
    numeroRandom = generarNumero();
    intentosUsuario = 0;
  }

  form.reset();
}

form.addEventListener('submit', adivinarNumero);