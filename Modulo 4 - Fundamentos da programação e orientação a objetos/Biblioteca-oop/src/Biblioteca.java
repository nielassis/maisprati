import java.util.ArrayList;
import java.util.List;

public class Biblioteca {
    private List<Livro> livros;

    public Biblioteca() {
        this.livros = new ArrayList<Livro>();
    }

    public void addLivro(Livro livro){
        this.livros.add(livro);
    }

    public void listarLivros(){
        if(this.livros.isEmpty()){
            System.out.println("Não existem livros cadastrados no sistema da biblioteca.");
        } else {
            for (Livro livro : this.livros) {
                livro.exibirDados();
            }
        }
    }

    public void alterarDisponibilidade(String titulo, boolean disponibilidade) {
        for (Livro livro : this.livros) {
            if (livro.getTitulo().equals(titulo)) {
                livro.setDisponibilidade(disponibilidade);
                System.out.println("Disponibilidade do livro: "+ livro.getTitulo() + " Alterada para: " + (disponibilidade ? "Disponivel" : "Emprestado"));
            } else {
                System.out.println("Livro não encontrado");
            }
        }

    }
}
