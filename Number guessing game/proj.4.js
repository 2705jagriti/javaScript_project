let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let lowOrHi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number bigger then 1");
  } else if (guess > 100) {
    alert("Please enter a number smaller then 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      dispalyGuess(guess);
      displayMessage(`Game Over ,Random number was ${randomNumber}`);
      endGame();
    } else {
      dispalyGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (randomNumber > guess) {
    displayMessage(`NUMBER IS TOO LOW`);
  } else if (randomNumber < guess) {
    displayMessage(`NUMBER IS TOO HEIGHT`);
  }
}

function dispalyGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML +=`${guess} -`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = ` <h2> ${message}</h2>`;
}
function endGame(mesGsage) {
  userInput.value = "";
  userInput.setAttribute("desabled", "");
  p.classList.add("button");
  p.innerHTML = '<h2 id="newGame"> Start new game </h2>';
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  let newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
