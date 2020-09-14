function twice(num) {
  if (isDouble(num)) {
    return num;
  } else return num * 2;
}
function isDouble(num) {
  let stringNum =  String(num);
  let center = Math.floor(stringNum.length / 2);
  let start = stringNum.slice(0, center);
  let end = stringNum.slice(center);

  return start === end;
}
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676