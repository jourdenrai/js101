let rlSync = require('readline-sync');
let deck = [[]]
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
function populateDeck(deck) {
  let suits = ['H','D','S','C'];
  let values = ['2','3','4','5','6','7','8','9','10','J','Q','K','A']
  return suits.map(suit => {
    return values.map(val => {
      return [suit,val]
    })
  }).reduce((a,b) => a.concat(b),[]);
}
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function getRandomCard(deck) {
  let randomIndex = Math.floor(Math.random() * deck.length);
  return deck[randomIndex];
}
function busted(total) {
  return total > 21;
}
function dealersTurn(dealerCards,deck) {
  while(true)
  if(total(dealerCards) < 21) {
    dealerCards.push(getRandomCard(deck));
  } else if (total(dealerCards) >= 21) {
    break;
  }
}
while(true) {
  deck = shuffle(populateDeck(deck));
  cards = [getRandomCard(deck),getRandomCard(deck)];
  let cardTotal = total(cards);
  let dealerCards = [getRandomCard(deck),getRandomCard(deck)]
  while (true) {
    console.log(`Dealer has: ${dealerCards[0][1]} and unknown card`);
    cards.forEach(card => {
      console.log(card[1])
    })
    prompt("hit or stay?");
    let answer = rlSync.question();
    if(answer[0] === 'h') {
      cards.push(getRandomCard(deck))
      cardTotal = total(cards);
    }
    if(answer[0] === 's' || busted(cardTotal)) break;
  }

  if(busted(cardTotal)) {
    prompt('You busted! Dealer wins!');
  } else{
    dealersTurn(dealerCards,deck);
    let dealerTotal = total(dealerCards);
    if(busted(dealerTotal)) {
      prompt("Dealer busted. You win!")
    } else {
      dealerTotal > cardTotal ? prompt('Dealer Wins!') : prompt('You win!')
    }
    
  }
  prompt('Would you like to play again? y/n')
    let choice = rlSync.question();
    if(choice === 'n') break;
  
  
  
}


