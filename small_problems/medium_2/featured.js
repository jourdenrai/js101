function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }
    featuredNum += 14;
  } while (featuredNum < MAX_FEATURED);

  return 'There is no possible number.';
}
function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);
  return number;
}
function allUnique(number) {
  let obj = {};
  String(number).split('').forEach(val => {
    if (obj[val]) obj[val] += 1;
    else obj[val] = 1;
  });
  return Object.values(obj).every(n => n <= 1);
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
