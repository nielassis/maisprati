package main.meiotransporte;

import main.exceptions.OperacaoInvalidaException;

public class Bicicleta implements IMeioTransporte {
    private double velocidade;
    private final double VELOCIDADE_MAX = 40;

    public Bicicleta() {
        this.velocidade = 0;
    }

    @Override
    public void acelerar() {
        if (velocidade >= VELOCIDADE_MAX) {
            throw new OperacaoInvalidaException("Bicicleta já atingiu a velocidade máxima!");
        }
        velocidade += 5;
        if (velocidade > VELOCIDADE_MAX) velocidade = VELOCIDADE_MAX;
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new OperacaoInvalidaException("Bicicleta já está parada!");
        }
        velocidade -= 5;
        if (velocidade < 0) velocidade = 0;
    }

    @Override
    public double getVelocidade() {
        return velocidade;
    }
}
