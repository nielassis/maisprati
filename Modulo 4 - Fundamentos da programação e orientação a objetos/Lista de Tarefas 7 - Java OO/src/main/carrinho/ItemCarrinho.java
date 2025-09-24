package main.carrinho;

import java.math.BigDecimal;
import java.util.Objects;

public final class ItemCarrinho {
    private final Produto produto;
    private final int quantidade;

    public ItemCarrinho(Produto produto, int quantidade) {
        if (produto == null) {
            throw new IllegalArgumentException("Produto não pode ser nulo");
        }
        if (quantidade <= 0) {
            throw new IllegalArgumentException("Quantidade deve ser maior que zero");
        }
        this.produto = produto;
        this.quantidade = quantidade;
    }

    public Produto getProduto() {
        return produto;
    }

    public int getQuantidade() {
        return quantidade;
    }

    public ItemCarrinho atualizarQuantidade(int novaQuantidade) {
        return new ItemCarrinho(produto, novaQuantidade);
    }

    public Dinheiro subtotal() {
        BigDecimal valorTotal = produto.getPreco().getValor()
                .multiply(BigDecimal.valueOf(quantidade));
        return new Dinheiro(valorTotal, produto.getPreco().getMoeda());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ItemCarrinho)) return false;
        ItemCarrinho that = (ItemCarrinho) o;
        return quantidade == that.quantidade && produto.equals(that.produto);
    }

    @Override
    public int hashCode() {
        return Objects.hash(produto, quantidade);
    }
}
