var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {

    var dictionary = {
        G : 'C',
        C : 'G',
        T : 'A',
        A : 'U'
    };

    var rna = dna.split('').map(function(nucleotide) {

        if(!dictionary[nucleotide])
            throw new Error('Invalid input');

        return dictionary[nucleotide];
    }).join('');    

    return rna;
};

module.exports = DnaTranscriber;