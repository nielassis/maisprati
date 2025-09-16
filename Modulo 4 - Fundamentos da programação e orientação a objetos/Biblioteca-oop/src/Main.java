public class Main {
    public static void main(String[] args) {
        Biblioteca biblioteca = new Biblioteca();

        Livro cincoAneis = new Livro("O Livro dos 5 anéis", "Miyamoto Musashi", 1600);
        Livro arteDaGuerra = new Livro("Arte da Guerra", "Sun Tzu", 590);
        Livro melquisedeque = new Livro("Melquisedeque ou a tradição primordial", "Jean Tourniac", 2002);

        biblioteca.addLivro(cincoAneis);
        biblioteca.addLivro(arteDaGuerra);
        biblioteca.addLivro(melquisedeque);

        biblioteca.alterarDisponibilidade("O Livro dos 5 anéis", false);

        biblioteca.listarLivros();
    }
}
