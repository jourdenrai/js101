
function halvsies(array) {
  let result = [];
  let half = Math.ceil(array.length / 2);

  result.push(array.slice(0, half));
  result.push(array.slice(half));

  return result;
}

halvsies([1, 2, 3, 4]); // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]); // [[1, 5, 2], [4, 3]]
halvsies([5]); // [[5], []]
halvsies([]); // [[], []]
