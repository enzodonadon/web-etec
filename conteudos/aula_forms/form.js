const exibir_msg = document.getElementById('login-form')
exibir_msg.addEventListener('click', efetuar_login());

function efetuar_login() {
    const email = document.getElementById('femail').value;
    const senha = document.getElementById('fpassword').value;

    if (email == "admin@gmail.com" && senha == "12345") {
        const divMensagem = document.getElementById('mensagemBemVindo');
        divMensagem.style.display = 'block'; // Mostra a div
    } else {
        alert('Email ou senha errados!');
    }
}
