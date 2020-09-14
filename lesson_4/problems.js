/* Problem 1 */
//expression evaulates as truthy so method returns original array

/* Problem 2 */
//no return value = array of undefined length of original array

/* Problem 3 */
//returns array of num * num

/* Problem 4 */
//the length of the last element. In this case 11.

/* Problem 5 */
// 2,4,6 assignment expression gets applied to elements.
// returns true because elements are truthy

/* Problem 6 */
// yes its destructive, fills array with 1's between indices 1 and 5.

/* Problem 7 */
// array containing 'undefined' and 'bear'
// map returns value on every element even if no return value is given.

/* Problem 8 */
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
let obj = {};

flintstones.forEach((word,index) => {
  obj[word] = index;
});

console.log(flintstones);

/* Problem 9 */
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

console.log(Object.values(ages).reduce((a,b) => a + b, 0));

/* Problem 10 */
console.log(Math.min(...(Object.values(ages))));

/* Problem 11 */
let statement = "The Flintstones Rock";
obj = {};
statement.split('').filter(val => val !== ' ').forEach(char => {
  if (obj[char]) {
    obj[char] += 1;
  } else obj[char] = 1;
});
console.log(obj);