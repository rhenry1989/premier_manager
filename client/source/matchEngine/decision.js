var pass = require( './pass' );

var Decision = function() {
  var decision = Object.create( decisionProto );
  decision.players = [];
  decision.player = null;
  decision.pass = pass( decision.player, decision.players );
  return decision;
}

var decisionProto = {

  addPlayer: function( player ) {
    this.players.push( player );
    return this;
  },

  addPlayers: function( players ) {
    for ( player of players ) {
      this.addPlayer( player );
    }
  },

  update: function() {
    this.findPlayerInPossession();
    this.playerDistances();
  },

  findPlayerInPossession: function() {
    for ( player of this.players ) {
      if ( player.possession === true ) { 
        this.player = player;
        this.pass.updatePlayer( this.player ) 
      }
    }
  },

  distanceFromPossession: function( player ) {
    var diffX = Math.abs( this.player.posX - player.posX );
    var diffY = Math.abs( this.player.posY - player.posY );
    return Math.sqrt( diffX*diffX + diffY*diffY );
  },

  playerDistances: function() {
    for ( player of this.players ) {
      if ( player.possession === false ) {
        var distance = this.distanceFromPossession( player );
        player.distanceFromPossession = distance;
      }
    }
  }

}

module.exports = Decision;