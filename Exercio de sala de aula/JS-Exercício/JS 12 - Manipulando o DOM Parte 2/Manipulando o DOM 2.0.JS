function Alterador1() {
    const item1 = document.getElementById('item1');
    item1.style.backgroundColor = 'aqua';
    console.log(item1);
}

function Alterador2() {
    let item2 = document.getElementsByClassName('item');
    item2[1].style.fontWeight = 'bold';
    console.log(items[1]);
}

function Alterador3() {
    let li = document.getElementsByTagName('li');
    console.log(li);
    for (let i = 0; i < li.length; i++) {
        if (i % 2) li[i].style.backgroundColor = 'darkgray';
        else li[i].style.backgroundColor = 'fff';
    }
}

function Alterador4() {
    let nome = document.getElementsByName('fitem');
    nome[0].style.borderBottom = 'solid 5px red';
    console.log(nome);
}

let item5 = document.getElementById('item5');

function Alterador5(){
    item5.remove();
}

let lista = document.getElementById('items');
let item4 = document.getElementById('item4');

function Alterador6(){
    lista.insertBefore(item5, item4.nextSibling);
    item5.textContent = 'Item recuperado';
}