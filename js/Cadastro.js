const userName = document.getElementById('nome');
const emailUsuario = document.getElementById('email')
const password = document.getElementById('senha');
const btn = document.querySelector('button');

btn.onclick = function cadastro_usuario(event){
    event.preventDefault();

    if (userName.value == '') {
        alert('Campo nome, obrigatório')
        userName.style.borderColor = 'red'

    }else{
       userName.style.boderColor = 'green'
    }

    if (emailUsuario.value == '') {
       alert('Campo email, obrigatório')
       emailUsuario.style.borderColor = 'red'

    }else{
        emailUsuario.style.borderColor = 'green'
    }

    if (password.value == '') {
        alert('Campo senha, Obrigatório')
        password.style.borderColor = 'red'

    }else{
        password.style.borderColor = 'green';
        window.location = '../html/login.html'
        window.alert('Cadastro realizado com sucesso')
    }


}
cadastro_usuario();