const NUM_WORDS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
}
function wordToDigit(string) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    string = string.replace(regex, NUM_WORDS[word])
  });
  return string;
}

wordToDigit('Please call me at five five five one two three four. Thanks.');