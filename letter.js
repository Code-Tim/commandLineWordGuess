// Displays word/phrase to guess
function Letter(character) {
    this.character = character,
        this.guessed = false,

        this.display = function () {
            // Show capitalized guessed letter 
            if (this.guessed) {
                return this.character.toUpperCase();
            }
            // underlying character or a blank placeholder
            else {
                return "_";
            }
        },
        // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
        this.checkLetter = function (input) {
            if (input.toLowerCase() === this.character.toLowerCase()) {
                this.guessed = true;
                return true;
            }
            else {
                return false;
            }
        }
}

module.exports = Letter;