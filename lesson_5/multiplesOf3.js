let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

console.log(arr.map(array => {
  return array.filter(num => num % 3 === 0);
}));
