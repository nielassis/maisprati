package com.mti.basics.exercicioIoC;

import org.springframework.context.annotation.Profile;

public class ConsoleMessageSink implements MessageSink {
    @Override
    @Profile("file")
    public void show (String message) {
        System.out.println(message);
    }
}
