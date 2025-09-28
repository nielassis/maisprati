package tarefa;

import exceptions.DependenciaCircularException;
import exceptions.TarefaNaoEncontradaException;

import java.util.*;

public class GrafoTarefas {
    private Map<String, Tarefa> tarefas;

    public GrafoTarefas() {
        this.tarefas = new HashMap<>();
    }

    public void addTarefa(Tarefa tarefa) throws TarefaNaoEncontradaException {
        if(this.tarefas.containsKey(tarefa.getNome())) {
            throw new TarefaNaoEncontradaException("A tarefa " + tarefa.getNome() + " já existe");

        }

        tarefas.put(tarefa.getNome(), tarefa);
    }

    public int calcularDuracaoTotal(String nomeTarefa) throws TarefaNaoEncontradaException, DependenciaCircularException {
        Tarefa tarefa = tarefas.get(nomeTarefa);
        if (tarefa == null) {
            throw new TarefaNaoEncontradaException("Tarefa não encontrada");
        }
        Set<Tarefa> tarefasVisitadas = new HashSet<Tarefa>();
        return calcularDuracaoTotalRecursivo(tarefa, tarefasVisitadas);
    }

    private int calcularDuracaoTotalRecursivo(Tarefa tarefa, Set<Tarefa> tarefasVisitadas) throws DependenciaCircularException {
        if (tarefasVisitadas.contains(tarefa)) {
            throw  new DependenciaCircularException("Dependencia cirular encontrada envolvendo a tafera " + tarefa.getNome());
        }

        tarefasVisitadas.add(tarefa);
        int duracaoTotal = tarefa.getDuracao();
        for(Tarefa dependente : tarefa.getDependencias()) {
            duracaoTotal += calcularDuracaoTotalRecursivo(dependente, tarefasVisitadas);
        }

        tarefasVisitadas.remove(tarefa);
        return duracaoTotal;
    }

    public List<Tarefa> ListarTarefaComDuracaoSuperiorA(int duracaoMin) {
        return tarefas.values().stream()
                .filter(tarefa -> tarefa.getDuracao() > duracaoMin)
                .toList();
    }
}
