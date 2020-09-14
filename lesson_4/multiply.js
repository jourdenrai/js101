function multiply(numArray, multiple) {
  return numArray.map(num => {
    return num * multiple;
  });
}

let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]