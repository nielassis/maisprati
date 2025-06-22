const vendas = [
  {
    cliente: "Joaquim",
    total: 150,
  },
  {
    cliente: "Maria",
    total: 50,
  },
  {
    cliente: "Pedro",
    total: 100,
  },
];

const total = vendas.reduce((acc, current) => {
  const cliente = current.cliente;
  const total = current.total;

  if (!acc[cliente]) {
    acc[cliente] = total;
  } else {
    acc[cliente] += total;
  }

  return acc;
}, {});

console.log(total);
