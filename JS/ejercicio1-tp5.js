const btnEnviar = document.getElementById('enviar'); 
const form = document.querySelector('form');

const compararNumero = (e) => {
  e.preventDefault();

  let numero = Math.floor(Math.random() * 11);
  const inputNumber = document.getElementById('inputNumber');
  let numeroIngresado = inputNumber.value;

  if (isNaN(numeroIngresado)) {
    alert(`Por favor, asegúrate de ingresar un número`);
  }else if (numeroIngresado === numero) {
    alert(`¡Bien por ti! Adivinaste el número. ¡Felicitaciones!`);
  } else if (numeroIngresado < numero) {
    alert(`El número que ingresaste es menor al número que tenías que adivinar`);
  } else {
    alert(`El número que ingresaste es mayor al número que tenías que adivinar`);
  }
  
  form.reset();
}

form.addEventListener('submit', compararNumero);