const prompt = require("prompt-sync")();
const num = parseInt(prompt("Insira um numero: "));

const fat = (x) => {
  for (let i = x - 1; i >= 1; i--) {
    x = x * i;
  }

  return x;
};

console.log(fat(num));
