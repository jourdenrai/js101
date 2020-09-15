let rlSync = require('readline-sync');
function total(cards) {
  let values = cards.map(card => card[1]);

  let sum = 0;
  values.forEach(val => {
    if (val === 'A') sum += 11;
    else if (['J','Q','K'].includes(val)) sum += 10;
    else sum += Number(val)
  });

  values.filter(val => val === 'A').forEach(_ => {
    if (sum > 21) sum -= 10;
  });


  return sum
}
function prompt(message) {
  return console.log(`=>${message}`)
}
function initializeDeck() {
  let suits = ['H','D','S','C'];
  let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
  return shuffle(suits.map(suit => {
    return values.map(val => {
      return [suit,val]
    })
  }).reduce((a,b) => a.concat(b),[]));
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function getHand(deck) {
  return [deck.pop(), deck.pop()];
}
function busted(cards) {
  return total(cards) > 21;
}
function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > 21) return 'PLAYER_BUSTED';
  else if (dealerTotal > 21) return 'DEALER_BUSTED';
  else if (dealerTotal < playerTotal) return 'PLAYER';
  else if (dealerTotal > playerTotal) return 'DEALER';
  else return 'TIE';
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);
  switch (result) {
    case 'PLAYER_BUSTED': 
      prompt('You busted! Dealer wins!');
      break;
    case 'DEALER_BUSTED':
      prompt('Dealer busted! You win!');
      break;
    case 'PLAYER':
      prompt('You win!');
      break;
    case 'DEALER':
      prompt('Dealer wins!');
      break;
    case 'TIE':
      prompt("It's a tie!");
      break;
  }
}
function playAgain() {
  prompt('Do you want to play again? y/n')
  let answer = rlSync.question();
  return answer.toLowerCase()[0] === 'y';
}
function showHand(cards) {
  return cards.map(card => `${card[1]}${card[0]}`).join(' ');
}
while(true) {
  prompt('Welcome to Twenty-One!');

  let deck = initializeDeck();
  let playerCards = getHand(deck)
  let dealerCards = getHand(deck)

  prompt(`Dealer has: ${dealerCards[0][1]} and ???`);
  prompt(`You have: ${playerCards[0][1]}, ${playerCards[1][1]}`);
  
  while (true) {
    let playerTurn;
    while(true) {
      prompt("hit or stay?");
      playerTurn = rlSync.question().toLowerCase();
      if(['h','s'].includes(playerTurn)) break;
      prompt('must enter h or s')
    }
  if(playerTurn === 'h') {
    playerCards.push(deck.pop());
    prompt('You chose hit!');
    prompt(`Your cards are now: ${showHand(playerCards)}`);
    prompt(`Your total is now ${total(playerCards)}`);
  }

  if((playerTurn === 's') || busted(playerCards)) break;
  }
  if(busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if(playAgain()) {
      continue;
    } else break;
  } else{
    prompt(`You stayed at ${total(playerCards)}`);
  }
  while (total(dealerCards) < 17) {
    prompt('Dealer hits!');
    dealerCards.push(deck.pop());
    prompt(`Dealers hand: ${showHand(dealerCards)}`);
  }
  if (busted(dealerCards)) {
    prompt(`Dealer total is now: ${total(dealerCards)}`);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      continue;
    } else break;
  } else prompt(`Dealer stays at ${total(dealerCards)}`);
  
  prompt(`Dealer has ${dealerCards}, for a total of: ${total(dealerCards)}`);
  prompt(`Player has ${playerCards}, for a total of: ${total(playerCards)}`);
  displayResults(dealerCards, playerCards);
  if(!playAgain()) break;
}

