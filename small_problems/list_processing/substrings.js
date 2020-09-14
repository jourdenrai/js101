function substrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j <= string.length; j++) {
      arr.push(string.slice(i,j));
    }
  }
  return arr.filter(value => value !== '');
}

substrings('abcde');

