package com.mti.basics.exercicioIoC;

import java.math.BigDecimal;

public interface TotalStore {
    BigDecimal read();

    void write(BigDecimal newTotal);
}
