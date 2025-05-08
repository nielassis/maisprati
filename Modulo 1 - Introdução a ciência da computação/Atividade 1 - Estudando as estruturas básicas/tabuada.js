const prompt = require("prompt-sync")();

const num = parseInt(prompt("Insira o numero que deseja ver a tabuada: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}
