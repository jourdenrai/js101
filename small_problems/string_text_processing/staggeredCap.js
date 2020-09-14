function staggeredCase(string) {
  let toUpper = true;
  return string.split('').map((char) => {
    char = char.toLowerCase();
    if (char >= 'a' && char <= 'z') {
      if (toUpper) {
        toUpper = false;
        return char.toUpperCase();
      } else {
        toUpper = true;
        return char.toLowerCase();
      }
    } else return char;
  }).join("");
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 NuMbErS"