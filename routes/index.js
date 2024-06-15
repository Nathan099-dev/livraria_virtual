const express = require('express');
const router = express.Router();

var index = require('./public/html/index');

router.get('/', function(request, response){
    index.testar(request, response);
});

router.get('/register', function(request, response){
    index.cadastro_usuario(request, response);
})

router.get('/login', function(request, response){
    index.fazerLogin(request, response);
})

router.get('')