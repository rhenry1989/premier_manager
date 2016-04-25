var Pass = function() {
  var pass = Object.create( passProto );
  pass.toPlayer;
  pass.fromPlayer;
  pass.distance;
  pass.directionX;
  pass.directionY;
  return pass;
}

var passProto = {

  attempt: function( fromPlayer, toPlayer ) {
    this.fromPlayer = fromPlayer;
    this.toPlayer = toPlayer;
    this.getPoints();
    this.updatePossessions();
    return this;
  },

  updatePossessions: function() {
    this.fromPlayer.losePossession();
    this.toPlayer.gainPossession();
    this.toPlayer.resetDistanceFromPossession();
  },

  getPoints: function() {
    this.directionX = this.fromPlayer.posX - this.toPlayer.posX;
    this.directionY = this.fromPlayer.posY - this.toPlayer.posY;
  }

}

module.exports = Pass