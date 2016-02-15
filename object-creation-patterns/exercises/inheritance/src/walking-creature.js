// * inherits from
// - LivingCreature
// - Walker
// * constructor parameters:
// - the ones required to be passed to their ancestor
// * methods
// - walk
//   - must throw an exception if it has died
//   - must consume oxygen and walk

var LivingCreature = require("./living-creature");
var Walker = require("./walker");

function WalkingCreature() {
}

WalkingCreature.prototype.walk = function () {
};

module.exports = WalkingCreature;
