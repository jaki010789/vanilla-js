function suma(numero1, numero2) {
  return numero1 + numero2;
}

//Resta

function resta(numero1, numero2) {
  return numero1 - numero2;
}

// //multiplicacion

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

//dividir

function dividir(numero1, numero2) {
  return numero1 / numero2;
}

//Numeros Pares
function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}

//Divisible entre 5

function divisible5(numbers) {
  return numbers.filter((number) => number % 5 === 0);
}

export { suma, resta, multiplicar, dividir, filterEvenNumbers, divisible5 };
