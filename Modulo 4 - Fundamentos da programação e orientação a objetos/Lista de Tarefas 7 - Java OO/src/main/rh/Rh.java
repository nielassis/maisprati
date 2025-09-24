package main.rh;

import java.util.ArrayList;
import java.util.List;

public class Rh {
    protected List<Funcionario> funcionarios;

    public Rh() {
        this.funcionarios = new ArrayList<Funcionario>();
    }

    public List<Funcionario> getFuncionarios() {
        for (Funcionario f : funcionarios) {
            System.out.println(f.getName() + " - Salário: " + f.getSalario() + " - Bônus: " + f.calcularBonus());
        }
        return funcionarios;
    }

    public void addFuncionario(Funcionario f) {
        if(f == null) {
            throw new NullPointerException("Funcionário não pode ser nulo.");
        }

        funcionarios.add(f);
    }

}
