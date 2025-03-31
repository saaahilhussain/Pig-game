'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;
function init() {
  scores = [0, 0];
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  currentScore = 0;

  dice.classList.add('hidden');
  activePlayer = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}
//initial-values
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//clicking the roll dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Dice appears
    dice.classList.remove('hidden');

    //2. Generate randomly 1-6;
    const diceNo = Math.trunc(Math.random() * 6) + 1;
    //   console.log(diceNo);

    //3. Dice should change as per its number generated
    dice.src = `dice-${diceNo}.png`;

    //4. Till DiceNo !==1, Store the random dice no to currentScore .
    if (diceNo !== 1) {
      currentScore += diceNo;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //activePlayer changes dynamically in the else statement below

      // current0El.textContent = currentScore;
    } else {
      //switch
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //score of active player added from current score
  scores[activePlayer] += currentScore;
  if (playing) {
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // console.log(score);
    if (scores[activePlayer] >= 20) {
      playing = false;
      dice.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
