const prompt = require("prompt-sync")();
const idade = prompt("Qual sua idade?: ");

if (idade < 0 || isNaN(idade)) {
  console.log("Você digitou uma idade inválida.");
} else if (idade <= 12) {
  console.log(
    "Você é uma criança, aproveite a sua infância e construa memórias! :D"
  );
} else if (idade <= 17) {
  console.log("Você é um adolescente!");
} else if (idade <= 59) {
  console.log("Você é um adulto! CHEIO DE CONTAS PARA PAGAR HAHAHA! XD");
} else {
  console.log(
    "Você é um idoso! Quais experiencias você deveria contar aos mais jovens?"
  );
}
