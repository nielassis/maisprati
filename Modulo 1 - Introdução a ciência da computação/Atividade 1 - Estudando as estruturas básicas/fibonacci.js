const randomFi = (n) => {
  const fibonacci = [0, 1];

  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci;
};

const sequencia = randomFi(10);
console.log(sequencia);
