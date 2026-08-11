const nome = prompt('Digite seu nome: ');
const get_alert = document.getElementById('title');

if (nome != null && nome != ''){
    get_alert.innerHTML = `Olá,<br>${nome}`;
}

