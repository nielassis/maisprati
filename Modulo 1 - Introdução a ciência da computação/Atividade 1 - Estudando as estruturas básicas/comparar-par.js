const prompt = require("prompt-sync")();
let num = prompt("Insira o numero que deseja comparar se é par ou impar: ");

function verificaPar(num) {
  return num % 2 == 0 ? "o numero é par" : "o numero é impar"; // estrutura if else simplificada com operadores ternarios
}

console.log(verificaPar(num));
