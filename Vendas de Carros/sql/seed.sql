USE venda_carros;

INSERT INTO usuario (nome, email, senha, tipo)
VALUES ('Administrador', 'admin@venda.com', '$2b$10$uAWcWrLQ1SXmt1k6vxiFv.tBeCvU0fgT3y1hZpLLGf8t5yR61.OGe', 'admin');

INSERT INTO vendedor (nome, email, telefone, rede_social)
VALUES 
('Carlos Souza', 'carlos@carros.com', '11988887777', '@carloscarros'),
('Maria Alves', 'maria@auto.com', '11999996666', '@mariaautos');

INSERT INTO comprador (nome, email, telefone, rede_social)
VALUES 
('João Pereira', 'joao@compras.com', '11944443333', '@joaocarros'),
('Ana Lima', 'ana@compra.com', '11955554444', '@anacarro');

INSERT INTO veiculo (marca, modelo, ano, categoria, preco, id_vendedor)
VALUES 
('Fiat', 'Uno', 2015, 'Hatch', 25000.00, 1),
('Chevrolet', 'Onix', 2020, 'Hatch', 55000.00, 2);

INSERT INTO venda (id_vendedor, id_comprador, id_veiculo, valor_venda)
VALUES 
(1, 1, 1, 24000.00),
(2, 2, 2, 53000.00);
