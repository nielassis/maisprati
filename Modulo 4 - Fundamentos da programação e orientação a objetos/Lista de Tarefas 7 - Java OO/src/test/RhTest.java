package test;

import main.rh.Desenvolvedor;
import main.rh.Funcionario;
import main.rh.Gerente;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class RhTest {
    @Test
    public void criarFuncionario() {
        Funcionario f = new Desenvolvedor("Daniel", new BigDecimal("4000.00"));

        assertEquals("Daniel", f.getName());
        assertEquals(new BigDecimal("4000.00"), f.getSalario());
        assertEquals(new BigDecimal("400.00"), f.calcularBonus());
    }

    @Test
    public void naoDeveAceitarNomeNuloOuVazio() {
        assertThrows(IllegalArgumentException.class, () -> {
            Funcionario f = new Gerente("", new BigDecimal("3500.00"));
        });

        assertThrows(IllegalArgumentException.class, () -> {
            Funcionario f = new Gerente(null, new BigDecimal("3500.00"));
        });
    }

    @Test
    public void naoDeveAceitarSalarioNuloOuNegativo() {
        assertThrows(IllegalArgumentException.class, () -> {
            Funcionario f = new Gerente("Daniel", null);
        });

        assertThrows(IllegalArgumentException.class, () -> {
            Funcionario f = new Gerente("Daniel", new BigDecimal("-3500.00"));
        });
    }
}
