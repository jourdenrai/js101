function isBalanced(string) {
  let parens = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      parens++;
    } else if (string[i] === ")") {
      parens--;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);