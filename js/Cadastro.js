const userName = document.getElementById('nome');
const emailUsuario = document.getElementById('email')
const password = document.getElementById('senha');
const btn = document.querySelector('button');

btn.onclick = function cadastro_usuario(event){
    event.preventDefault();

    if (userName.value == '') {
        userName.classList.add('invalid');

    }else{
        userName.classList.remove('invalid');
    }

    if (emailUsuario.value == '') {
        emailUsuario.classList.add('invalid');

    }else{
        emailUsuario.classList.remove('invalid');
    }

    if (password.value == '') {
        password.classList.add('invalid');

    }else{
        password.classList.remove('invalid');
        window.location = '../html/login.html'
        window.alert('Cadastro realizado com sucesso')
    }


}
cadastro_usuario();