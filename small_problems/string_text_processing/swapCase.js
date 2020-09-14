function swapCase(string) {
  return string.split('').map(letter => {
    if (letter >= 'a' && letter <= 'z') {
      return letter.toUpperCase();
    } else if (letter >= 'A' && letter <= 'Z') {
      return letter.toLowerCase();
    } else return letter;
  }).join("");
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv