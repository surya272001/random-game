let attempts = 0;
let score = 0;
let consecutiveFails = 0;
const MAX_CONSECUTIVE_FAILS = 3;

function startGame() {
  resetGame();
  generateRandomNumber();
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 9000) + 1000;
}

function checkGuess() {
  let userGuess = parseInt(document.getElementById('userGuess').value);

  // Check if input is a valid 4-digit number
  if (isNaN(userGuess) || userGuess < 1000 || userGuess > 9999) {
    document.getElementById('message').textContent = 'Please enter a 4-digit number.';
    return;
  }

  attempts++;

  let randomNumber = generateRandomNumber();

  // Check if guess is greater than the computer's number
  if (userGuess > randomNumber) {
    score += 10;
    document.getElementById('score').textContent = score;
    document.getElementById('message').textContent = 'Your guess is greater than the computer\'s number. Keep going!';
    consecutiveFails = 0; // Reset consecutive fails counter
  } else {
    document.getElementById('message').textContent = 'Your guess is not greater than the computer\'s number. Try again!';
    consecutiveFails++;
  }

  // Check if user has guessed incorrectly MAX_CONSECUTIVE_FAILS times
  if (consecutiveFails === MAX_CONSECUTIVE_FAILS) {
    document.getElementById('message').textContent = `Game over! You guessed incorrectly ${MAX_CONSECUTIVE_FAILS} times in a row. The correct number was ${randomNumber}.`;
    resetGame();
    return;
  }

  // Reset input field after each guess
  document.getElementById('userGuess').value = '';
}
  
function resetGame() {
  attempts = 0;
  score = 0;
  consecutiveFails = 0;
  document.getElementById('score').textContent = score;
  document.getElementById('userGuess').value = '';
}
