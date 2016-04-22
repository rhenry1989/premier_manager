var Pass = function() {
  var pass = Object.create( passProto );
  pass.toPlayer;
  pass.fromPlayer;
  return pass;
}

var passProto = {

  attempt: function( fromPlayer, toPlayer ) {
    this.fromPlayer = fromPlayer;
    this.toPlayer = toPlayer;
    this.fromPlayer.losePossession();
    this.toPlayer.gainPossession();
    this.toPlayer.resetDistanceFromPossession();
  },

  calcRatio: function() {
    var y = Math.abs( this.fromPlayer.posY - this.toPlayer.posY ) 
    var x = Math.abs( this.fromPlayer.posX - this.toPlayer.posX ) 
    return y / x
  }

}

module.exports = Pass