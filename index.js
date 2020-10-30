const boxes = document.querySelectorAll(".boxes");
const spinner = document.querySelector("#spinner");

const items = ["🍭", "⛄️", "🦄"];

const obtenerNumeroAlAzar = () => {
  return Math.floor(Math.random() * 3);
};

const obtenerItemAlAzar = (items) => {
  return items[obtenerNumeroAlAzar()];
};

spinner.onclick = () => {
  const arrayAlAzar = [];

  for (let i = 0; i < 3; i++) {
    arrayAlAzar.push(obtenerItemAlAzar(items));
  }

  for (let i = 0; i < 3; i++) {
    boxes[i].textContent = arrayAlAzar[i];
  }
};

const chequearIgualdad = ("🦄", "🦄", "🦄") => {
    if ()

}

// Tarea

// Hacer una funcion chequearIgualdad que reciba un array
// y retorne "true" si todos los elementos del array son iguales entre si
// o "false" si no lo son

// console.log(chequearIgualdad([1, 1, 1])) // true
// console.log(chequearIgualdad(["hola", "hola", "hola"])) // true
// console.log(chequearIgualdad(["🍭", "⛄️", "🦄")]) // false
// console.log(chequearIgualdad(["🦄", "🦄", "🦄"])) // true

// Una vez terminada, usarla para mostrar un mensaje de felicitaciones al usuario si gana en el jackpot (chequeando el array arrayAlAzar)
