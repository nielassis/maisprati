package main.rh;

import java.math.BigDecimal;

public abstract class Funcionario {
    protected String name;
    protected BigDecimal salary;

    public Funcionario(String name, BigDecimal salary) {
        if (name == null || name.isEmpty()) throw new IllegalArgumentException("Nome não pode ser um campo nulo ou vazio");
        if(salary == null || salary.compareTo(BigDecimal.ZERO) < 0) throw new IllegalArgumentException("Salário não pode ser um campo nulo ou menor que 0");

        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getSalario() {
        return salary;
    }

    public abstract BigDecimal calcularBonus();
}
