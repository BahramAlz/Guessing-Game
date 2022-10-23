"use strict";

//Restart button
let resetButton = document.getElementById('resetButton');

let refreshPage = () => {
    location.reload();
}

resetButton.addEventListener('click', refreshPage);

//Game
// Setting up the variables
let btn = document.getElementById('btn');
let output = document.getElementById('outputText');
let attemptsTracker = document.getElementById('attemptsTracker')

let number = [Math.floor(Math.random() * 100)]

let attempts = 0;

// Adding the eventlistener & the if loop
btn.addEventListener('click', function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = (`You guessed right, your number was ${number}`);
        output.style.color = 'green'
        attempts--;
    } else if (input < number){
        output.innerHTML = "You guessed too low"
        attemptsTracker.innerHTML = attempts += 1;
    } else if(input > number){
        output.innerHTML = "You guessed too high"
        attemptsTracker.innerHTML = attempts += 1;
    };
    if(attempts === 10){
        attemptsTracker.innerHTML = (`GAME OVER, your number was ${number}`);
        attemptsTracker.style.color = ('red');
        attempts--;
    };
});