var Letter = require("./Letter");

var Word = function(randomWord){
    this.word = randomWord;
    this.letters = [];
	this.underscores = [];
	this.splitWord = function() {
		this.letters = this.word.split("");
		
		underscores = this.letters.length;
		
		for (var i=0; i < underscores; i++ ) {
		this.underscores.push("_ ");
		}
	
		console.log(this.underscores.join(" "));
	}
	this.generateLetters = function() {
		for (i=0; i < this.letters.length; i++){
			this.letters[i] = new Letter (this.letters[i]);

			this.letters[i].lettersGuessed();
		}
	}
}

// test word constructor. Test successful.
var someWord = new Word ("Burnsville");
someWord.splitWord();
someWord.generateLetters();

module.exports = Word;

