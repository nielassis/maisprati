function fatorial(n) {
  if (n < 0) {
    throw new Error("Número negativo");
  } else if (n === 0) {
    return 1;
  }

  return n * fatorial(n - 1);
}

const result = fatorial(5);

console.log(result);
