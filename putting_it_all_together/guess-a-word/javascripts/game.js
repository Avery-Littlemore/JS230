document.addEventListener('DOMContentLoaded', () => {
  let body = document.querySelector('body');
  let replay = document.getElementById('replay');
  let message = document.getElementById('message');
  let spaces = document.getElementById('spaces');
  let guesses = document.getElementById('guesses');
  let apples = document.getElementById('apples');
  let currentGame;

  let randomWord = (function() {
    let words = ['apple', 'banana', 'orange', 'pear'];
  
    return function() {
      let index = Math.floor(Math.random() * words.length);
      return words.splice(index, 1)[0];
    }
  })();

  let Game = function() {
    this.reset();
  }

  Game.prototype.reset = function() {
    this.word = randomWord();
    this.incorrectGuesses = 0;
    this.guessed = [];
    this.maxIncorrect = 6;
    this.correct = false;
    
    if (this.word === undefined) {
      message.textContent = "Sorry, I've run out of words!";
      replay.style.visibility = 'hidden';
      return;
    }

    spaces.querySelectorAll('span').forEach(span => span.remove());
    guesses.querySelectorAll('span').forEach(span => span.remove());
    body.setAttribute('class', '');
    message.textContent = "";
    replay.style.visibility = 'hidden';
    apples.setAttribute('class', 'guess_0');
    
    let counter = 0;
    while (counter < this.word.length) {
      let space = document.createElement('span');
      spaces.appendChild(space);
      counter += 1;
    }
  }

  function handleKeyUp(e) {
    let keyup = e.key;

    if (!(keyup.match(/[abcdefghijklmnopqrstuvwxyz]/gi)) || 
        currentGame.incorrectGuesses === currentGame.maxIncorrect ||
        currentGame.guessed.includes(keyup) ||
        currentGame.correct) {
      return;
    }

    currentGame.guessed.push(keyup);

    let guess = document.createElement('span');
    guess.textContent = keyup;
    guesses.appendChild(guess);
    
    let regex = new RegExp(keyup, '');
    if (currentGame.word.match(regex)) {
      currentGame.word.split('').forEach((char, idx) => {
        if (char === keyup) {
          spaces.querySelectorAll('span')[idx].textContent = keyup;
        }
      })
    } else {
      currentGame.incorrectGuesses += 1;
      apples.setAttribute('class', `guess_${currentGame.incorrectGuesses}`);
    }
    
    if (currentGame.word.split('').every(letter => currentGame.guessed.includes(letter))) {
      currentGame.correct = true;
      message.textContent = "You win!";
      replay.style.visibility = 'visible';
      body.setAttribute('class', 'win');
    } else if (currentGame.incorrectGuesses === currentGame.maxIncorrect) {
      message.textContent = "Sorry! You're out of guesses";
      replay.style.visibility = 'visible';
      body.setAttribute('class', 'lose');
    } 
  }

  function handleClicks(e) {
    e.preventDefault();
    currentGame = new Game();
  }

  currentGame = new Game();
  document.addEventListener('keyup', handleKeyUp);
  replay.addEventListener('click', handleClicks);
  
});

