var express = require('express');
var cors = require('cors');
var path = require('path');
var porta = process.env.AMBIENTE_PROCESSO = 'desenvolvimento' ? 3333:8080;

var app = express();

var indexRouter = require('./src/routes/index');
var registerRouter = require('./src/routes/register');
var loginRouter = require('./src/routes/login');
var contatoRouter = require('./src/routes/contact')

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors());

app.use('/', indexRouter);
app.use('/registerRouter', registerRouter);
app.use('/loginRouter', loginRouter);
app.use('/contatoRouter', contatoRouter);


app.listen(porta, function() {
    console.log('Testando  resposta');

})

