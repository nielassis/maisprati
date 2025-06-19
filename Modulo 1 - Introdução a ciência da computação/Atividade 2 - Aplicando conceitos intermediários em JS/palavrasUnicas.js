const prompt = require("prompt-sync")();
const response = String(prompt("Digite algo XD : "));
const words = [];

const result = [...new Set(response.split(" "))];

words.push(...result);

console.log(`Palavras Digitadas: ${response}`);
console.log(`Duplicatas Removidas: ${words}`);
