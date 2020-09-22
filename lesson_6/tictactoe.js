let rlSync = require('readline-sync');
let INTIAL_MARKER = ' ';
let PLAYER_MARKER = 'X';
let COMPUTER_MARKER = 'O';
let GAMES_TO_WIN = 5;
let playerFirst = true;
const WINNING_LINES = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5 ,7]
];
function displayBoard(board) {
  console.log(`You are ${PLAYER_MARKER}. Computer is ${COMPUTER_MARKER}`);
  console.log('');
  console.log('     |     |');
  console.log(`  ${board['1']}  |  ${board['2']}  |  ${board['3']} `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['4']}  |  ${board['5']}  |  ${board['6']} `);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board['7']}  |  ${board['8']}  |  ${board['9']} `);
  console.log('     |     |');
  console.log('');
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] =   INTIAL_MARKER;
  }

  return board;
}

function joinOr(array,delimiter = ', ', delimiter2 = 'or') {
  if (array.length > 1) {
    return `${array.slice(0,array.length - 1).join(delimiter)}${delimiter}${delimiter2} ${array[array.length - 1]}`;
  } else return array.join(delimiter);
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function emptySquares(board) {
  return Object.keys(board).filter(key =>  {
    return board[key] === INTIAL_MARKER;
  });
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = rlSync.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Sorry, that's not a valid choice");
  }
  board[square] = PLAYER_MARKER;
}

function findAtRiskSquare(line,board, marker) {
  let markersInLine = line.map(square => board[square]);

  if (markersInLine.filter(val => val === marker).length === 2) {
    let unusedSquare = line.find(square => board[square] === INTIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function computerChoosesSquare(board) {
  let square;
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, PLAYER_MARKER);
      if (square) break;
    }
  }
  if(!square) {
    if(board[5] === ' ') {
      square = 5;
    }
  }
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];
    if (board[sq1] === PLAYER_MARKER &&
        board[sq2] === PLAYER_MARKER &&
        board[sq3] === PLAYER_MARKER
    ) return 'Player';
    else if (board[sq1] === COMPUTER_MARKER &&
             board[sq2] === COMPUTER_MARKER &&
             board[sq3] === COMPUTER_MARKER
    ) return 'Computer';
  }
  return null;
}

//Main loop
while (true) {
  let playerScore = 0;
  let computerScore = 0;
  let choice;

  while (true) {
    prompt(`who goes first? player or computer`);
    choice = rlSync.question().trim().toLowerCase();
    if (choice[0] === 'p' || choice[0] === 'c') break;
    prompt(`${choice} is not a valid answer!`);
  }

  playerFirst = choice[0] === 'p';

  while (true) {
    let board = initializeBoard();

    while (true) {
      if (playerFirst) {
        displayBoard(board);

        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
      } else {
        computerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
        displayBoard(board);
        playerChoosesSquare(board);
        if (someoneWon(board) || boardFull(board)) break;
      }
    }

    displayBoard(board);

    if (someoneWon(board)) {
      prompt(`${detectWinner(board)} won!`);
    } else prompt("It's a draw!");

    if (detectWinner(board) === 'Player') {
      playerScore++;
    } else if (detectWinner(board) === "Computer") {
      computerScore++;
    }
    prompt   (`Player: ${playerScore} Computer: ${computerScore}`);

    if (playerScore >= GAMES_TO_WIN) {
      prompt('Player wins the series!');
      break;
    } else if (computerScore >= GAMES_TO_WIN) {
      prompt('Computer wins the series!');
      break;
    }

  }
  let answer;
  while (true) {
    prompt('Play again? (y or n)');
    answer = rlSync.question().toLowerCase()[0];
    if (answer === 'yes' || answer === 'no') break;
    prompt(`${answer} is not a valid answer!`);
  }
  if (answer !== 'y') break;
}

prompt('Thanks for playing Tic Tac Toe!');
