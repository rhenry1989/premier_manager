var Pass = function() {
  var pass = Object.create( passProto );
  pass.to;
  pass.from;
  pass.distance;
  pass.directionX;
  pass.directionY;
  return pass;
}

var passProto = {

  attempt: function( options ) {
    this.from = options.from;
    this.to = options.to;
    this.updatePossessions();
    return this;
  },

  updatePossessions: function() {
    this.from.losePossession();
    this.to.gainPossession();
    this.to.resetDistanceFromPossession();
  }

}

module.exports = Pass