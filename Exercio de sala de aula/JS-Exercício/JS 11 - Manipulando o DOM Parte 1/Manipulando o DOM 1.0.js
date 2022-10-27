alert('Bem-Vindo');

// JavaScript e DOM
// objeto document
console.log(document);

// Acessar informações
console.clear();
console.log(document.domain);
console.log(document.section);
console.log(document.article);
console.log(document.title);
console.log(document.head);
console.log(document.body);

// Alterar o título
document.title = 'primeiro elemento';

//Cria um elemento h1 e p no section

var secao = document.createElement('section');
document.body.appendChild(secao);
let heading = document.createElement('h1');
secao.appendChild(heading);
heading.innerHTML = 'Homem de Ferro';
var paragrafo = document.createElement('p');
secao.appendChild(paragrafo);
paragrafo.innerHTML = 'O personagem surgiu em 1963, como resposta a um desafio pessoal de Stan Lee. O roteirista queria desenvolver um personagem que pudesse ser odiado, para, então, ser amado pelo público.';

//Cria um elemento h1 e p no article

var artigo = document.createElement('article');
document.body.appendChild(artigo);
let artigos = document.createElement('h1');
artigo.appendChild(artigos);
artigos.innerHTML = 'Capitão America';
var paragrafo2 = document.createElement('p');
artigo.appendChild(paragrafo2);
paragrafo2.innerHTML =  'O Capitão América surgiu durante a Segunda Guerra Mundial, para combater nazistas, mas foi revivido na década de 60 e liderou os Vingadores. O Capitão América é a identidade heroica de Steve Rogers. Além disso, é considerado como o primeiro Vingador';
