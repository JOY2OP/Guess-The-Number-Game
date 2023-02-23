'use strict';

let number = Math.floor((Math.random() * 20) + 1);

//secret number
// document.querySelector('.number').textContent = number;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);


        if (!guess) {

            // document.querySelector('.message').textContent = '⛔ No value';
            displayMessage('⛔ No value');

        } else if (guess === number) {

            // document.querySelector('.message').textContent = '🍕 Correct Number';
            displayMessage('🍕 Correct Number');

            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = number;
            document.querySelector('.number').style.width = '30rem';

            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        } else if (guess !== number) {
            if (score > 1) {
                // document.querySelector('.message').textContent = guess > number ? '📈 Too high!' : '📉 Too low!';
                displayMessage(guess > number ? '📈 Too high!' : '📉 Too low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                // document.querySelector('.message').textContent = '💥 You lost the game!';
                displayMessage('💥 You lost the game!');
                document.querySelector('.score').textContent = 0;
            }


        }
    });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.floor(Math.random() * 20) + 1;

    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})

