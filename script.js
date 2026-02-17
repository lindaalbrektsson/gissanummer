let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const resetButton = document.getElementById("resetButton");
const result = document.getElementById("result");
const attemptsDisplay = document.getElementById("attempts");

guessButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;
    attemptsDisplay.textContent = "Antal gissningar: " + attempts

    if (userGuess === randomNumber) {
        result.textContent = "Grattis! Du gissade rätt!";
    } else if (userGuess < randomNumber) {
        result.textContent = "För lågt! Försök igen.";
    } else {
        result.textContent = "För högt! Försök igen.";
    }
}

function resetGame() {
    attempts = 0;
    attemptsDisplay.textContent = "";
    result.textContent = "";
    guessInput.value = "";
    randomNumber = Math.floor(Math.random() * 100) + 1;
}
