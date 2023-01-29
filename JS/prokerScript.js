class Card {
    constructor(suit, name, value) {
      this.suit = suit;
      this.name = name;
      this.value = value;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      const names = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
      for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < names.length; j++) {
          this.cards.push(new Card(suits[i], names[j], j + 1));
        }
      }
      // console.log(this.cards);
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
      // console.log(this.cards);
    }
  }
  
  const deck = new Deck();
  deck.shuffle();

  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
    }
  }
  
  const slim = new Player('Slim');
  const luke = new Player('Luke');
  console.log(slim);
  console.log(luke);
  
  for (let i = 0; i < 5; i++) {
    slim.hand.push(deck.cards.pop());
    luke.hand.push(deck.cards.pop());
  }
  console.log(deck.cards);
  console.log(slim.hand);
  console.log(luke.hand);
  console.log(slim.hand.reduce((sum, card) => sum + card.value, 0));
  console.log(luke.hand.reduce((sum, card) => sum + card.value, 0));


  const discardPile = [];

for (let i = 0; i < 2; i++) {
  discardPile.push(slim.hand.pop());
  discardPile.push(luke.hand.pop());
}

for (let i = 0; i < 2; i++) {
  slim.hand.push(deck.cards.pop());
  luke.hand.push(deck.cards.pop());
}
console.log(deck.cards);
console.log(slim.hand);
console.log(luke.hand);
console.log(slim.hand.reduce((sum, card) => sum + card.value, 0));
console.log(luke.hand.reduce((sum, card) => sum + card.value, 0));


slim.hand = [];
luke.hand = [];
deck.cards = [...deck.cards, ...discardPile];
console.log(deck.cards);
console.log(slim.hand);
console.log(luke.hand);

deck.shuffle();
console.log(deck.cards);


class Dealer {
    constructor() {
      this.deck = new Deck();
    }
  
    shuffle() {
      this.deck.shuffle();
    }
  
    deal(players) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < players.length; j++) {
          players[j].hand.push(this.deck.cards.pop());
        }
      }
    }
  }
  
  const dealer = new Dealer();
  dealer.shuffle();
  
  const players = [slim, luke];
  dealer.deal(players);
  console.log(players[0].hand);
  console.log(players[1].hand);


  class HandValidation {
    static evaluateHand(players) {
      for (let i = 0; i < players.length; i++) {
        const player = players[i];
        const handValue = player.hand.reduce((sum, card) => sum + card.value, 0);
        console.log(`${player.name}'s hand value is ${handValue}`);
      }
    }
  }
  
  HandValidation.evaluateHand(players);


function playRound() {
    this.roundCount++;
    for (let i = 0; i < this.players.length; i++) {
        this.players[i].hand = [];
    }
    this.dealer.shuffle();
    this.dealer.deal(this.players);
    HandValidation.evaluateHand(this.players);

    for (let i = 0; i < this.players.length; i++) {
        const playerHand = document.querySelector(`#player-${i + 1} .hand`);
        playerHand.innerHTML = "";
        for (let j = 0; j < this.players[i].hand.length; j++) {
            const card = this.players[i].hand[j];
            playerHand.innerHTML += `<div class="card ${card.suit}">${card.name}</div>`;
        }
    }

    const roundCount = document.querySelector("#round-count");
    roundCount.innerHTML = `Round: ${this.roundCount}`;
}



class spel {
    constructor() {
      this.players = [];
      this.dealer = new Dealer();
    }
  
    addPlayers() {
      const playerCount = prompt('Enter the number of players (minimum 2)');
      for (let i = 0; i < playerCount; i++) {
        const name = prompt(`Enter the name of player ${i + 1}`);
        this.players.push(new Player(name));
      }
    }
  
    startspel() {
    //   this.addPlayers();
    //   this.dealer.shuffle();
    //   this.dealer.deal(this.players);
    //   HandValidation.evaluateHand(this.players);

    this.addPlayers();
    this.dealer.shuffle();
    this.dealer.deal(this.players);
    HandValidation.evaluateHand(this.players);

    for (let i = 0; i < this.players.length; i++) {
        const playerHand = document.querySelector(`#player-${i + 1} .hand`);
        playerHand.innerHTML = "";
        for (let j = 0; j < this.players[i].hand.length; j++) {
            const card = this.players[i].hand[j];
            playerHand.innerHTML += `<div class="card ${card.suit}">${card.name}</div>`;
        }
    }

    // const playRoundButton = document.querySelector("#play-round-button");
    // playRoundButton.addEventListener("click", () => {
    //     this.playRound();
    // });

    const startGameButton = document.getElementById("start-game-button");
    startGameButton.addEventListener("click", () => {
    console.log("start game 21");
    spel.startGame();
});

    const playRoundButton = document.getElementById("play-round-button");
    playRoundButton.addEventListener("click", () => {
    console.log("playround 21");
    spel.playRound();
});

    }
  };

  const startGameButton = document.querySelector("#start-game-button");
  startGameButton.addEventListener("click", startGame);

function startGame() {
  startGameButton.disabled = true;

  
  const dealer = new Dealer();

  dealer.shuffle();

  slim.hand = [];
  luke.hand = [];

  const players = [slim, luke];

  dealer.deal(players);

  playRoundButton.disabled = false;
}


const playRoundButton = document.querySelector("#play-round-button");
playRoundButton.addEventListener("click", playRound);
playRoundButton.disabled = true;

function playRound() {
  for (let i = 0; i < 2; i++) {
    discardPile.push(slim.hand.pop());
    discardPile.push(luke.hand.pop());
  }

  for (let i = 0; i < 2; i++) {
    slim.hand.push(deck.cards.pop());
    luke.hand.push(deck.cards.pop());
  }

  playRoundButton.disabled = true;

  function updateUI() {
    const player1Hand = players[0].hand;
    const player2Hand = players[1].hand;
    const deck = dealer.deck;

    const player1HandContainer = document.querySelector('#player-1 .hand');
    player1HandContainer.innerHTML = `Slim har ${player1Hand.length} kort`;
    const player2HandContainer = document.querySelector('#player-2 .hand');
    player2HandContainer.innerHTML = `Luke har ${player2Hand.length} kort`;
    const deckContainer = document.querySelector('#deck');
    deckContainer.innerHTML = `Kortleken har ${deck.cards.length} kort`;
}

  updateUI();

}

