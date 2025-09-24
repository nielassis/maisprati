package main.exceptions;

public class DescontoInvalidoException extends RuntimeException{
    public DescontoInvalidoException(String mensage){
        super(mensage);
    }
}
