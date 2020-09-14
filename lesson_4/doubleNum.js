
function doubleNumbers(numArray) {
  numArray.map(num => {
    return num * 2;
  });
}
let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);                // => [1, 4, 3, 7, 2, 6]