"use strict";

//Count Down Timer
let countdownEl = document.getElementById("countdown"),
secondsLeft = 10;

let startButton = document.getElementById("countdowntimerStart")

startButton.onclick = function() {
  const countdownTimer = setInterval(() => {
    if (secondsLeft <= 0) clearInterval(countdownTimer);
    countdownEl.value = secondsLeft;
    countdownEl.textContent = secondsLeft;
    secondsLeft -= 1;
  }, 1000);
}

//Game
// Setting up the variables
const form = document.getElementById("guessForm");
let output = document.getElementById("outputText");
let attemptsTracker = document.getElementById("attemptsTracker");

let number = Math.floor(Math.random() * 10) + 1;

let attempts = 0;

// Adding the onSubmit function & the if loop
form.onsubmit = function (event) {
  event.preventDefault();
  
  let input = Number(form.elements.input.value);

  if (Number.isNaN(input)) {
    output.innerHTML = ("That is not a number...");
  }else if (input === number) {
    output.innerHTML = `You guessed right, your number was ${number}`;
    output.style.color = "green";
    attempts--;
  } else if (input < number) {
    output.innerHTML = "You guessed too low";
    attemptsTracker.innerHTML = attempts += 1;
  } else if (input > number) {
    output.innerHTML = "You guessed too high";
    attemptsTracker.innerHTML = attempts += 1;
  }
  if (attempts === 5) {
    attemptsTracker.innerHTML = `GAME OVER, your number was ${number}`;
    attemptsTracker.style.color = "red";
    attempts--;
  }
};

//Restart button
let resetButton = document.getElementById("resetButton");

let refreshPage = () => {
  location.reload();
};

resetButton.addEventListener("click", refreshPage);
