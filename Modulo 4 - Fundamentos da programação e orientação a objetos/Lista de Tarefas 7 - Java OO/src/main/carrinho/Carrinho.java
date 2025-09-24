package main.carrinho;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public final class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho() {
        this.itens = Collections.emptyList();
    }

    private Carrinho(List<ItemCarrinho> itens) {
        this.itens = Collections.unmodifiableList(itens);
    }

    public List<ItemCarrinho> getItens() {
        return itens;
    }

    public Carrinho adicionarItem(ItemCarrinho item) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(item);
        return new Carrinho(novaLista);
    }

    public Carrinho removerItem(ItemCarrinho item) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.remove(item);
        return new Carrinho(novaLista);
    }

    public Carrinho aplicarCupom(double porcentagem) {
        if (porcentagem < 0 || porcentagem > 30) {
            throw new IllegalArgumentException("Cupom máximo permitido: 30%");
        }

        List<ItemCarrinho> novaLista = new ArrayList<>();
        for (ItemCarrinho item : itens) {
            Dinheiro precoComDesconto = item.getProduto().getPreco().aplicarDesconto(porcentagem);
            Produto produtoComDesconto = new Produto(item.getProduto().getNome(), precoComDesconto);
            novaLista.add(new ItemCarrinho(produtoComDesconto, item.getQuantidade()));
        }

        return new Carrinho(novaLista);
    }

    public Dinheiro total() {
        BigDecimal soma = BigDecimal.ZERO;
        Moeda moeda = null;
        for (ItemCarrinho item : itens) {
            soma = soma.add(item.subtotal().getValor());
            moeda = item.getProduto().getPreco().getMoeda();
        }
        if (moeda == null) moeda = Moeda.BRL;
        return new Dinheiro(soma, moeda);
    }
}
