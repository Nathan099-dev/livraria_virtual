create database livraria;
use livraria;

create table autor(
id_autor int primary key auto_increment,
nome varchar(50),
sobrenome varchar(50),
nacionalidade varchar(50),
fklivro int,
foreign key (fklivro) references autor (id_autor)
);

create table editora(
id_editora int primary key,
nome varchar(50)
);

create table  livro (
id_livro int primary key auto_increment,
nomelivro varchar(50),
ano int,
fkeditora int,
foreign key (fkeditora) references editora (id_editora),
fk_autor int,
foreign key (fk_autor) references autor (id_autor)
);

insert into autor (id_autor, nome, sobrenome, nacionalidade) values
(null, 'Tathiane', 'Deândela', 'brasileira'),
(null, 'Augusto', 'Cury', 'brasileiro'),
(null, 'Stella', 'Carr', 'brasileira'),
(null, 'Jhon', 'Boyne', 'irlandês'),
(null, 'Jo', 'Rowling', 'britânica'),
(null, 'Jeff', 'Kinney', 'americano');

insert into editora values
(1, 'Saraiva'),
(2, 'rocco'),
(3, 'moderna'),
(4, 'Literare'),
(5, 'New York Times');

insert into livro (id_livro, nomelivro, ano) values
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

select * from autor;
select * from editora;
select * from livro;






