function efetuar_login() {
    const email = document.getElementById('femail').value;
    const senha = document.getElementById('fpassword').value;

    if (email == "admin@gmail.com" && senha == "12345") {
        alert('Bem-vindo User!');
    } else {
        alert('Email ou senha errados!')
    }
}