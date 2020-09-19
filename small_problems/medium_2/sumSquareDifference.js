function sumSquareDifference(num) {
  let sum = 0;
  let sumSquare = 0;
  
  for(let i = 1; i <= num; i++) {
    sum += i;
    sumSquare += Math.pow(i, 2);
  }
  return Math.pow(sum, 2) - sumSquare;
}

sumSquareDifference(3);   
sumSquareDifference(10);     // 2640
sumSquareDifference(1);      // 0
sumSquareDifference(100);    // 25164150