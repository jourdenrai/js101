let rlSync = require("readline-sync");

console.log("What is your age? ");
let age = rlSync.question();
console.log("What age would you like to retire? ");
let retireAge = rlSync.question();

let date = new Date();

let currentYear = date.getFullYear();

let workYearsToGo = retireAge - age;
let retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);