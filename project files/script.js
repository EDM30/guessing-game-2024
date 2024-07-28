let randomNumber;
let guessCount = 0;
let maxNumber = 100;

function initGame() {
    maxNumber = parseInt(document.getElementById('gameRange').value);
    randomNumber = Math.floor(Math.random() * maxNumber) + 1;
    guessCount = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guessCount').textContent = 'Number of guesses: 0';
    document.getElementById('guessField').value = '';
    document.getElementById('rangeDisplay').textContent = `Enter a number from 1 to ${maxNumber}:`;
}

function checkGuess() {
    let guessedNumber = parseInt(document.getElementById('guessField').value);
    guessCount++;

    if (guessedNumber === randomNumber) {
        document.getElementById('message').textContent = 'Congratulations! You guessed the correct number!';
    } else if (guessedNumber < randomNumber) {
        document.getElementById('message').textContent = 'Too low! Try again.';
    } else {
        document.getElementById('message').textContent = 'Too high! Try again.';
    }

    document.getElementById('guessCount').textContent = `Number of guesses: ${guessCount}`;
}

function restartGame() {
    initGame();
}


window.onload = initGame;