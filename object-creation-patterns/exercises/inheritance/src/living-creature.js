// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise
function LivingCreature(oxygen) {
    if (typeof oxygen != 'number') {
        throw 'Error: the oxygen provided is not a number.';
    }
    if (oxygen < 0) {
        throw 'Error: the oxygen provided is less than zero.';
    }
}

LivingCreature.prototype.getRemainingOxygen = function () {
}

LivingCreature.prototype.breath = function () {
}

LivingCreature.prototype.consumeOxygen = function () {
}

LivingCreature.prototype.hasDied = function () {
}
module.exports = LivingCreature;
