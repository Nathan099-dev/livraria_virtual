const express = require('express');
const server = express();

server.use(express.json())

const livros = [`
    O menino do pijama listrado,
    A morte tem sete herdeiros, 
    Ansiedade: como enfrentar o mal do  século,
    Como fazer o tempo trabalhar para você,
    O diário de um banana,
    O ouro do fantasma,
    Os três  mosqueteiros,
    Harry Poter e  a pedra filisofal,
    Harry Poter e a câmara secreta,
    Harry Potter e o prisioneiro de Azkaban,
    Harry Potter e o cálice de fogo,
    Harry Potter e a ordem da fênix,
    Harry Potter e o enigma do príncipe,
    Faça o tempo enriquecer você,
    O tribunal dos bichos,
    A longa jonada da vaca para o brejo,
    O diário e Annie Frank,
    `]

    /*Ainda definindo se é melhor deixar deste jeito
    ou se seria melhor colocar o link da API  que já usamos antes */

    //retorna um livro
    server.get('/livros/:index', (req, res) => {
        return  res.json()
    })

    //Cadastrar um novo livro
    server.post('/livros', (req, res) => {
        const name = req.body;
        livros.push(livros);
    })

