//mortage/car loan calculator

/*
  get
    the loan amount
    the annual percentage rate(apr)
    loan duration
  calculate
  monthly interest
  loan duration in months

  formula
    let m = p * (j / (1 - Math.pow((1 + j), (-n))));
    m = monthly payment
    p = loan amount
    j = monthly interest rate
    n = loan duration in months

*/

const rlSync = require("readline-sync");
function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(num) {
  return num.trim() === "" || Number(num) < 0 || Number.isNaN(Number(num));
}
prompt("Welcome to Mortage/Car Loan Calculator!");
while (true) {
  prompt("Enter loan amount: ");
  let loanAmount = rlSync.question();

  while (invalidNumber(loanAmount)) {
    prompt("That is not a valid number. Try again.");
    loanAmount = rlSync.question();
  }
  prompt("Enter APR (5 for 5% or 2.5 for 2.5%): ");
  let interestRate = rlSync.question();

  while (invalidNumber(interestRate)) {
    prompt("That is not a valid number. Try again.");
    interestRate = rlSync.question();
  }

  prompt("Enter duration of loan in years: ");
  let years = rlSync.question();

  while (invalidNumber(years)) {
    prompt("That is not a valid number. Try again.");
    years = rlSync.question();
  }

  let apr = Number(interestRate) / 100;
  let monthlyInterest = apr / 12;
  let months = Number(years) * 12;

  let monthlyPayment =
    loanAmount *
    (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -months)));

  console.log(`$${monthlyPayment.toFixed(2)}`);

  prompt("Would you like to go again? y/n");
  let answer = rlSync.question().toLowerCase();

  while (answer === "y" || answer === "n") {
    prompt("Please enter y for yes or n for no");
    answer = rlSync.question().toLowerCase();
  }

  if (answer[0] === "y") break;
}
