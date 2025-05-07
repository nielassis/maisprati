const prompt = require("prompt-sync")();
const A = parseInt(prompt("Insira o Lado A: "));
const B = parseInt(prompt("Insira o Lado B: "));
const C = parseInt(prompt("Insira o Lado C: "));

if (!(A < B + C && B < A + C && C < A + B)) {
  console.log("Triangulo Invalido");
} else {
  console.log("Triangulo Valido");
  if (A == B && B == C) {
    console.log("Triangulo Equilátero");
  } else if (A == B || A == C || B == C) {
    console.log("Triangulo Isósceles");
  } else {
    console.log("Triangulo Escaleno");
  }
}
