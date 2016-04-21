var Pass = function( player, players ) {
  var pass = Object.create( passProto );
  pass.players = players;
  pass.player = player;
  return pass;
}

var passProto = {

  make: function() {
    var receiver = this.select(); 
    this.player.losePossession();
    receiver.gainPossession();
    receiver.resetDistanceFromPossession();
  },

  updatePlayer: function( player ) {
    this.player = player
  },

  select: function() {
    if ( this.player.passing >= 15 ) {
      return _.maxBy( this.players, function( player ) {
        return player.distanceFromPossession
      });
    } else if ( this.player.passing < 15 ) {
      return _.minBy( this.players, function( player ) {
        return player.distanceFromPossession
      })
    }
  }

}

module.exports = Pass