package test;

import main.*;
import main.exceptions.CepInvalidoException;
import main.frete.*;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

public class PedidoFreteTest {

    @Test
    public void deveCalcularFreteSedex() {
        Pedido pedido = new Pedido("12345678", new BigDecimal("100"), new FreteSedex());
        assertEquals(new BigDecimal("30.00"), pedido.calcularFrete());
    }

    @Test
    public void deveCalcularFretePac() {
        Pedido pedido = new Pedido("12345678", new BigDecimal("100"), new FretePac());
        assertEquals(new BigDecimal("15.00"), pedido.calcularFrete());
    }

    @Test
    public void deveCalcularRetiradaNaLoja() {
        Pedido pedido = new Pedido("12345678", new BigDecimal("100"), new RetiradaNaLoja());
        assertEquals(BigDecimal.ZERO, pedido.calcularFrete());
    }

    @Test
    public void deveCalcularFretePromocionalComLambda() {
        CalculadoraFrete fretePromocional = pedido ->
                pedido.getValorTotal().compareTo(new BigDecimal("200")) > 0
                        ? BigDecimal.ZERO
                        : new BigDecimal("20.00");

        Pedido pedido1 = new Pedido("12345678", new BigDecimal("250"), fretePromocional);
        Pedido pedido2 = new Pedido("12345678", new BigDecimal("150"), fretePromocional);

        assertEquals(BigDecimal.ZERO, pedido1.calcularFrete());
        assertEquals(new BigDecimal("20.00"), pedido2.calcularFrete());
    }

    @Test
    public void deveLancarExcecaoParaCepInvalido() {
        assertThrows(CepInvalidoException.class, () ->
                new Pedido("123", new BigDecimal("100"), new FreteSedex()));
    }

    @Test
    public void deveTrocarEstrategiaEmTempoDeExecucao() {
        Pedido pedido = new Pedido("12345678", new BigDecimal("100"), new FretePac());
        assertEquals(new BigDecimal("15.00"), pedido.calcularFrete());

        pedido.setEstrategiaFrete(new FreteSedex());
        assertEquals(new BigDecimal("30.00"), pedido.calcularFrete());

        pedido.setEstrategiaFrete(new RetiradaNaLoja());
        assertEquals(BigDecimal.ZERO, pedido.calcularFrete());
    }
}
