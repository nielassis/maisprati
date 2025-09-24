package test;

import main.carrinho.*;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

public class CarrinhoTest {

    @Test
    public void fluxoCompletoCarrinho() {
        Produto notebook = new Produto("Notebook", new Dinheiro(new BigDecimal("3500.00"), Moeda.BRL));
        Produto mouse = new Produto("Mouse", new Dinheiro(new BigDecimal("150.00"), Moeda.BRL));

        ItemCarrinho itemNotebook = new ItemCarrinho(notebook, 1);
        ItemCarrinho itemMouse = new ItemCarrinho(mouse, 2);

        Carrinho carrinho = new Carrinho();
        assertTrue(carrinho.getItens().isEmpty());

        carrinho = carrinho.adicionarItem(itemNotebook);
        carrinho = carrinho.adicionarItem(itemMouse);
        assertEquals(2, carrinho.getItens().size());

        assertEquals(new BigDecimal("3800.00"), carrinho.total().getValor());

        Carrinho carrinhoComDesconto = carrinho.aplicarCupom(10);
        assertEquals(new BigDecimal("3420.00"), carrinhoComDesconto.total().getValor());

        Carrinho carrinhoRemovido = carrinhoComDesconto.removerItem(itemMouse);
        assertEquals(new BigDecimal("3420.00"), carrinhoRemovido.total().getValor());
    }

    @Test
    public void validarQuantidadeInvalida() {
        Produto produto = new Produto("Teclado", new Dinheiro(new BigDecimal("200.00"), Moeda.BRL));
        assertThrows(IllegalArgumentException.class, () -> new ItemCarrinho(produto, 0));
        assertThrows(IllegalArgumentException.class, () -> new ItemCarrinho(produto, -5));
    }

    @Test
    public void validarCupomInvalido() {
        Produto produto = new Produto("Teclado", new Dinheiro(new BigDecimal("200.00"), Moeda.BRL));
        ItemCarrinho item = new ItemCarrinho(produto, 1);
        Carrinho carrinho = new Carrinho().adicionarItem(item);

        assertThrows(IllegalArgumentException.class, () -> carrinho.aplicarCupom(-10));
        assertThrows(IllegalArgumentException.class, () -> carrinho.aplicarCupom(50));
    }

    @Test
    public void validarPrecoNegativo() {
        assertThrows(IllegalArgumentException.class, () -> new Dinheiro(new BigDecimal("-100"), Moeda.BRL));
    }
}
