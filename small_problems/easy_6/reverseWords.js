function reverseWords(string) {
  return string.split(' ').map(word => {
    return word.length >= 5 ? word.split('').reverse().join('') : word;
  }).join(' ');
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"