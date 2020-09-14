function stringy(num) {
  let string = '';
  for (let i = 0; i < num; i++) {
    let number = i % 2 === 0 ? 1 : 0;
    string += number;
  }
  return string;
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"