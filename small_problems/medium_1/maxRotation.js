function rotateRightmostDigits(number, count) {
  let string = String(number);
  let first = string.slice(0, string.length - count);
  let end = string.slice(string.length - count);
  return Number(first + rotate(end));
}

function rotate(string) {
  return string.slice(1) + string[0];
}

function maxRotation(number) {
  let numberDigits = String(number).length;
  for (let i = numberDigits; i >= 2; i--) {
    number = rotateRightmostDigits(number, i);
  }
  return number;
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845