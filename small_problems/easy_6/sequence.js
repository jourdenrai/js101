function sequence(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  return array;
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]