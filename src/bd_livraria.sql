CREATE DATABASE livraria;
USE livraria;

-- Criação da tabela 'autor'
CREATE TABLE autor (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nome_autor VARCHAR(100) NOT NULL
);

-- Criação da tabela 'ano_publicacao'
CREATE TABLE ano_publicacao (
    id_ano_publicacao INT PRIMARY KEY AUTO_INCREMENT,
    ano INT NOT NULL
);

-- Criação da tabela 'editora'
CREATE TABLE editora (
    id_editora INT PRIMARY KEY AUTO_INCREMENT,
    nome_editora VARCHAR(200) NOT NULL
);

-- Criação da tabela 'livro'
CREATE TABLE livro (
    id_livro INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    id_autor INT,
    id_ano_publicacao INT,
    id_editora INT,
    FOREIGN KEY (fk_autor) REFERENCES autor(id_autor),
    FOREIGN KEY (fk_ano_publicacao) REFERENCES ano_publicacao(id_ano_publicacao),
    FOREIGN KEY (fk_editora) REFERENCES editora(id_editora)
);


INSERT INTO autor (id_autor, nome, sobrenome, nacionalidade) VALUES 
(NULL, 'Tathiane', 'Deândela', 'brasileira'),
(NULL, 'Augusto', 'Cury', 'brasileiro'),
(NULL, 'Stella', 'Carr', 'brasileira'),
(NULL, 'Jhon', 'Boyne', 'irlandês'),
(NULL, 'JK', 'Rowling', 'britânica'),
(NULL, 'Jeff', 'Kinney', 'americano');

INSERT INTO editora VALUES
(1, 'Saraiva'),
(2, 'rocco'),
(3, 'moderna'),
(4, 'Literare'),
(5, 'New York Times');

INSERT INTO livro (id_livro, nomelivro, ano) VALUES
(null, 'O menino do  pijama  listrado', '2008'),
(null, 'A morte tem sete herdeiros', '2013'),
(null, 'Ansiedade: Como enfrentar o mal do século', '2013'),
(null, 'Faça o tempo trabalhar por você', '2016'),
(null, 'Faça o tempo enriquecer você', '2020'),
(null, 'Harry Potter e a pedra filosofal', '1997'),
(null, 'Harry Potter e a câmara secreta', '1998'),
(null, 'Harry Potter e o prisioneiro de Azkaban', '1999'),
(null, 'Diario de um banana', '2007'),
(null, 'Diario de um banana: Dias de cão', '2009');

SELECT * FROM  autor;
SELECT * FROM  ano_publicacao
SELECT * FROM  editora;
SELECT * FROM  livro;





