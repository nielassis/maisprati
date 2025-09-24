# Atividade Java OO — Lista nº 7

## Estrutura

```
src/
 ├─ main/
 │   ├─ java/
 │   │   ├─ main/
 │   │   │   ├─ exceptions/        # DescontoInvalidoException, OperacaoInvalidaException, PagamentoInvalidoException            
 │   │   │   ├─ meiotransporte/    # Carro, Bicicleta, Trem, IMeioTransporte
 │   │   │   ├─ pagamentos/        # CartaoDeCredito, Boleto, Pix, FormaPagamento
 │   │   │   ├─ rh/                 # Funcionario, Desenvolvedor, Gerente, Rh
 │   │   │   ├─ produto/            # Produto, Estoque
 │   │   │   └─ Main.java           # Código principal com todas as atividades comentadas
 └─ test/
     ├─ java/
     │   └─ test/
     │       ├─ ProdutoTest.java
     │       ├─ FormaPagamentoTest.java
     │       └─ Outros testes unitários
```

### Observações

* O **código principal (`Main.java`)** contém todas as atividades implementadas, porém os blocos estão comentados para que cada atividade possa ser testada individualmente.
* Todos os **testes unitários** estão localizados na pasta `src/test/`.

---

1. Certifique-se de ter o **Java 17 ou superior** instalado.

2. Abra o projeto em sua IDE favorita (IntelliJ, Eclipse, VS Code).

3. Adicione as dependências JUnit no build tool (Maven ou Gradle):

### Dependências Maven

```xml
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-api</artifactId>
        <version>5.10.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter-engine</artifactId>
        <version>5.10.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.junit.platform</groupId>
        <artifactId>junit-platform-commons</artifactId>
        <version>1.10.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.junit.platform</groupId>
        <artifactId>junit-platform-engine</artifactId>
        <version>1.10.0</version>
        <scope>test</scope>
    </dependency>
    <dependency>
        <groupId>org.apiguardian</groupId>
        <artifactId>apiguardian-api</artifactId>
        <version>1.1.2</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

### Links das dependências no Maven Library

* [junit-jupiter-api 5.10.0](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-api/5.10.0)
* [junit-jupiter-engine 5.10.0](https://mvnrepository.com/artifact/org.junit.jupiter/junit-jupiter-engine/5.10.0)
* [junit-platform-commons 1.10.0](https://mvnrepository.com/artifact/org.junit.platform/junit-platform-commons/1.10.0)
* [junit-platform-engine 1.10.0](https://mvnrepository.com/artifact/org.junit.platform/junit-platform-engine/1.10.0)
* [apiguardian-api 1.1.2](https://mvnrepository.com/artifact/org.apiguardian/apiguardian-api/1.1.2)

---

## Executando os Testes

Para rodar todos os testes usando Maven:

```bash
mvn clean test
```

Para rodar apenas testes específicos, você pode usar a opção `-Dtest`:

```bash
mvn -Dtest=FormaPagamentoTest test
```

No IntelliJ ou outra IDE, basta **clicar com o botão direito** na classe de teste e selecionar **Run**.

---

## Observações Finais

* Todos os métodos principais de cada atividade estão comentados no `Main.java` para evitar execução simultânea de todas as tarefas.
* O polimorfismo e validações são demonstrados tanto no `Main` quanto nos **testes unitários** na pasta `src/test`.
* Exceções customizadas (`PagamentoInvalidoException` e `OperacaoInvalidaException`) são lançadas quando os dados ou operações são inválidos.
