const prompt = require("prompt-sync")();

const num1 = parseInt(prompt("Insira o primeiro valor: "));
const num2 = parseInt(prompt("Insira o segundo valor: "));

if (num1 > num2) {
  console.log(`O maior valor é: ${num1} \n O menor valor é: ${num2}`);
} else if (num2 > num1) {
  console.log(`O maior valor é: ${num2} \n O menor valor é: ${num1}`);
} else {
  console.log("Valores iguais");
}
