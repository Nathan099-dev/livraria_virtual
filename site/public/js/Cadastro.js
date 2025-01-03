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