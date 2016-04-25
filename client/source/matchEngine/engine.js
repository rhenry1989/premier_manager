var pass = require( './pass' );

var Engine = function( matchView ) {
  var engine = Object.create( engineProto );
  engine.players = [];
  engine.player = null;
  engine.pass = pass();
  engine.matchView = matchView;
  return engine;
}

var engineProto = {

  updateView: function() {
    this.matchView.updatePlayers( this.players )
    this.matchView.drawPlayers();
  },

  makePass: function() {
    var pass = this.pass.attempt( this.player, this.players[1] );
    this.updateState();
    this.matchView.updateState( this.players[1].posX, this.players[1].posY );
    this.matchView.moveBall( pass );
  },

  addPlayer: function( player ) {
    this.players.push( player );
    return this;
  },

  addPlayers: function( players ) {
    for ( player of players ) {
      this.addPlayer( player );
    }
  },

  updateState: function() {
    this.findPlayerInPossession();
    this.playerDistances();
  },

  findPlayerInPossession: function() {
    for ( player of this.players ) {
      if ( player.possession === true ) { 
        this.player = player; 
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

module.exports = Engine;