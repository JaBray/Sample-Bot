const readline = require("readline");
const prompt = require("prompt-sync")();


const rl = readline.createInterface({

	input : process.stdin,
	output: process.stdout

});


var hiddenWord = "Superhuman";

var hiddenWordArr = hiddenWord.split("");


var blanks = [];

for(var i =0; i < hiddenWord.length; i++){
	blanks[i] = "_";
}

var guesses = 0;
var wrongLetters = [];
var rightLetters = [];

//I've modified this file!
while(blanks.includes("_") && guesses <= 6){

		console.log(blanks.join(" "));
		console.log(`Misses: ${guesses} : ${wrongLetters.join(" ")}`);


		var letterGuess = prompt("Guess a letter: ");

		if(letterGuess.toUpperCase() === hiddenWord.toUpperCase()){

			break;
		}


		letterGuess = letterGuess.substring(0,1);

        if(!wrongLetters.includes(letterGuess) && !blanks.includes(letterGuess)){
			var letterCount = 0;
			for(var i = 0; i < hiddenWordArr.length; i++){

				if(hiddenWordArr[i].toUpperCase() === letterGuess.toUpperCase()){
					blanks[i] = hiddenWordArr[i];
					letterCount++;
				}
			}
			if(letterCount == 0){
				guesses++;
				wrongLetters.push(letterGuess);
			}

		}else{
			console.log("You already guessed that letter!");
		}
}

	if(guesses > 6){
		console.log(`You lose! The word was ${hiddenWord}`);
	}else{
		console.log(`You win! The word was ${hiddenWord}`);
	}



		process.exit(0);
		function onErr(err){
			console.log(err);
			return 1;
		}
