/*
ask the user for the first number
ask the user for the second number
ask the user for the operation to perform
perform the operation on the two number
print the result to the terminal
*/
const MESSAGES = require("./calculator_messages.json");
const rlSync = require("readline-sync");
const LANGUAGE = "es";

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}
function prompt(message) {
  console.log(`=> ${message}`);
}
function invalidNumber(number) {
  return Number.isNaN(number);
}
prompt(messages("welcome", LANGUAGE));
while (true) {
  prompt(messages("number1", LANGUAGE));
  let num1 = parseInt(rlSync.question(), 10);

  while (invalidNumber(num1)) {
    prompt(messages("number1", LANGUAGE));
    num1 = parseInt(rlSync.question(), 10);
  }
  prompt(messages("number2", LANGUAGE));
  let num2 = parseInt(rlSync.question(), 10);
  while (invalidNumber(num2)) {
    prompt(messages("number2", LANGUAGE));
    num2 = parseInt(rlSync.question(), 10);
  }

  prompt(messages("operator", LANGUAGE));
  let operation = rlSync.question().toLowerCase();

  while (!["a", "s", "m", "d"].includes(operation)) {
    prompt(messages("invalid2", LANGUAGE));
    operation = rlSync.question().toLowerCase();
  }

  let result;
  switch (operation) {
    case "a":
      result = num1 + num2;
      break;
    case "s":
      result = num1 - num2;
      break;
    case "m":
      result = num1 * num2;
      break;
    case "d":
      result = num1 / num2;
      break;
  }

  prompt(`${messages("result", LANGUAGE)} ${result}`);

  prompt(messages("continue", LANGUAGE));
  let answer = rlSync.question().toLowerCase();

  if (answer !== "y" || answer !== "s") break;
}
