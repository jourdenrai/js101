function multiplyList(arr1, arr2) {
  return arr1.map((num,index) => {
    return num * arr2[index];
  });
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]