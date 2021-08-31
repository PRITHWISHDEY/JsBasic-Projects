'use strict';

let correctNum = Math.trunc(Math.random() * 20) + 1;
const Displaymessage = msg => {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', () => {
  const value = document.querySelector('.guess').value;
  const OnLose = (GuessDifference, message) => {
    Displaymessage(message);
    if (String(GuessDifference).toLowerCase() === 'greater') {
      document.querySelector('body').style.backgroundColor =
        'rgb(255, 102, 102)';
    }
    if (String(GuessDifference).toLowerCase() === 'smaller') {
      document.querySelector('body').style.backgroundColor =
        'rgb(255, 204, 51)';
    }
    const wrongGuess = document.querySelector('.score').textContent;
    document.querySelector('.score').textContent = wrongGuess - 1;
    if (document.querySelector('.score').textContent == 0) {
      Displaymessage('Sorry! You Lose ❌');
      document.querySelector('body').style.backgroundColor = 'rgb(230, 0, 0)';
    }
  };
  //when the user enters nothing(empty) value
  if (!value) {
    Displaymessage('❌ No Input ⛔');
  } //when value is greater than the serrect num
  else if (parseInt(value) > correctNum) {
    OnLose('greater', 'Guess is too HIGH 📈');
  } //when the value is less then the secret num
  else if (parseInt(value) < correctNum) {
    OnLose('smaller', 'Guess is too LOW 📉');
  } //when Player wins
  else {
    Displaymessage('Congrats,You Won 🎉✨');
    document.querySelector('body').style.backgroundColor = 'rgb(0, 204, 102)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerText = correctNum;
    const score = document.querySelector('.score').textContent;
    const Highscore = document.querySelector('.highscore').textContent;
    if (score > Highscore) {
      document.querySelector('.highscore').textContent = score;
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  correctNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  Displaymessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').innerText = '?';
});
