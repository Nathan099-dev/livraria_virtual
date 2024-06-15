var express = require('express');
var cors = require('cors');
var path = require('path');
var porta = process.env.AMBIENTE_PROCESSO = 'desenvolvimento' ? 3333:8080;

var app = express();

var indexRouter = require('./src/routes/index');
var usuarioRouter = require('./src/routes/usuario');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors());

app.use('/', indexRouter);
app.use('/usuarioRouter', usuarioRouter)

app.listen(porta, function() {
    console.log()
    
})

