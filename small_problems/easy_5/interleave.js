
function interleave(arr1, arr2) {
  let results = [];

  arr1.forEach((num,index) => {
    results.push(num,arr2[index]);
  });

  return results;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]