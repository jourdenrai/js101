
let rlSync = require("readline-sync");

let bill = parseFloat(rlSync.question("What is the bill? "));
let tipRate = parseFloat(rlSync.question("What is the tip percentage? "));

let tip = bill * (tipRate / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

/** Pseudocode
ask user for bill total
ask user for tip percentage
calculate tip and new total


START
  SET bill,tipRate
  GET bill total from user
  GET tip percentage from user
  SET tip = bill * (tipRate / 100)
  SET total = bill + tip
  PRINT tip and total
END
 */