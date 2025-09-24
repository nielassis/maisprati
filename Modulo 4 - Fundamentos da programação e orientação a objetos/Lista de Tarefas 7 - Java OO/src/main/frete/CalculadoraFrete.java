package main.frete;

import java.math.BigDecimal;

@FunctionalInterface
public interface CalculadoraFrete {
    BigDecimal calcular(Pedido pedido);
}
