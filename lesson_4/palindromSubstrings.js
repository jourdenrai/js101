function substrings(str) {
  let result = [];
  let startingIndex = 0;

  while (startingIndex <= str.length - 2) {
    let numChars = 2;
    while (numChars <= str.length - startingIndex) {
      let substring = str.slice(startingIndex, startingIndex + numChars);
      result.push(substring);
      numChars += 1;
    }

    startingIndex += 1;
  }

  return result;
}

function isPalidrome(str) {
  return str === str.split('').reverse().join('');
}

function palindromeSubstrings(str) {
  return substrings(str).map(substring => {
    if (isPalidrome(substring)) {
      return substring;
    } else return 0;
  }).filter(val => val !== 0);
}

palindromeSubstrings("supercalifragilisticexpialidocious"); // ["ili"]
palindromeSubstrings("abcddcbA");   // ["bcddcb", "cddc", "dd"]
palindromeSubstrings("palindrome"); // []
palindromeSubstrings("");           // []