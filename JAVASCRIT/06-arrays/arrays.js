/*criando array unidimensional*/
var Array1 =["marcelo",15,"colin",47,true]
console.log(Array1);
console.log(Array1[2]);
console.clear()
Array1[3] = 80;
console.log(Array1)
/* array bidimensional*/
var array2 = [
    ["pipoca",10,false],
    ["String",20,true],
    ["Margarina", 12,false]
]
console.log(array2)
console.log(array2[2][0])
console.clear()
array2[1] [0] ="apple";
console.log(array2);

console.clear()
/*array de objetd carro*/
var carro=["uno",1998,"0km",false, 2]
var x= carro.toString();
console.log(typeof x)
console.log(typeof carro)
console.log(carro)
console.log(x)

console.clear()

var y =carro.join("?")
console.log(carro)
console.log(x)
console.log(y)
console.log(carro.length)

console.clear()
 
/*var t =carro.pop()
console.log(carro)
console.log(t)*/

/*insere uma informação no final do array*/
console.clear()
var u =carro.push('lego')
console.log(carro)
console.log(u)

/* remove o elemento no inicio do array*/
console.clear()
var p =carro.shift();
console.log(carro)
console.log(p)

/* Adiciona a informação no inicio do array*/
console.clear()
var w =carro.unshift("console.log")
console.log(carro)
console.log(w)

/* apagar um elemento do array
em uma posição pré selecionada*/

delete carro [1]
console.log(carro)