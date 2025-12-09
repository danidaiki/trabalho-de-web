CREATE DATABASE vendas_carros;
USE vendas_carros;

CREATE TABLE usuario (
 id INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 email VARCHAR(100),
 senha_hash VARCHAR(255)
);

CREATE TABLE vendedor (
 id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
 nome VARCHAR(100),
 email VARCHAR(100),
 telefone VARCHAR(20),
 rede_social VARCHAR(100)
);

CREATE TABLE veiculo (
 id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
 marca VARCHAR(50),
 modelo VARCHAR(50),
 ano INT,
 categoria VARCHAR(50),
 preco DECIMAL(10,2),
 imagem VARCHAR(255),
 id_vendedor INT,
 FOREIGN KEY (id_vendedor) REFERENCES vendedor(id_vendedor)
);