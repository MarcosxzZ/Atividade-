/*Criação da classe carro*/ 
class carro {
    constructor(nome,ano,porta,janelas){
    this.nome = nome;
    this.ano =ano;
    this.porta=porta;
    this.janelas=janelas;
   }

   /*Metodo que retorna a idade do meu carro*/
   idadecarro(anoatual){
    return anoatual -this.ano;
   }

}

/*Pegar o ano atual*/
let dataHoje = new Date();
let ano =dataHoje.getFullYear()
 

/*Criação de objetos que herda a caracteristicas da classe carro*/

let carro1 = new carro("Celta",2002,2,6)
let carro2 = new carro ("Veloster",2016,3,4)

console.log(carro1)
console.log(carro1.nome)

var exemplo = carro1.ano

/*Retornar a idade do  objetos  carro1 */
console.log(carro1.idadecarro(ano))