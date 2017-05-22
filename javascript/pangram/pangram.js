var Pangram = function(input) {
    this.value = input;
};

Pangram.prototype.isPangram = function() {
    var alphabet = 'abcdefghijklmnopqrstuvxyz';

    this.value.toLowerCase().split('').forEach(function(word) {

        var index = alphabet.indexOf(word);
        if(index !== -1) {
            alphabet = alphabet.substring(0, index).concat(alphabet.substr(index + 1, alphabet.length));            
        }
    });

    return !alphabet.length;
    
};

module.exports = Pangram;