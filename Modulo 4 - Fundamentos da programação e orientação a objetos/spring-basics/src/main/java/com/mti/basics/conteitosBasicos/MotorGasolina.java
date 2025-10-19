package com.mti.basics.conteitosBasicos;

import org.springframework.stereotype.Service;

@Service
public class MotorGasolina implements Motor{
    public String ligar(){return "MOTOR A GASOLINA LIGADO!";}
}
