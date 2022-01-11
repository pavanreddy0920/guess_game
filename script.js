'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Please enter number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🍿 Correct Answer';
  } else if (guess > secretNumber) {
    if (score !== 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📈 Too high';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost';
    }
  } else if (guess < secretNumber) {
    if (score !== 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = '📉 Too low';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost';
    }
  }
});
