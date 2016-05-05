var Pass = require( './pass' );
var Decision = require( './decision' );
var Pitch = require( './pitch' )

var Engine = function() {
  var engine = Object.create( engineProto );
  engine.players = [];
  engine.pitch = Pitch( 120, 90 );
  engine.decision = Decision();
  engine.pass = Pass();
  return engine;
}

var engineProto = {

  play: function() {
    var i = 0;
    while ( i < 10 ) {
      var decision = this.decision.make( this.findPlayerInPossession(), this.players, this.pitch );
      if ( decision.goingTo === 'pass' ) {
        this.makePass( decision );
      }
      i++
    }
  },

  findPlayerInPossession: function() {
    for ( player of this.players ) {
      if ( player.possession === true ) { 
        return player; 
      }
    }
  },

  makePass: function( options ) {
    this.pass.attempt( options );
  },

  addPlayer: function( player ) {
    this.players.push( player );
    return this;
  },

  addPlayers: function( players ) {
    for ( player of players ) {
      this.addPlayer( player );
    }
  }

}

module.exports = Engine;