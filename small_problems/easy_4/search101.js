let rlSync = require("readline-sync");
let numArray = [];
let end = 'th';
for (let i = 1; i < 6; i++) {
  switch (i) {
    case 1:
      end = 'st';
      break;
    case 2:
      end = 'nd';
      break;
    case 3:
      end = 'rd';
      break;
    default:
      end = 'th';
  }
  console.log(`Enter the ${i}${end} number: `);
  numArray.push(rlSync.question());
}
console.log(`Enter the last number: `);
let last = rlSync.question();

const greaterThan = (element) => element > last;

console.log(numArray.some(greaterThan));

if (numArray.includes(last)) {
  console.log(`The number ${last} appears in ${numArray.join(',')}.`);
} else {
  console.log(`The number ${last} does not appear in ${numArray.join(',')}.`);
}
