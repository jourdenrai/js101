let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};
function selectFruit(obj) {
  let fruitObj = {};
  for (const key in obj) {
    if (obj[key] === 'Fruit') {
      fruitObj[key] = "Fruit";
    }
  }
  return fruitObj;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }