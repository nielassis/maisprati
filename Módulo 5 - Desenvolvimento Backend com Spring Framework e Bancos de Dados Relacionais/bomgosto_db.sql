CREATE TABLE comanda (
    id_comanda SERIAL PRIMARY KEY,
    data DATE NOT NULL,
    n_mesa INT NOT NULL,
    cliente VARCHAR(100) NOT NULL
);

CREATE TABLE cardapio (
    id_cardapio SERIAL PRIMARY KEY,
    nome_item VARCHAR(100) UNIQUE NOT NULL,
    descricao TEXT,
    preco_unitario DECIMAL(10,2) NOT NULL
);

CREATE TABLE item_comanda (
    id_item_comanda SERIAL PRIMARY KEY,
    quantidade INT NOT NULL,
    id_comanda INT NOT NULL,
    id_cardapio INT NOT NULL,
    FOREIGN KEY (id_comanda) REFERENCES comanda(id_comanda),
    FOREIGN KEY (id_cardapio) REFERENCES cardapio(id_cardapio)
);

INSERT INTO comanda (data, n_mesa, cliente)
VALUES 
    ('2025-10-21', 5, 'Júlio'),
    ('2025-10-21', 5, 'Pedro'),
    ('2025-10-21', 5, 'Renata'),
    ('2025-10-21', 5, 'Katarina');

INSERT INTO cardapio (nome_item, descricao, preco_unitario)
VALUES
    ('Café Expresso', 'Café puro feito na hora, 50ml', 5.00),
    ('Cappuccino', 'Café com leite vaporizado e espuma cremosa', 8.50),
    ('Latte', 'Café expresso com leite vaporizado', 9.00),
    ('Chocolate Quente', 'Bebida cremosa de chocolate com chantilly', 10.00),
    ('Pão de Queijo', 'Porção com 5 unidades quentinhas', 7.50),
    ('Croissant', 'Folhado de manteiga, simples ou com recheio de queijo', 8.00),
    ('Torta de Limão', 'Fatia de torta artesanal com raspas de limão', 9.50),
    ('Cookie de Chocolate', 'Cookie artesanal com gotas de chocolate', 6.00),
    ('Suco Natural', 'Sabores: laranja, abacaxi ou morango', 8.00),
    ('Água Mineral', 'Garrafa de 500ml, com ou sem gás', 4.00);

INSERT INTO item_comanda (quantidade, id_comanda, id_cardapio)
VALUES
    (1, 1, 1), 
    (2, 1, 4), 
    (1, 2, 2),  
    (1, 2, 5),  
    (1, 3, 3), 
    (1, 4, 1),  
    (1, 4, 5);

-- questão 1 --
-- Fazer uma listagem do cardápio ordenada por nome
SELECT 
    id_cardapio,
    nome_item,
    descricao,
    preco_unitario
FROM cardapio
ORDER BY nome_item;

-- questão 2 --
-- Apresentar todas as comandas (código, data, mesa e nome do cliente)
-- e os itens da comanda (nome do item, descrição, quantidade, preço unitário e total)
-- Ordenar por data, código da comanda e nome do item
SELECT 
    comanda.id_comanda,
    comanda.data,
    comanda.n_mesa,
    comanda.cliente,
    cardapio.nome_item,
    cardapio.descricao,
    item_comanda.quantidade,
    cardapio.preco_unitario,
    (item_comanda.quantidade * cardapio.preco_unitario) AS preco_total_item
FROM item_comanda
JOIN comanda ON comanda.id_comanda = item_comanda.id_comanda
JOIN cardapio ON cardapio.id_cardapio = item_comanda.id_cardapio
ORDER BY comanda.data, comanda.id_comanda, cardapio.nome_item;

-- questão 3 --
-- Listar todas as comandas com o valor total de cada uma
-- (soma dos preços totais dos itens)
-- Ordenar por data
SELECT 
    comanda.id_comanda,
    comanda.data,
    comanda.n_mesa,
    comanda.cliente,
    SUM(item_comanda.quantidade * cardapio.preco_unitario) AS valor_total_comanda
FROM item_comanda
JOIN comanda ON comanda.id_comanda = item_comanda.id_comanda
JOIN cardapio ON cardapio.id_cardapio = item_comanda.id_cardapio
GROUP BY comanda.id_comanda, comanda.data, comanda.n_mesa, comanda.cliente
ORDER BY comanda.data;

-- questão 4 --
-- Listar apenas as comandas que possuem mais de um tipo de item
-- Mostrar também o valor total da comanda
SELECT 
    comanda.id_comanda,
    comanda.data,
    comanda.n_mesa,
    comanda.cliente,
    SUM(item_comanda.quantidade * cardapio.preco_unitario) AS valor_total_comanda
FROM item_comanda
JOIN comanda ON comanda.id_comanda = item_comanda.id_comanda
JOIN cardapio ON cardapio.id_cardapio = item_comanda.id_cardapio
GROUP BY comanda.id_comanda, comanda.data, comanda.n_mesa, comanda.cliente
HAVING COUNT(item_comanda.id_cardapio) > 1
ORDER BY comanda.data;

-- questão 5 --
-- Exibir o total de faturamento por data (somatório de todas as comandas do dia)
-- Ordenar por data
SELECT 
    comanda.data,
    SUM(item_comanda.quantidade * cardapio.preco_unitario) AS faturamento_total_dia
FROM item_comanda
JOIN comanda ON comanda.id_comanda = item_comanda.id_comanda
JOIN cardapio ON cardapio.id_cardapio = item_comanda.id_cardapio
GROUP BY comanda.data
ORDER BY comanda.data;
