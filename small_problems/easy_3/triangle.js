function triangle(num) {
  let j = 1;
  for (let index = num - 1; index >= 0; index--) {
    console.log(`${" ".repeat(index)}${"*".repeat(j)}`);
    j++;
  }
}
triangle(9);
triangle(5);
