/* Array de objetos */

let alunos = [
    {
        nome: 'Gabriel',
        idade: 13,
        notas: [7, 5, 10, 8],
        sala: '8C',
        escola: 'E.E Francisco Alves Mourão',
        endereco: {
            rua: 'Rua Davide Perez',
            numero: 10,
            cidade: 'São Paulo',
            estado: 'SP',
        },
        escolaridade: '2 grau do Ensino Médio',
        responsável: 'Matheus - Pai',
    },
    {
        nome: 'Mayara',
        idade: 15,
        notas: [7, 8, 7, 8],
        sala: '1A',
        escola: 'E.E Olga Fonseca',
        endereco: {
            rua: 'Avenida Alda',
            numero: 28,
            cidade: 'São Paulo',
            estado: 'SP',
        },
        escolaridade: '1 grau do Ensino Médio',
        responsável: 'Maria - Mãe',
    },
    {
        nome: 'Daniel',
        idade: 17,
        notas: [5, 8, 7, 7],
        sala: '3D',
        escola: 'E.E João Ramalho',
        endereco: {
            rua: 'Rua alameda salete',
            numero: 89,
            cidade: 'São Paulo',
            estado: 'SP',
        },
        escolaridade: '1 grau do Ensino Médio',
        responsável: 'Marcos - Pai',
    },
];

let soma = 0;
let media = 0;
let aprov = 0;

for (let x = 0; x < alunos.length; x++) {
    soma = 0;
    for (let i = 0; i < alunos[x].notas.length; i++) soma += alunos[x].notas[i];

    media = soma / alunos[x].notas.length;
    console.log(`media ${media}`);

    aprov = media >= 7 ? "aprovado" : "reprovado";
    console.log(` Aluno ${aprov}`)

}