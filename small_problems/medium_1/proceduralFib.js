function fibonacci(num) {
  let previousTwo = [1, 1];
  for (let i = 3; i <= num; i++) {
    previousTwo = [previousTwo[1], previousTwo[0] + previousTwo[1]];
  }
  return previousTwo[1];
}

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050