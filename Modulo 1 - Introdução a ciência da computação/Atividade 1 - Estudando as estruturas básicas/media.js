const prompt = require("prompt-sync")();

let soma = 0;
let contador = 0;
let numero;

do {
  numero = parseFloat(prompt("Digite um número decimal (0 para encerrar):"));

  if (numero !== 0) {
    soma += numero;
    contador++;
  }
} while (numero !== 0);

if (contador > 0) {
  let media = soma / contador;
  console.log("A média aritmética é: " + media);
} else {
  console.log("Nenhum número foi inserido para cálculo da média.");
}
