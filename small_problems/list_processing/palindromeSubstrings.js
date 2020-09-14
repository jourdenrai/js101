function substrings(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j <= string.length; j++) {
      arr.push(string.slice(i,j));
    }
  }
  return arr.filter(value => value !== '');
}

function palindrome(string) {
  return string === string.split('').reverse().join('');
}

function palindromes(string) {

  return substrings(string).map(sub => {
    if (sub.length >= 2 && palindrome(sub)) {
      return sub;
    } else return 0;
  }).filter(val => val !== 0);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');

palindromes('knitting cassettes');