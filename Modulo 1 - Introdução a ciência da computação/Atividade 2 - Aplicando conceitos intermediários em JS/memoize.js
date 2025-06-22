function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache.hasOwnProperty(key)) {
      console.log(`Usando cache para: ${key}`);
      return cache[key];
    }

    console.log(`Calculando resultado para: ${key}`);
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

function fatorial(n) {
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

const memoizedFatorial = memoize(fatorial);

console.log(memoizedFatorial(5));
console.log(memoizedFatorial(5));
console.log(memoizedFatorial(6));
