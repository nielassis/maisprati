package main.meiotransporte;

import main.exceptions.OperacaoInvalidaException;

public class Carro implements IMeioTransporte{
    private double velocidade;
    private final double VELOCIDADE_MAX = 200;

    public Carro(){
        this.velocidade = 0;
    }

    @Override
    public void acelerar(){
        if(velocidade >= VELOCIDADE_MAX){
            throw new OperacaoInvalidaException("Carro já atingiu a velocidade máxima!");
        }

        velocidade += 20;
        if (velocidade > VELOCIDADE_MAX) velocidade = VELOCIDADE_MAX;
    }

    @Override
    public void frear() {
        if (velocidade <= 0) {
            throw new OperacaoInvalidaException("Carro já está parado!");
        }
        velocidade -= 15;
        if (velocidade < 0) velocidade = 0;
    }

    @Override
    public double getVelocidade() {
        return velocidade;
    }
}
