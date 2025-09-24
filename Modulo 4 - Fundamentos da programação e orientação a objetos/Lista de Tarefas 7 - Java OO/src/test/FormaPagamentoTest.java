package test;

import main.exceptions.PagamentoInvalidoException;
import main.pagamentos.*;
import org.junit.jupiter.api.Test;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class FormaPagamentoTest {

    @Test
    public void testPagamentosValidos() {
        List<FormaPagamento> pagamentos = new ArrayList<>();
        pagamentos.add(new CartaoDeCredito("1234567812345678"));
        pagamentos.add(new Boleto("12345678901234567890123456789012345678901234567"));
        pagamentos.add(new Pix("meuemail@exemplo.com"));

        for (FormaPagamento fp : pagamentos) {
            assertDoesNotThrow(() -> fp.processarPagamento(BigDecimal.valueOf(150.00)));
        }
    }

    @Test
    public void testPagamentosInvalidos() {
        FormaPagamento cartaoInvalido = new CartaoDeCredito("1234");
        assertThrows(PagamentoInvalidoException.class, () ->
                cartaoInvalido.processarPagamento(BigDecimal.valueOf(100))
        );

        FormaPagamento boletoInvalido = new Boleto("123");
        assertThrows(PagamentoInvalidoException.class, () ->
                boletoInvalido.processarPagamento(BigDecimal.valueOf(100))
        );

        FormaPagamento pixInvalido = new Pix("");
        assertThrows(PagamentoInvalidoException.class, () ->
                pixInvalido.processarPagamento(BigDecimal.valueOf(100))
        );
    }
}
