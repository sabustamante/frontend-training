// * constructor parameters
// - legs: the amount of legs the walker has
// * methods
// - getLegs : It returns the amount of legs (the ones received in the constructor)
// - getSteps: It returns the amount of steps done
// - walk    : It increments the amount of steps done

function Walker(legs) {
    if (typeof legs != 'number') {
        throw 'Error: the amount of legs provided is not a number.';
    }
    if (legs == 0) {
        throw 'Error: the amount of legs provided is zero.';
    }
    if ((legs % 2) != 0) {
        throw 'Error: the amount of legs provided is an odd number.';
    }
    this.legs = legs;
    this.steps = 0;
}

Walker.prototype.getLegs = function () {
    return this.legs;
};

Walker.prototype.getSteps = function () {
    return this.steps;
};

Walker.prototype.walk = function () {
    this.steps++;
};

module.exports = Walker;
