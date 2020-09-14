function findFibonacciIndexByLength(length) {
  let start = 1;
  let next = 1;
  let index = 2;
  let fib;

  do {
    fib = start + next;
    index += 1;
    start = next;
    next = fib;
  } while (String(fib).length < length);

  return index;
}


findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74