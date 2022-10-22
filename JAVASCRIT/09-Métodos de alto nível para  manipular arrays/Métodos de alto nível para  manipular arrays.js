/*metodo ForEach()*/

var frutas = ["banana","maca","kiwi","melancia"]
/*metodo ForEach() é ultizado para percorrer uma array e aplicar alguma mudança ou configuraçaõ*/

frutas.forEach(minhaFuncao)

function minhaFuncao(valor,indice){
    
console.log(`O valor é ${valor}`)
console.log(`O indice é ${indice}`)

}
const alunos= [
    {
        id: 1,
        nome:"marcelo",
        passou:true,
    },
    {
        id: 2,
        nome:"agatha",
        passou:false,
    },
    {
        id: 3,
        nome:"vitor",
        passou:false,
    },
];

alunos.forEach((aprovados => console.log(aprovados.passou)))

/*metodo map()*/

const numeros = [2,7,8,50,34]
const novosnumeros =numeros.map(Math.sqrt);
console.log(novosnumeros)

console.clear()
const cachorro= [
    {
        id: 1,
        nome:"bololinho",
        idade:11,
    },
    {
        id: 2,
        nome:"Toby",
        idade:7,
    },
    {
        id: 3,
        nome:"Buck",
        idade:6,
    },
];

console.log(cachorro)

const mapcachorro = cachorro.map((nomeDog)=> {return nomeDog.nome
})


console.log(mapcachorro)

console.clear()
/*Metodo filter () percorre o arry e retorna as informações que passam no filtro */

const idade =[5,9,10,15,25,35,45,89]
/*Percorrer o array e retorna apenas as idades abaixo de 30 */

let filtraIdade =idade.filter((idade) => {
    return idade <30
}) 
console.log(filtraIdade)
/*Método filter()*/
console.clear()
console.log(
    cachorro.find((procuraNome) => 
    {
        return procuraNome.nome ==='Buck';
    })
)