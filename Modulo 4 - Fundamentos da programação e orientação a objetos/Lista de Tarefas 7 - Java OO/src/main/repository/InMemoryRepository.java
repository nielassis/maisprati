package main.repository;

import main.exceptions.EntidadeNaoEncontradaException;

import java.util.*;

public class InMemoryRepository<T extends Identificavel<ID>, ID> implements IRepository<T, ID> {
    private final Map<ID, T> storage = new HashMap<>();

    @Override
    public void salvar(T entidade) {
        storage.put(entidade.getId(), entidade);
    }

    @Override
    public Optional<T> buscarPorId(ID id) {
        return Optional.ofNullable(storage.get(id));
    }

    @Override
    public List<T> listarTodos() {
        return List.copyOf(storage.values()); // cópia imutável
    }

    @Override
    public void remover(ID id) {
        if (!storage.containsKey(id)) {
            throw new EntidadeNaoEncontradaException("Entidade com ID " + id + " não encontrada.");
        }
        storage.remove(id);
    }
}
