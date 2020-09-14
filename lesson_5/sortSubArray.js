let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

//Ascending
console.log(arr.map(arr => {
  return arr.sort((a,b) => {
    if (typeof a === Number) {
      return a - b;
    } else return a > b;
  });
}));

//Descending Order
console.log(arr.map(arr => {
  return arr.sort((a,b) => {
    if (typeof a === Number) {
      return b - a;
    } else return a < b;
  });
}));
