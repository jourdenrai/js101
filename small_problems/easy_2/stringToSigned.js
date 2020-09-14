const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let numArray = string.split("").map((char) => DIGITS[char]);

  let total = 0;

  numArray.forEach((num) => (total = (10 * total) + num));

  return total;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '+':
      return stringToInteger(string.slice(1, string.length));
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
