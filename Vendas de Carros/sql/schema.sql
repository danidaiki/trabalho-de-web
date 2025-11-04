CREATE DATABASE IF NOT EXISTS venda_carros;
USE venda_carros;

CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('admin', 'vendedor') DEFAULT 'vendedor',
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE vendedor (
    id_vendedor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    rede_social VARCHAR(100),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comprador (
    id_comprador INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    rede_social VARCHAR(100),
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE veiculo (
    id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT,
    categoria VARCHAR(50),
    preco DECIMAL(10,2),
    id_vendedor INT,
    FOREIGN KEY (id_vendedor) REFERENCES vendedor(id_vendedor)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

CREATE TABLE venda (
    id_venda INT AUTO_INCREMENT PRIMARY KEY,
    id_vendedor INT,
    id_comprador INT,
    id_veiculo INT,
    data_venda DATE DEFAULT (CURRENT_DATE),
    valor_venda DECIMAL(10,2),
    FOREIGN KEY (id_vendedor) REFERENCES vendedor(id_vendedor)
        ON DELETE CASCADE,
    FOREIGN KEY (id_comprador) REFERENCES comprador(id_comprador)
        ON DELETE CASCADE,
    FOREIGN KEY (id_veiculo) REFERENCES veiculo(id_veiculo)
        ON DELETE CASCADE
);
