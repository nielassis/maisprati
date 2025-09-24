package main.rh;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Desenvolvedor extends Funcionario {
    public Desenvolvedor(String name, BigDecimal salary) {
     super(name, salary);
    }

    @Override
    public BigDecimal calcularBonus(){
        BigDecimal bonus = salary.multiply(BigDecimal.valueOf(0.10));
        return bonus.setScale(2, RoundingMode.HALF_UP);
    }
}
