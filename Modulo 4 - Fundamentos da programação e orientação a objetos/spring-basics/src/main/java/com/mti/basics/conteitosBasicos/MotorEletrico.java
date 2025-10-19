package com.mti.basics.conteitosBasicos;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

@Primary
@Service
public class MotorEletrico implements Motor {
    public String ligar(){return "MOTOR ELÉTRICO LIGADO!";}
}
