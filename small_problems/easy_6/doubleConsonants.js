
function doubleConsonants(string) {
  return string.split('').map(element => {
    return /[bcdfghjklmnpqrstvwxys]/gi
      .test(element) ? element + element : element;
  }).join('');
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""