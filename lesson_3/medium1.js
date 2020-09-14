// let string = 'The Flintstones Rock!';

// let index = 0;
// let space = 0;
// while (index < 10) {
//   console.log(`${' '.repeat(space)}${string}`);
//   index++;
//   space++;
// }
for (let padding = 1; padding <= 10; padding++) {
  console.log(' '.repeat(padding) + "The Flintstones Rock!");
}


let munstersDescription = "The Munsters are creepy and spooky.";

let array = munstersDescription.split('').map(char => {
  if (char === char.toUpperCase()) {
    return char.toLowerCase();
  } else return char.toUpperCase();
}).join('');

console.log(array);


function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

factors(20);

//console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));