package main.frete;

import main.exceptions.CepInvalidoException;

import java.math.BigDecimal;

public class Pedido {
    private String cepDestino;
    private BigDecimal valorTotal;
    private CalculadoraFrete estrategiaFrete;

    public Pedido(String cepDestino, BigDecimal valorTotal, CalculadoraFrete estrategiaFrete) {
        if (cepDestino == null || cepDestino.isBlank() || cepDestino.length() != 8) {
            throw new CepInvalidoException("CEP inválido: " + cepDestino);
        }
        this.cepDestino = cepDestino;
        this.valorTotal = valorTotal;
        this.estrategiaFrete = estrategiaFrete;
    }

    public BigDecimal calcularFrete() {
        return estrategiaFrete.calcular(this);
    }

    public String getCepDestino() {
        return cepDestino;
    }

    public BigDecimal getValorTotal() {
        return valorTotal;
    }

    public void setEstrategiaFrete(CalculadoraFrete estrategiaFrete) {
        this.estrategiaFrete = estrategiaFrete;
    }
}
