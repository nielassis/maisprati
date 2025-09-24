package test;

import main.produto.Produto;
import main.exceptions.DescontoInvalidoException;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.math.BigDecimal;

public class ProdutoTest {
    @Test
    public void criarProdutoTest(){
        Produto p = new Produto("Notebook", new BigDecimal("3500.00"), 10);

        assertEquals("Notebook", p.getName());
        assertEquals(new BigDecimal("3500.00"), p.getPrice());
        assertEquals(10, p.getQuantityInStock());
    }

    @Test
    public void naoDeveAceitarNomeNuloOuVazio(){
        assertThrows(IllegalArgumentException.class, () -> {
            new Produto("", new BigDecimal("3500.00"), 10);
        });

        assertThrows(IllegalArgumentException.class, () -> {
            new Produto(null, new BigDecimal("3500.00"), 10);
        });
    }

    @Test
    public void naoDeveAceitarPrecoNuloOuNegativo(){
        assertThrows(IllegalArgumentException.class, () -> {
            new Produto("Notebook", null, 10);
        });

        assertThrows(IllegalArgumentException.class, () -> {
            new Produto("Notebook", new BigDecimal("-3500.00"), 10);
        });
    }

    @Test
    public void naoDeveAceitarQuantidadeNuloOuNegativo(){
        assertThrows(IllegalArgumentException.class, () -> {
            new Produto("Notebook", new BigDecimal("3500.00"), null);
        });

        assertThrows(IllegalArgumentException.class, () -> {
            new Produto("Notebook", new BigDecimal("3500.00"), -10);
        });
    }

    @Test
    public void naoDeveAceitarDescontosInvalidos(){
        assertThrows(DescontoInvalidoException.class, () -> {
            Produto p = new  Produto("Notebook", new BigDecimal("3500.00"), 10);

            p.aplicarDesconto(-20);
        });

        assertThrows(DescontoInvalidoException.class, () -> {
            Produto p = new  Produto("Notebook", new BigDecimal("3500.00"), 10);

            p.aplicarDesconto(51);
        });
    }
}
