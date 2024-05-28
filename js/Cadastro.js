//função para cadastro de usuário
function cadastro_usuario(){
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    //validação do nome de usuário
    if (nome.value == '') {
        alert('Insira o seu nome');
        nome = document.getElementById('nome').style.border = "1px solid red";
        return;

    //validação do email do  usuário
    }else if (email.value = '') {
        alert('insira um email')
        email = document.getElementById('email').style.border = '1px solid red';
        return;

    }else  if (email.indexOf("@").value == -1 || email.indexOf('.').value == -1) {
        alert('Este endereço não é  um email válido');
        email = document.getElementById('email').style.border = '1px solid red'
        return;

    //validação da senha do  usuário
    }else if (senha.value == '') {
        alert('Campo inválido');
        senha = document.getElementById('senha').border = '1px solid red'
        return;

    }else if (senha.length < 8) {
        alert('Sua senha  precisa ter pelo menos oito caracteres')
        senha = document.getElementById('senha').style.border = '1px  solid red';
        return;

    //Caso todas as condições tenham sido  atendidas corretamente
    }else{
        alert('cadastro realizado com sucesso')
        nome =  document.getElementById('nome').style.border = "1px solid green";
        email = document.getElementById('email').style.border = "1px solid green";
        senha = document.getElementById('senha').style.border = "1px solid green";

        window.location.href = 'html/ login.html'
    }
}