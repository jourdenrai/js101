

function randomNumber(min, max) {
  if (min > max) {
    return Math.floor(Math.random() * (min - max + 1)) + max;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let age = randomNumber(120, 20);
console.log(`Teddy is ${age} years old!`);