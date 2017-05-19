var Hamming = function() {};

Hamming.prototype.compute = function(firstDna, secondDna) {

    if(firstDna.length !== secondDna.length)
        throw new Error('DNA strands must be of equal length.');

    let difference = 0;
    for(let i = 0; i < firstDna.length; i++) {
        if(firstDna[i] !== secondDna[i])
            difference++;
    }

    return difference;
};

module.exports = Hamming;