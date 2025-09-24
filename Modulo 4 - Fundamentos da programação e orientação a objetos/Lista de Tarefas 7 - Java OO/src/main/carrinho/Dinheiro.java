package main.carrinho;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Objects;

public final class Dinheiro {
    private final BigDecimal valor;
    private final Moeda moeda;

    public Dinheiro(BigDecimal valor, Moeda moeda) {
        if (valor == null || valor.compareTo(BigDecimal.ZERO) < 0) {
            throw new IllegalArgumentException("Valor não pode ser nulo ou negativo");
        }
        if (moeda == null) {
            throw new IllegalArgumentException("Moeda não pode ser nula");
        }

        this.valor = valor.setScale(2, RoundingMode.HALF_EVEN); // arredondamento bancário
        this.moeda = moeda;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public Moeda getMoeda() {
        return moeda;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Dinheiro)) return false;
        Dinheiro dinheiro = (Dinheiro) o;
        return valor.equals(dinheiro.valor) && moeda == dinheiro.moeda;
    }

    @Override
    public int hashCode() {
        return Objects.hash(valor, moeda);
    }

    public Dinheiro aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 30) {
            throw new IllegalArgumentException("Desconto máximo permitido: 30%");
        }
        BigDecimal fator = BigDecimal.valueOf(1 - (porcentagem / 100.0));
        BigDecimal novoValor = valor.multiply(fator).setScale(2, RoundingMode.HALF_EVEN);
        return new Dinheiro(novoValor, moeda);
    }
}
