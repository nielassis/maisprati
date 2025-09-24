package main.produto;

import java.util.ArrayList;
import java.util.List;

public class Estoque {
    private List<Produto> produtos;

    public Estoque() {
        this.produtos = new ArrayList<Produto>();
    }

    public void addProduto(Produto produto){
        if(produto == null){
            throw  new IllegalArgumentException("main.produto.Produto deve ser nulo.");
        }

        this.produtos.add(produto);
    }

    public List<Produto> getProdutos() {
        return produtos;
    }
}
