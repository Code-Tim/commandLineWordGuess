var Letter = require("./letter.js");

var WordCategories = [
    {
        "Toys": "All",
        "wordlist": ["Action figures", "Airplanes", "Alphabet blocks", "Balloons", "Balls", "Bells", "Blocks", "Boats", "Books", "Bubbles", "Building sets", "Cards", "Cars", "Carts", "Clay", "Colored pencils", "Crayons", "Dolls", "Drums", "Electronics", "Games", "Games", "Gliders", "Guns", "Jacks", "Kites", "Knights", "Locomotives", "Magnets", "Marbles", "Musical instruments", "Pails", "Phones", "Plastic footballs", "Plush animals", "Pogo sticks", "Puppets", "Puzzles", "Radio controlled toys", "Rattles", "Rockets", "Rocking horse", "Shovels", "Skates", "Soldiers", "Spoons", "Stilts", "Stuffed animals", "Teddy bears", "Toboggans", "Tops", "Toy cars", "Trains", "Tricycles", "Trucks", "Vehicles", "Video games", "Wagons", "Watches", "Xylophones", "Yo-yos"]
    }
];

var Word = function () {
    this.letters = [];
    this.wordToGuess = '';
    this.words = WordCategories[0].wordlist;

    this.selectRandomWord = function () {
        var randomEntry = Math.floor(Math.random() * this.words.length);

        this.wordToGuess = this.words[randomEntry].toUpperCase();

        for (i = 0; i < this.wordToGuess.length; i++) {
            this.letters.push(new Letter(this.wordToGuess[i]));
        }
    };

    this.yourGuess = function (character) {
        var found = false;

        for (i = 0; i < this.letters.length; i++) {
            var letterFound = this.letters[i].guessLetter(character);
            if (letterFound) { found = true; };
        }
        return found;
    };

    this.wordGuessed = function () {
        for (i = 0; i < this.letters.length; i++) {
            if (this.letters[i].guessed === false) {
                return false;
            }
        }
        return true;
    }
};

Word.prototype.toString = function () {
    var gameWord = '';
    for (i = 0; i < this.letters.length; i++) {
        gameWord = gameWord + " " + this.letters[i];
    }
    gameWord = gameWord + "\n";
    return gameWord;
};

module.exports = Word;