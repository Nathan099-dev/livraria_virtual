function cadastro_usuario(){
    const nomeUsuário = nome.value;
    const emailUsuario = email.value;
    const senhaUsuario =  senha.value;

    if (nomeUsuário.value == null) {
        window.alert('Insira seu nome neste campo')
        nomeUsuário.style.borderColor = 'red'
    }
}