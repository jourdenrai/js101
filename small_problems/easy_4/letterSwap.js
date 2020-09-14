function swap(string) {
  let array = string.split(' ');

  let result = array.map( word => {
    return swapFirstAndLastCharacters(word);
  });

  return result.join(' ');
}

function swapFirstAndLastCharacters(word) {
  if (word.length === 1) return word;

  return word[word.length - 1] + word.slice(1,word.length - 2) + word[0];
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"