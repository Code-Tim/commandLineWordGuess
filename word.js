var Letter = require("./letter.js");

var WordCategories = [
    {
        "Toys": "All",
        "wordlist": ["Bettle Juice", "Action figures", "Airplanes", "Alphabet blocks", "Balloons", "Balls", "Bells", "Blocks", "Boats", "Books", "Bubbles", "Building sets", "Cards", "Cars", "Carts", "Clay", "Colored pencils", "Crayons", "Dolls", "Drums", "Electronics", "Games", "Games", "Gliders", "Guns", "Jacks", "Kites", "Knights", "Locomotives", "Magnets", "Marbles", "Musical instruments", "Pails", "Phones", "Plastic footballs", "Plush animals", "Pogo sticks", "Puppets", "Puzzles", "Radio controlled toys", "Rattles", "Rockets", "Rocking horse", "Shovels", "Skates", "Soldiers", "Spoons", "Stilts", "Stuffed animals", "Teddy bears", "Toboggans", "Tops", "Toy cars", "Trains", "Tricycles", "Trucks", "Vehicles", "Video games", "Wagons", "Watches", "Xylophones", "Yo-yos"]
    }
];

var Word = function () {
    this.letters = [];
    this.guess = '';
    this.words = WordCategories[0].wordlist;

    this.selectRandomWord = function () {
        var randomEntry = Math.floor(Math.random() * this.words.length);

        this.guess = this.words[randomEntry].toUpperCase();

        for (i = 0; i < this.guess.length; i++) {
            this.letters.push(new Letter(this.guess[i]));
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
            if (this.letters[i].isGuessed === false) {
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