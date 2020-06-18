var inquirer = require("inquirer");
var Word = require("./word.js");

const MAX_TRIES = 7;

var newGame = function () {

    var gameWord = new Word();
    var wrong = 0;
    var lettersGuessed = [];

    function displayWord(t) {
        console.log(t + '');
    }

    gameWord.selectRandomWord();
    console.log("\nTry To Guess My Word, I Will Give You 7 Tries And A Hint, It's Toy");
    displayWord(gameWord);

    var askForLetter = function () {
        if (wrong < MAX_TRIES) {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Choose a letter!",
                    name: "letter"
                }
            ])
                .then(function (answers) {
                    if (answers.letter.length === 1) {

                        if (lettersGuessed.indexOf(answers.letter) === -1) {
                            lettersGuessed.push(answers.letter);

                            var found = gameWord.yourGuess(answers.letter);

                            if (found) {
                                console.log("\nEureka! No Try wasted, Please Guess Another Letter\n");
                            } else {
                                wrong++;
                                console.log("\nErroneous! Please Guess Another Letter\n");
                                console.log(MAX_TRIES - wrong + " attempts remaining\n");
                            };

                            if (MAX_TRIES - wrong != 0) { displayWord(gameWord); };

                            //console.log(gameWord.wordGuessed)
                            //console.log(gameWord.wordGuessed())
                            if (gameWord.wordGuessed()) {
                                console.log("OMG! You are BRILIANT, try the next word.");
                                newGame();
                            } else {
                                // console.log(gameWord.yourGuess)
                                askForLetter();

                            }
                        } else {
                            console.log("\nHey fool you guessed this letter previously.  Try again.\n");
                            askForLetter();
                        }

                    } else {
                        console.log("\nYou can only guess one letter at a time, Have you never watched Wheel of Fortune.  Guess again.\n");
                        askForLetter();
                    }

                });
        } else {
            console.log("GAME OVER.\n");
            console.log("The toy was: " + gameWord.wordToGuess + ".  Come on try again.\n");
            newGame();
        }

    }

    askForLetter();
};

newGame();