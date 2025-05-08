const prompt = require("prompt-sync")();

const numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  const numero = parseInt(prompt(`Insira o ${i + 1}° numero: `));
  numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

console.log("A soma total é: ", soma);
