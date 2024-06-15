// Variáveis para controle de tentativas
const  chances = 3;
const  tentativasRealizadas = 0;

// Função para fazer login
function fazerLogin() {
    // Recuperar os valores dos campos de email e senha
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Resetar bordas
    document.getElementById('email').style.border = '';
    document.getElementById('senha').style.border = '';

    // Condição 1: Campo email vazio
    if (email.trim() === '') {
        alert('O campo de email está inválido. Por favor, preencha-o.');
        document.getElementById('email').style.border = '1px solid red';
        return;
    }

    // Condição 2: Email sem '@' ou '.'
    if (email.indexOf('@') == -1 || !email.indexOf('.') == -1) {
        alert('O campo de email está incorreto. Por favor, insira um email válido.');
        document.getElementById('email').style.border = '1px solid red';
        return;
    }

    // Condição 3: Campo senha vazio
    if (senha.trim() === '') {
        alert('O campo de senha está inválido. Por favor, forneça a senha cadastrada.');
        document.getElementById('senha').style.border = '1px solid red';
        return;
    }

    // Condição 4: Senha incorreta
    if (senha !== 'senhaCorreta') {
        tentativasRealizadas++;
        chances--;

        if (tentativasRealizadas === 2) {
            alert('Você tem mais uma chance para efetuar o login antes de cadastrar uma nova senha.');
        }

        if (tentativasRealizadas === 3) {
            alert('Você excedeu o número de tentativas. Por favor, crie uma nova senha para fazer o login.');
            return;
        }

        alert(`Senha incorreta. Você tem mais ${chances} tentativas.`);
        return;
    }

    // Caso todas as condições sejam atendidas
    else{
        alert('Login efetuado com sucesso!');
        window.location.href = 'html/index.html';
    }
   
}
