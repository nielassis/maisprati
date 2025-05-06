const prompt = require("prompt-sync")();
const nota = prompt("Insira a nota da sua prova: ");

if (nota >= 6) {
  console.log("Aprovado");
} else if (nota > 3) {
  console.log("Recuperação");
} else if (nota >= 0) {
  console.log("Reprovado");
} else {
  console.log("Nota inválida");
}
