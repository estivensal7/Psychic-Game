window.onload = function(){
// array of possible letters

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
	"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



//getting doc elements by id/ asigning variables

let winsHold = document.getElementById("#wins");
let lossesHold = document.getElementById("#losses");
let guessesLeftHold = document.getElementById("#guessesLeft");
let lettersGuessedHold = document.getElementById("#lettersGuessed");

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesSoFar = [];

//creating variables for random letter to be guessed
let answer = (Math.floor(Math.random()*letters.length));
let chosenAnswer = letters[answer];
console.log(chosenAnswer);

// //reset game function
// function resetGame() {
// 	guessesLeft = 10;
// 	console.log(newChosenAnswer);
// }



//creating on key press event listener for the user's guess
document.onkeypress = function(event) {
	let userGuess = event.key;
	console.log(userGuess);

	if (userGuess === chosenAnswer) {
		wins++;
		alert("You got it!");
		guessesLeft = 10;
		guessesSoFar = [];
		answer = (Math.floor(Math.random()*letters.length));
	 	chosenAnswer = letters[answer]; 
		
	} else {
		guessesSoFar[guessesSoFar.length]=userGuess;//
		guessesLeft--;
	}

	if (guessesLeft === 0) {
		losses++;
		guessesLeft = 10;
		guessesSoFar = [];
		answer = (Math.floor(Math.random()*letters.length));
	 	chosenAnswer = letters[answer]; 
		alert(":( the letter I was thinking of was: " + chosenAnswer);
		alert("I am now thinking of a new letter, try again!");
	}

	document.getElementById("wins").innerHTML = "Wins: " + wins;
	document.getElementById("losses").innerHTML = "Losses: " + losses;
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;

}


}
