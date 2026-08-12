const btn_add = document.getElementById('btn-add');
btn_add.addEventListener('click',()=> add_card());

var cont = 0;

function add_card(){
    let divAdd = document.createElement('div');
    
    divAdd.setAttribute('class', 'divAdd');
    divAdd.textContent = `Div ${cont + 1} criada.`;
    
    document.getElementById('div-principal').appendChild(divAdd); // insere no container existente; ultimo da lista
    cont += 1;
}
