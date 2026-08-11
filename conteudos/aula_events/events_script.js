const btn_add = document.getElementById('btn-add');
btn_add.addEventListener('click',()=> add_card());

var cont = 0;

function add_card(){
    let divAdd = document.createElement('div');
    divAdd.innerHTML = `Div ${cont} criada.`
    divAdd.setAttribute = (id, 'divAdd');  
    divAdd = document.getElementById('')
     
    cont += 1;
}