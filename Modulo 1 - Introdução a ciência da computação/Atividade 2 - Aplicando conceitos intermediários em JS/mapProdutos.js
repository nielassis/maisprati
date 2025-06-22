const produtos = [
  {
    nome: "Notebook",
    preco: 2499,
  },
  {
    nome: "iPad Pro",
    preco: 4199,
  },
  {
    nome: "Copo de vidro",
    preco: 12.49,
  },
  {
    nome: "Copo de plastico",
    preco: 18.99,
  },
];

function sortProtudos(produtos) {
  return produtos.sort((a, b) => a.preco - b.preco);
}

console.log(sortProtudos(produtos));
