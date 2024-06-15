//função para cadastro de usuário

function cadastro_usuario(){
    const usuarioCadastrado = 0;
    const nomeUsuario = nome.value;
    const emailUsuario = email.value;
    const senhaUsuario = senha.value;

    //validação do nome de usuário
    if (nomeUsuario == '') {
        alert('Insira o seu nome');
        nome = document.getElementById('nome').style.border = "1px solid red";
        return;

    //validação do email do  usuário
    }else if (emailUsuario == '') {
        alert('insira um email')
        email = document.getElementById('email').style.border = '1px solid red';
        return;

    }else  if (emailUsuario.indexOf("@") == -1 || emailUsuario.indexOf('.') == -1) {
        alert('Este endereço não é  um email válido');
        document.getElementById('email').style.border = '1px solid red'
        return;

    //validação da senha do  usuário
    }else if (senhaUsuario == '') {
        alert('Campo inválido');
        document.getElementById('senha').style.border = '1px solid red'
        return;

    }else if (senhaUsuario.length < 8) {
        alert('Sua senha  precisa ter pelo menos oito caracteres')
        document.getElementById('senha').style.border = '1px  solid red';
        return;

    //Caso todas as condições tenham sido  atendidas corretamente
    }else{
        alert('cadastro realizado com sucesso');
        usuarioCadastrado ++;
        window.location.href = 'login.html'
        const boasVindas = window.alert('Bem vindo ao nosso site' + nomeUsuario)
        return;
    }
}