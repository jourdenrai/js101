function longestSentence(text) {
  let wordArr = text.split(/[.?!]/g).map(arr => {
    return arr.split(' ');
  });
  let longest = wordArr[0];
  for(let i = 1; i < wordArr.length; i++) {
    if(wordArr[0].length < wordArr[i].length) {
      longest = wordArr[i].length;
    }
  }
  console.log(longest.join(' ') + '.');
  console.log(`The longest sentence is ${longest.length} words`);
}

let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';


longestSentence(longText);

longestSentence("Where do you think you're going? What's up, Doc?");


longestSentence("To be or not to be! Is that the question?");