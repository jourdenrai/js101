function copyNonDupsTo(resultArray, array) {
  array.forEach(element => {
    if (!resultArray.includes(element)) {
      resultArray.push(element);
    }
  });
}
function union(arr1, arr2) {
  let arr = [];
  copyNonDupsTo(arr, arr1);
  copyNonDupsTo(arr, arr2);
  console.log(arr);
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]