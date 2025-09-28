package tarefa;

import java.util.ArrayList;
import java.util.List;

public class Tarefa {
    private String nome;
    private String descricao;
    private int duracao;
    private List<Tarefa> dependencias;

    public Tarefa(String nome, String descricao, int duracao, List<Tarefa> dependencias) {
        this.nome = nome;
        this.descricao = descricao;
        this.duracao = duracao;
        this.dependencias = dependencias;
    }

    public String getNome() {
        return this.nome;
    }
    public String getDescricao() {
        return this.descricao;
    }

    public int getDuracao() {
        return this.duracao;
    }

    public List<Tarefa> getDependencias() {
        return this.dependencias;
    }
}
