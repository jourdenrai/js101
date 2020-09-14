let rlSync = require("readline-sync");
const VALID_CHOICES = ["r", "p", "s", "S", "l"];
const PROMPT_CHOICES = [
  "(r)ock",
  "(p)aper",
  "(s)cissors",
  "(S)pock",
  "(l)izard",
];
const WINNING_COMBOS = {
  s: ["p", "l"],
  p: ["r", "S"],
  r: ["s", "l"],
  S: ["r", "s"],
  l: ["S", "p"],
};

const NAMES = {
  s: "scissors",
  S: "Spock",
  l: "lizard",
  p: "paper",
  r: "rock",
};
let playerScore = 0;
let computerScore = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}
function addScore(name) {
  if (name === "player") {
    playerScore += 1;
  } else {
    computerScore += 1;
  }
}
function choseWinner(winner, loser) {
  return WINNING_COMBOS[winner].includes(loser);
}
function displayResults(choice, computerChoice) {
  if (choice === computerChoice) {
    prompt("It's a tie!");
  } else if (choseWinner(choice, computerChoice)) {
    prompt("You win!");
    addScore("player");
  } else if (choseWinner(computerChoice, choice)) {
    prompt("You lose!");
    addScore("computer");
  }
}

while (true) {
  prompt(
    `Choose one: ${VALID_CHOICES.join(", ")} for ${PROMPT_CHOICES.join(", ")}`
  );
  let choice = rlSync.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice.");
    choice = rlSync.question();
  }
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  prompt(`You chose ${NAMES[choice]}, computer chose ${NAMES[computerChoice]}`);

  displayResults(choice, computerChoice);
  if (playerScore > 5 || computerScore > 5) {
    break;
  }
}
