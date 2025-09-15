import java.text.NumberFormat;
import java.util.Locale;
import java.util.Scanner;

class Account {
    private int balanceInCents;

    public Account(int balanceInCents) {
        this.balanceInCents = balanceInCents;
    }

    public int getBalanceInCents() {
        return balanceInCents;
    }

    public void depositBalanceInCents(int amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("O valor do depósito deve ser maior que 0");
        }
        this.balanceInCents += amount;
    }

    public void withdrawBalanceInCents(int amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("O valor do saque deve ser maior que 0");
        }
        if (amount > this.balanceInCents) {
            throw new IllegalArgumentException("Saldo insuficiente");
        }
        this.balanceInCents -= amount;
    }
}

public class Main {
    public static String formatCurrency(int cents) {
        double value = cents / 100.0;
        NumberFormat nf = NumberFormat.getCurrencyInstance(new Locale("pt", "BR"));
        return nf.format(value);
    }

    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        Account account = new Account(10000);

        System.out.println("================================");
        System.out.println("       Sistema ATM");
        System.out.println("================================");

        int menuOption = 0;

        do {
            System.out.println("Saldo: " + formatCurrency(account.getBalanceInCents()));
            System.out.println("Opções: ");
            System.out.println("1 - Depositar");
            System.out.println("2 - Sacar");
            System.out.println("0 - Sair");
            System.out.print("Escolha uma opção: ");

            menuOption = input.nextInt();

            switch (menuOption) {
                case 1:
                    System.out.print("Digite o valor a ser depositado (em centavos): ");
                    int depositAmount = input.nextInt();
                    try {
                        account.depositBalanceInCents(depositAmount);
                        System.out.println("Depósito realizado com sucesso!");
                    } catch (IllegalArgumentException e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case 2:
                    System.out.print("Digite o valor a ser sacado (em centavos): ");
                    int withdrawAmount = input.nextInt();
                    try {
                        account.withdrawBalanceInCents(withdrawAmount);
                        System.out.println("Saque realizado com sucesso!");
                    } catch (IllegalArgumentException e) {
                        System.out.println(e.getMessage());
                    }
                    break;
                case 0:
                    System.out.println("Encerrando o sistema...");
                    break;
                default:
                    System.out.println("Opção inválida!");
            }

            System.out.println();

        } while (menuOption != 0);

        input.close();
    }
}
