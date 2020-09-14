let add = (x, y) => x + y;
let sub = (x, y) => x - y;
let mul = (x, y) => x * y;
let div = (x, y) => x / y;
let rem = (x, y) => x % y;
let pwr = (x, y) => x ** y;

let rlSync = require("readline-sync");

let num1 = Number(rlSync.question("Enter the first number: "));
let num2 = Number(rlSync.question("Enter the second number: "));

console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`${num1} - ${num2} = ${sub(num1, num2)}`);
console.log(`${num1} * ${num2} = ${mul(num1, num2)}`);
console.log(`${num1} / ${num2} = ${div(num1, num2)}`);
console.log(`${num1} % ${num2} = ${rem(num1, num2)}`);
console.log(`${num1} ** ${num2} = ${pwr(num1, num2)}`);
