import { suma } from "../src/calculadora.js";

describe("suma", () => {
  test("suma 1 + 2 es 3", () => {
    expect(suma(1, 2)).toBe(3);
  });
});

//Resta

import { resta } from "../src/calculadora.js";

describe("resta", () => {
  test("resta 7 - 0 es 7", () => {
    expect(resta(7, 0)).toBe(7);
  });
});

// //multiplicar

import { multiplicar } from "../src/calculadora.js";

describe("multiplicar", () => {
  test("multiplicar 5 * 5 es 25", () => {
    expect(multiplicar(5, 5)).toBe(25);
  });
});

//Dividir

import { dividir } from "../src/calculadora.js";

describe("dividir", () => {
  test("dividir 5 / 5 es 1", () => {
    expect(dividir(5, 5)).toBe(1);
  });
});

//Numeros Pares

import { filterEvenNumbers } from "../src/calculadora.js";

describe("filterEvenNumbers", () => {
  test("filterEvenNumbers ([1, 2, 3, 4, 5, 6]) es ([2, 4, 6])", () => {
    expect(filterEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});

//Divisible entre 5

import { divisible5 } from "../src/calculadora.js";

describe("divisible5", () => {
  test("divisible5 ([1, 2, 3, 4, 5, 6]) es divisible([5])", () => {
    expect(divisible5([1, 2, 3, 4, 5, 6])).toEqual([5]);
  });
});
