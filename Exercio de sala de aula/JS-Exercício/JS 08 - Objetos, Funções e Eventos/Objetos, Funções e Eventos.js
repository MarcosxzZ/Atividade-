function calculo(a = 3, b = 4, c = -5) {
    const delta = b * b -4 * a * c;

const x1 = (-b + Math.sqrt(delta))/(2 * a);
const x2 = (-b - Math.sqrt(delta))/(2 * a);

console.log(x1);
console.log(x2);
}
