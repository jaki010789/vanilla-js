// Inserte el código aquí
import { calculadora } from "./calculadora.js";

function calcular(operacion, n1, n2) {
  let respuesta;
  if (operacion == "+") {
    respuesta = calculadora.sumar(n1, n2);
  } else if (operacion == "-") {
    respuesta = calculadora.restar(n1, n2);
  } else if (operacion == "*") {
    respuesta = calculadora.multiplicar(n1, n2);
  } else if (operacion == "/") {
    respuesta = calculadora.dividir(n1, n2);
  }

  console.log(respuesta);

  return respuesta;
}

calcular("-", 5, 2);
