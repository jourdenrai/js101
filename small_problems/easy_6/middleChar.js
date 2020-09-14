function centerOf(string) {
  let center = Math.floor(string.length / 2);
  return string.length % 2 === 1 ? string[center] :
    string[center - 1] + string[center];
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"