const prompt = require("prompt-sync")();
const peso = parseFloat(prompt("Insira seu peso em kg: "));
const alturaCm = parseFloat(prompt("Insira a sua altura em centímetros: "));
const altura = alturaCm / 100;

const imc = peso / altura ** 2;

console.log(`Seu IMC é: ${imc.toFixed(2)}`);

if (imc <= 0) {
  console.log("Operação inválida.");
} else if (imc < 18.5) {
  console.log("Baixo peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Sobrepeso");
} else if (imc < 35) {
  console.log("Obesidade Grau I");
} else if (imc < 40) {
  console.log("Obesidade Grau II");
} else {
  console.log("Obesidade Grau III");
}
