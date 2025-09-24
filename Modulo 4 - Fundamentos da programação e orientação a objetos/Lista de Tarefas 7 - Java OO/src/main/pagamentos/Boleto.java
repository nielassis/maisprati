package main.pagamentos;

import main.exceptions.PagamentoInvalidoException;

public class Boleto extends FormaPagamento {
    private final String codigoBoleto;

    public Boleto(String codigoBoleto) {
        this.codigoBoleto = codigoBoleto;
    }

    @Override
    public void validarPagamento() {
        if (codigoBoleto == null || !codigoBoleto.matches("\\d{47}")) {
            throw new PagamentoInvalidoException("Código de boleto inválido");
        }
    }
}
