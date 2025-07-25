class Acount {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      throw new Error("Deposito precisa ser maior que 0");
    }

    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= 0) {
      throw new Error("Saque precisa ser maior que 0");
    }

    if (amount > this.balance) {
      throw new Error("Saldo insuficiente");
    }

    this.balance -= amount;
  }
}

module.exports = Acount;
