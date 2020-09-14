let numbers = [1, 2, 3, 4];
// let len = numbers.length;
// for (let i = 0; i < len; i++) {
//   numbers.pop();
// }
// while (numbers.length) {
//   numbers.pop();
// }
//numbers = numbers.filter(num => num === true);
numbers.splice(0,numbers.length);
console.log(numbers);

console.log([1, 2, 3] + [4, 5]);

//shallow copy vs deep copy

// function isColorValid(color) {
//   return color === "blue" || color === "green";
// }
let isColorValid = (color) => color === ['blue','green'].includes(color);