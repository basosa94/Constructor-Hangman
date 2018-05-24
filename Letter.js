var Letter = function(letter){

    this.letter = letter.toUpperCase();

    this.correctLetter = false;
    this.lettersGuessed = function(){
        if (this.correctLetter){
            console.log(this.letter)
        } else {
            console.log("_");
        }

    }

}









module.exports = Letter