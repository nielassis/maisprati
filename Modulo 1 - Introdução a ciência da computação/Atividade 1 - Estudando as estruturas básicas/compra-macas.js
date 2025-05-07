const prompt = require("prompt-sync")();
let macas = 0.3;

const qnt = parseInt(prompt("Quantidade de maças a serem compradas: "));

if (qnt >= 12) {
  macas = 0.25;
  console.log("Você obteve o desconto de 0.05 centavos em cada maçã");
} else {
  console.log("Você NÃO obteve desconto");
}

const result = (qnt * macas).toFixed(2);
console.log(`O valor total da compra é de: R$ ${result}`);
