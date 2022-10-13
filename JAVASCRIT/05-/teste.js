// while
let contador = 1;
while (contador <= 10) {
console.log(`Valor = ${contador}`);
contador++;
}
// while com decremento
console.clear();
let cont = 10;
while (cont >= 0) {
console.log(`Valor = ${cont}`);
cont--;
}
// do-while
console.clear();
let i = 10,
text = '';
do {
text += `O número é ${i}\n`;
i++;
} while (i < 10);
console.log(text);