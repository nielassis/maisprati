package main.pagamentos;

import main.exceptions.PagamentoInvalidoException;

public class Pix extends FormaPagamento{
        private final String chavePix;

        public Pix(String chavePix) {
            this.chavePix = chavePix;
        }

        @Override
        public void validarPagamento(){
            if (chavePix == null || chavePix.isBlank()) {
                throw new PagamentoInvalidoException("Chave Pix inválida");
            }

        }
    }
