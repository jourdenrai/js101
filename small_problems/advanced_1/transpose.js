const matrix = [
  [1, 5, 8, 5],
  [4, 7, 2, 0],
  [3, 9, 6, 1]
];

function transpose(matrix) {
  let newMatrix = matrix.slice();
  let result = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    count = matrix[i].length;
  }
  for (let j = 0; j < count; j++) {
    let array = [];
    for (let i = 0; i < newMatrix.length; i++) {
      array.push(newMatrix[i][j]);
    }
    result.push(array);
  }
  return result;
}

let newMatrix = transpose(matrix);


console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6], [5, 0, 1]]
console.log(matrix);         // [[1, 5, 8, 5], [4, 7, 2, 0], [3, 9, 6, 1]]

transpose([[1, 2, 3, 4]]);            // [[1], [2], [3], [4]]
transpose([[1], [2], [3], [4]]);      // [[1, 2, 3, 4]]
transpose([[1]]);                     // [[1]]

transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]