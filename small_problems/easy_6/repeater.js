function repeater(string) {
  return string.split('').map(num => {
    return num + '' + num;
  }).join('');
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""