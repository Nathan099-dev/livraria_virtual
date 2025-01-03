function cadastro_usuario(nome, email, senha){
    const usuarioCadastrado = 0;
    const nomeUsuario = nome.value;
    const emailUsuario = email.value;
    const senhaUsuario = senha.value;

    if (nomeUsuario == '') {
        alert('Insira o seu nome');
        nome = document.getElementById('nome').style.border = "1px solid red";
        return;
    }
    
    if (emailUsuario == '') {
        alert('insira um email')
        email = document.getElementById('email').style.border = '1px solid red';
        return;
    }
    
    if (emailUsuario.indexOf("@") == -1 || emailUsuario.indexOf('.') == -1) {
        alert('Este endereço não é  um email válido');
        email = document.getElementById('email').style.border = '1px solid red'
        return;
    }
    
    if (senhaUsuario == '') {
        alert('Campo inválido');
        senha =  document.getElementById('senha').style.border = '1px solid red'
        return;

    }
    
    if (senhaUsuario.length < 8) {
        alert('Sua senha  precisa ter pelo menos oito caracteres')
        senha = document.getElementById('senha').style.border = '1px  solid red';
        return;

    }else{
        alert('cadastro realizado com sucesso');
        usuarioCadastrado ++;
        window.location.href = 'login.html'
        const boasVindas = window.alert('Bem vindo ao nosso site' + nomeUsuario);
        boasVindas;

         usuarioCadastrado = {
            'nome': 'nomeUsuario',
            'email': 'emailUsuario',
            'senha': 'senhaUsuario'
        }
        usuarioCadastrado.push(usuarioCadastrado);
        usuarioCadastrado++;
        return console.log(usuarioCadastrado); 
    }
}

//====================================================================================================================


const  chances = 3;
const  tentativasRealizadas = 0;


function fazerLogin() {
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    
    document.getElementById('email').style.border = '';
    document.getElementById('senha').style.border = '';

    
    if (email.value == '') {
        alert('O campo de email está inválido. Por favor, preencha-o.');
        document.getElementById('email').style.border = '1px solid red';
        return;
    }

    
    if (email.indexOf('@') == -1 || !email.indexOf('.') == -1) {
        alert('O campo de email está incorreto. Por favor, insira um email válido.');
        document.getElementById('email').style.border = '1px solid red';
        return;
    }

    
    if (senha.value == '') {
        alert('O campo de senha está inválido. Por favor, forneça a senha cadastrada.');
        document.getElementById('senha').style.border = '1px solid red';
        return;
    }

    
    if (senha !== 'senhaCorreta') {
        tentativasRealizadas++;
        chances--;

        if (tentativasRealizadas == 2) {
            alert('Você tem mais uma chance para efetuar o login antes de cadastrar uma nova senha.');
        }

        if (tentativasRealizadas == 3) {
            alert('Você excedeu o número de tentativas. Por favor, crie uma nova senha para fazer o login.');
            return;
        }

        alert(`Senha incorreta. Você tem mais ${chances} tentativas.`);
        return;
    }

    
    else{
        alert('Login efetuado com sucesso!');
        window.location.href = '../html/index.html';
    }
   
}
