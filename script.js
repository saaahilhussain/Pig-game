'use strict';

//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//initial-values
dice.classList.add('hidden');
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore = 0;

//clicking the roll dice
btnRoll.addEventListener('click', function () {
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
    current0El.textContent = currentScore;
  } else {
    //
  }
});
