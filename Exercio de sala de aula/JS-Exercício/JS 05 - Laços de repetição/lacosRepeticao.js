// (1) Mostrar no console os números de 1 a 50. (While)
let contador = 1;

while (contador <= 50) {
    console.log(`Valor = ${contador}`);
    contador++;
}

//(2) Mostrar no console contagem regressiva de 10 até 0 (Do While)

let contagem = 10,
    regressiva = '';

do {
    regressiva += ` contagem ${contagem}\n`;
    contagem--;
} while (contagem >= 0);
console.log(regressiva);

//(3) Mostrar no console os números pares de 1 a 100. (For)

for (let i = 1; i < 100; i++) {
    if ( i % 2 == 1) {
        i = i + 1;
    }
    console.log(` Números pares ${i}`);
}