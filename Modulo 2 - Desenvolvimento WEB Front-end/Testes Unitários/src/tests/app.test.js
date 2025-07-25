const Acount = require("../app");

describe("teste de conta bancária", () => {
  let acount;

  beforeEach(() => {
    acount = new Acount();
  });

  test("Saldo inicial deve ser 0", () => {
    expect(acount.getBalance()).toBe(0);
  });

  test("Saldo deve ser 100", () => {
    acount.deposit(100);
    expect(acount.getBalance()).toBe(100);
  });

  test("Saldo deve ser 50", () => {
    acount.deposit(100);
    acount.withdraw(50);
    expect(acount.getBalance()).toBe(50);
  });

  test("Deve lançar um erro ao tentar depositar valor inválido", () => {
    expect(() => acount.deposit(0)).toThrow("Deposito precisa ser maior que 0");
    expect(() => acount.deposit(-50)).toThrow(
      "Deposito precisa ser maior que 0"
    );
  });

  test("Deve lançar um erro ao tentar retirar um valor insuficiente", () => {
    acount.deposit(50);

    expect(() => acount.withdraw(100)).toThrow("Saldo insuficiente");
    expect(() => acount.withdraw(-1)).toThrow("Saque precisa ser maior que 0");
  });
});
