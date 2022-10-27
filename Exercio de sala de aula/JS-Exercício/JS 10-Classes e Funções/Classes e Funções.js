class aluno {
    constructor(id, nome, idade, desistente) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.desistente = desistente;
    }
}

let aluno1 = new aluno (7, 'Samuel', 18, true);
let aluno2 = new aluno (4, 'Marcos', 13, true);
let aluno3 = new aluno (5, 'João', 15, false);

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);