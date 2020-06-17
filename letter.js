// underlying character or a blank placeholder
var Blank = "_";

// Displays word/phrase to guess
var Letter = function (letter) {
    this.character = letter;
    this.placeholder = (this.character === ' ' || (/[.\-\']/.test(this.character))) ? this.character : Blank;
    this.guessed = (this.character === ' ' || (/[.\-\']/.test(this.character))) ? true : false;
}; Letter.prototype.toString = function () {
    return (this.guessed) ? this.character : this.placeholder;
};


// Show capitalized guessed letter 
Letter.prototype.guessLetter = function (guess) {
    guess = guess.toUpperCase();

    if (this.character === guess) {
        this.guessed = true;
        return true;
    }

    return false;
};

module.exports = Letter;