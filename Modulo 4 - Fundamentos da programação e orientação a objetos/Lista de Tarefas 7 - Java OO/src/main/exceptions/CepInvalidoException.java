package main.exceptions;

public class CepInvalidoException extends RuntimeException {
    public CepInvalidoException(String message) {
        super(message);
    }
}
