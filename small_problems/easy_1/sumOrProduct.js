
function computeSum(num) {
  let total = 0;

  for (let index = 0; index <= num; index += 1) {
    total += index;
  }
  //total = array.reduce((acc, currVal) => acc + currVal);
  return total;
}

function computeProduct(num) {
  let total = 1;

  for (let index = 1; index <= num; index += 1) {
    total *= index;
  }
  //total = array.reduce((acc, currVal) => acc * currVal);
  return total;
}

let rlSync = require("readline-sync");

console.log("Please enter an integer greater than 0: ");
let input = parseInt(rlSync.prompt(), 10);

console.log("Enter 's' for sum, or 'p' for product : ");
let choice = rlSync.prompt();

if (choice === "s") {
  let sum = computeSum(input);
  console.log(`The sum of the integers between 1 and ${input} is ${sum}.`);
} else if (choice === "p") {
  let product = computeProduct(input);
  console.log(
    `The product of the integers between 1 and ${input} is ${product}.`
  );
} else {
  console.log("Error. Please try again.");
}


