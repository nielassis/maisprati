package main.frete;
import java.math.BigDecimal;

public class FretePac implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("15.00");
    }
}