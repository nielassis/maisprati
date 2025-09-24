package main.produto;

import main.exceptions.DescontoInvalidoException;

import java.math.BigDecimal;
import java.math.RoundingMode;

public class Produto {
    private String name;
    private BigDecimal price;
    private Integer quantityInStock;

    public Produto(String name, BigDecimal price, Integer quantityInStock) {
        if (name == null || name.isBlank()) throw new IllegalArgumentException("Nome inválido");
        if (price == null || price.compareTo(BigDecimal.ZERO) < 0) throw new IllegalArgumentException("Preço inválido");
        if (quantityInStock == null || quantityInStock < 0) throw new IllegalArgumentException("Quantidade inválida");

        setName(name);
        setPrice(price);
        setQuantityInStock(quantityInStock);
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setQuantityInStock(Integer quantityInStock) {
        this.quantityInStock = quantityInStock;
    }

    public Integer getQuantityInStock() {
        return quantityInStock;
    }

    public void aplicarDesconto(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 50) {
            throw new DescontoInvalidoException("Desconto inválido. Deve ser entre 0 e 50%");
        }

        BigDecimal fator = BigDecimal.valueOf(1 - (porcentagem / 100.0));
        this.price = this.price.multiply(fator).setScale(2, RoundingMode.HALF_UP);
    }
}
