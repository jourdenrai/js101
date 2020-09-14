function logInBox(string, max = string.length) {
  let horizontal = `+${"-".repeat(max + 2)}+`;
  let vertical = `|${" ".repeat(max + 2)}|`;

  console.log(horizontal);
  console.log(vertical);
  string = string.slice(0, max);
  console.log(`| ${string} |`);
  console.log(vertical);
  console.log(horizontal);
}

logInBox("");
