let advice = "Few things in life are as important as house important training your pet dinosaur.";
const regex = /important/g;
console.log(advice.replace(regex,'urgent'));

let numbers = [1, 2, 3, 4, 5];
//console.log(numbers.slice().reverse());
let array = [];
numbers.forEach(num => {
  array.unshift(num);
});
console.log(array);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
console.log([...numbers].sort((num1, num2) => num2 - num1));
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;
let number2 = 95;
console.log(numbers.includes(number1));
console.log(numbers.includes(number2));

let famousWords = 'seven years ago...';

famousWords = `Four score and ${famousWords}`;
console.log(famousWords);
console.log(famousWords.slice('Four score and'));

let numArray = [1,2,3,4,5];
numArray.splice(2,1);
console.log(numArray);

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let concatted = [];
//concatted = concatted.concat(flintstones).split('');
//concatted = [].concat(...flintstones);
// concatted = flintstones.reduce((accum, element) => {
//   return accum.concat(element);
// },[]);
flintstones.forEach(element => {
  concatted = concatted.concat(element);
});
console.log(concatted);

flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
console.log(Object.entries(flintstones).filter(pair => pair[0] === 'Barney').shift());

numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false
console.log(Array.isArray(numbers));
console.log(Array.isArray(table));

let title = "FlintStone Family Members";
console.log(`${' '.repeat(Math.floor((40 - title.length) / 2))}${title}`);

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.match(/t/) ? statement1.match(/t/g).length : false);
console.log(statement2.match(/t/) ? statement2.match(/t/g).length : false);
// f
fconsole.log(statement1.split('').filter(char => char === 't').length);fg