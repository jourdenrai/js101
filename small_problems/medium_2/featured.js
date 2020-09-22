function featured(num) {
  let MAX_NUMBER = 9876543201;
  if (num >= MAX_NUMBER) return 'There is no possible number.';
  while (true) {
    num++;
    if (checkDigits(num) && isValid(num)) break;
  }
  return num;
}
function checkDigits(num) {
  let obj = {};
  String(num).split('').forEach(val => {
    if (obj[val]) obj[val] += 1;
    else obj[val] = 1;
  });
  return Object.values(obj).every(n => n <= 1);
}
function isValid(num) {
  return num % 2 === 1 && num % 7 === 0;
}

featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."

/* Understand the problem
    input: number
    output: number
    rules:
      number is an odd number
        multiple of 7
        all of its digits occuring exactly once
      largest possible number is 9876543201

    Examples/Test Cases

    featured(12);    =>      21
    featured(20);    =>      21
    featured(21);    =>      35

    Data Structure/ Algorithms
*/
