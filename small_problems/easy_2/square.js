
let multiply = (num1, num2) => num1 * num2;

let square = (num, power) => multiply(num, num) * (power - 1);

console.log(square(5, 2) === 25); // logs true
console.log(square(-8, 2) === 64); // logs true
console.log(square(2, 3) === 8); //logs true
