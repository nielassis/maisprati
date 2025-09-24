package main.meiotransporte;

import main.exceptions.OperacaoInvalidaException;

public class Trem implements IMeioTransporte {
    private double velocidade;
    private final double VELOCIDADE_MAX = 120;

    public Trem() {
        this.velocidade = 0;
    }

    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAX) {
            throw new OperacaoInvalidaException("Trem já atingiu a velocidade máxima!");
        }
        velocidade += 25;
        if (velocidade > VELOCIDADE_MAX) velocidade = VELOCIDADE_MAX;
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new OperacaoInvalidaException("Trem já está parado!");
        }
        velocidade -= 30;
        if (velocidade < 0) velocidade = 0;
    }

    @Override
    public double getVelocidade() {
        return velocidade;
    }
}
