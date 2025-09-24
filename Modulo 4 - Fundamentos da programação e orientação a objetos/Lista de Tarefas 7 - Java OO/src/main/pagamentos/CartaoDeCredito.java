package main.pagamentos;

import main.exceptions.PagamentoInvalidoException;

public class CartaoDeCredito extends FormaPagamento {
    private final String numeroCartao;

    public CartaoDeCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

    @Override
    public void validarPagamento(){
        if (numeroCartao == null || !numeroCartao.matches("\\d{16}")) {
            throw new PagamentoInvalidoException("Número do cartão inválido");
        }
    }
}
