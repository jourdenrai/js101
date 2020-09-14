function doubleOddNumWithOddIndices(numbers) {
  return numbers.map((num,index) => {
    if (index % 2 === 0) {
      return num * 2;
    } else return num;
  });
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleOddNumWithOddIndices(myNumbers);  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]