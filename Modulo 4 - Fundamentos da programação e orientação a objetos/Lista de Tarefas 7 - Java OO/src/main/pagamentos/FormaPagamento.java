package main.pagamentos;

import main.exceptions.PagamentoInvalidoException;

import java.math.BigDecimal;

public abstract class FormaPagamento {
    public abstract void validarPagamento() throws PagamentoInvalidoException;

    public void processarPagamento(BigDecimal valor) {
        validarPagamento();
        System.out.println("Pagamento de: " + valor + " Processado com " + this.getClass().getSimpleName());
    }
}
