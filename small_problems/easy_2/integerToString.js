
const DIGITS = ['0','1','2','3','4','5','6','7','8','9'];

function integerToString(num) {
  let result = '';

  do {
    let rem = num % 10;
    num = Math.floor(num / 10);
    result = DIGITS[rem] + result;
  } while (num > 0);

  return result;
}

console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"
console.log(integerToString(1234567890));      // "1234567890"