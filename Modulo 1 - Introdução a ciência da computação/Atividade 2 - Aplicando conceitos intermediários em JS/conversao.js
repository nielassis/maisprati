function paresParaObjeto(pares) {
  return pares.reduce((acc, [chave, valor]) => {
    acc[chave] = valor;
    return acc;
  }, {});
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [
  ["nome", "Ana"],
  ["idade", 25],
];
const obj = paresParaObjeto(pares);
console.log("Objeto:", obj);

const paresNovos = objetoParaPares(obj);
console.log("Array de pares:", paresNovos);
