package main.frete;

import java.math.BigDecimal;

public class FreteSedex implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("30.00");
    }
}
