const prompt = require("prompt-sync")();

const num = prompt("Insira o numero que deseja repetir: ").toString();
const result = (num + "\n").repeat(10);

console.log(result);
