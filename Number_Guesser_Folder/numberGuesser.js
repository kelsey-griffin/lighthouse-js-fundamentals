//generate a random # (from 0 to 100)
randomnumber = Math.floor(Math.random() * (101));

console.log("Welcome to the Number Guesser!\nGuess a number between 0 and 100!");

let prompt = require("prompt-sync")();


let listOfAnswers = [];
let guessCorrect = false;

let answer = prompt("Guess a number: ");

let j = 'a';for (i = 0; i !== j; i++) {
  if (answer === randomnumber) {
    listOfAnswers.push(answer);
    if (listOfAnswers.length > 1) {
      console.log("You got it! You took " + listOfAnswers.length + " attempts!");
    } else {
      console.log("You got it! You took " + listOfAnswers.length + " attempt!");
    }
    break;
  } else if (listOfAnswers.includes(answer)) {
    console.log("Already Guessed!");
    answer = Number(prompt("Guess a number: "));
  } else if (answer > randomnumber) {
    console.log("Too large!");
    listOfAnswers.push(answer)
    answer = Number(prompt("Guess a number: "));
  } else if (answer < randomnumber) {
    console.log("Too small!");
    listOfAnswers.push(answer)
    answer = Number(prompt("Guess a number: "));
  } else if (isNaN(answer)) {
    console.log("Not a number! Guess again!");
    answer = Number(prompt("Guess a number: "));
  }  
};
