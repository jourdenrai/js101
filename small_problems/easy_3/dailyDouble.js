function crunch(text) {
  let result = "";
  for (let index = 0; index < text.length; index++) {
    if (text[index] !== text[index + 1]) {
      result += text[index];
    }
  }
  return result;
}
crunch("ddaaiillyy ddoouubbllee"); // "daily double"
crunch("4444abcabccba"); // "4abcabcba"
crunch("ggggggggggggggg"); // "g"
crunch("a"); // "a"
crunch(""); // ""
