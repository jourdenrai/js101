function buyFruit(fruitList) {
  return fruitList.map(pair => repeat(pair)).reduce((a,b) => a.concat(b));
}
function repeat(pair) {
  let fruit = pair[0];
  let num = pair[1];
  let result = [];

  for (let i = 0; i < num; i++) {
    result.push(fruit);
  }

  return result;
}
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]