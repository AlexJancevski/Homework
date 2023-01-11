let wordList = ["javascript", "html", "css", "programming"];
let wordToGuess = wordList[Math.floor(Math.random() * wordList.length)];
let lives = 6;
let guessedLetters = [];
let wordDisplay = document.getElementById("word-display");
let livesDisplay = document.getElementById("lives-display");
let guessButton = document.getElementById("guess-button");
let hangmanSketch = document.getElementById("hangman-sketch");

guessButton.addEventListener("click", function (event) {
    event.preventDefault();
    let guess = document.getElementById("guess-input").value;
    if (guessedLetters.includes(guess)) {
        alert("You have already guessed that letter. Try again.");
    } else {
        guessedLetters.push(guess);
        if (wordToGuess.includes(guess)) {
            updateWordDisplay();
        } else {
            lives--;
            updateLivesDisplay();
            updateHangmanSketch();
        }
        checkForVictory();
        checkForLoss();
    }
});

function updateWordDisplay() {
    let display = "";
    for (let i = 0; i < wordToGuess.length; i++) {
        if (guessedLetters.includes(wordToGuess[i])) {
            display += wordToGuess[i] + " ";
        } else {
            display += "_ ";
        }
    }
    wordDisplay.textContent = display;
}

