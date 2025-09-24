package main.carrinho;

import java.util.Objects;

public final class Produto {
    private final String nome;
    private final Dinheiro preco;

    public Produto(String nome, Dinheiro preco) {
        if (nome == null || nome.isBlank()) {
            throw new IllegalArgumentException("Nome do produto inválido");
        }
        if (preco == null) {
            throw new IllegalArgumentException("Preço do produto não pode ser nulo");
        }
        this.nome = nome;
        this.preco = preco;
    }

    public String getNome() {
        return nome;
    }

    public Dinheiro getPreco() {
        return preco;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Produto)) return false;
        Produto produto = (Produto) o;
        return nome.equals(produto.nome) && preco.equals(produto.preco);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, preco);
    }
}
