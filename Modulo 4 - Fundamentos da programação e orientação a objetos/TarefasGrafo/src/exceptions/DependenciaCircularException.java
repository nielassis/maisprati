package exceptions;

public class DependenciaCircularException extends Exception {
    public DependenciaCircularException(String message) {
        super(message);
    }
}
