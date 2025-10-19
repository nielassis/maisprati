package com.mti.basics.conteitosBasicos;

import org.springframework.stereotype.Service;

@Service
public class Carrinho {
    private final Motor motor;

    public Carrinho(Motor motor) {
        this.motor = motor;
    }

    String andar() {return motor.ligar() + "CARRINHO ANDANDO!"; }
}
