function multiplyAllPairs(arr1, arr2) {
  let array = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      array.push(num1 * num2);
    });
  });
  return array.sort((num1,num2) => num1 - num2);
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]