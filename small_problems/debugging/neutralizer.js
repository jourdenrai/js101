function neutralize(sentence) {
  let words = sentence.slice().split(" ");

  return words.filter(word => {
    if (!isNegative(word)) {
      return true;
    } else return false;
  }).join(' ');
}

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);
// Expected: These cards are part of a board game.
// Actual: These boring cards are part of a board game.