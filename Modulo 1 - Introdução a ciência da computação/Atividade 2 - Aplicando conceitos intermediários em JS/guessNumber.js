const prompt = require("prompt-sync")();
console.log("Jogo do Número Secreto");
console.log("=".repeat(30));

const randomNumber = Math.floor(Math.random() * 100) + 1;

while (true) {
  const guess = Number(prompt("Faça seu chute: "));

  if (guess === randomNumber) {
    console.log("🎉 Parabéns! Você acertou o número secreto!");
    break;
  } else if (guess > randomNumber) {
    console.log(
      "Número muito alto XD \nO número secreto é menor. \nTente novamente."
    );
  } else if (guess < randomNumber) {
    console.log(
      "Número muito baixo XD \nO número secreto é maior. \nTente novamente."
    );
  } else {
    console.log("Por favor, digite um número válido.");
  }
}
