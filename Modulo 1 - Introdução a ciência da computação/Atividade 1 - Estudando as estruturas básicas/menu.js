const prompt = require("prompt-sync")();

while (true) {
  console.log("\nMenu:");
  console.log("(1) para ver uma frase motivadora");
  console.log("(2) para ver uma frase desmotivadora");
  console.log("(3) para encerrar.");
  console.log("================================");

  const menu = parseInt(prompt("Escolha uma opção: "));

  switch (menu) {
    case 1:
      console.log("A persistência leva ao sucesso.");
      break;
    case 2:
      console.log("Se está difícil hoje, lembre-se: sempre dá pra piorar.");
      break;
    case 3:
      console.log("Até logo!");
      process.exit();
    default:
      console.log("Opção inválida, tente novamente.");
  }
}
