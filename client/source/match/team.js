var Team = function() {
  var team = Object.create( teamProto );
  team.players = []
  return team;
}

var teamProto = {

  addPlayer: function( player ) {
    this.players.push( player );
    return this;
  },

  pass: function() {
    var player = this.playerInPossession();
    var receiver = this.playerToPass( player ); 
    // player.losePossession();
    // receiver.gainPossession();
  },

  playerToPass: function( playerInPossession ) {
    for ( player of this.players ) {
      if ( player.possession === false ) {
        var diffX = Math.abs( playerInPossession.posX - player.posX );
        var diffY = Math.abs( playerInPossession.posY - player.posY );
        player.distanceFromPossPlayer = Math.sqrt( diffX*diffX + diffY*diffY );
      }
    }
    
  },

  playerInPossession: function() {
    for ( player of this.players ) {
      if ( player.possession === true ) { return player; }
    }
  }

}

module.exports = Team;