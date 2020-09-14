function sumOfSums(array) {
  let total = 0;

  for (let i = 1; i <= array.length; i++) {
    total += array.slice(0,i).reduce((acc, num) => acc + num);
  }

  return total;
}


sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35