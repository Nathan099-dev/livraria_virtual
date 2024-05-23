const emailUsuario = document.getElementById('email')
const password = document.getElementById('senha');
const btn = document.querySelector('button');

btn.onclick = function fazerLogin(){
    if (emailUsuario.value == '') {
        alert('Campo obrigatório')
    }
}

fazerLogin()