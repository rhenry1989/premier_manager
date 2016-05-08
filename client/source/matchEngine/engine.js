var _ = require( 'lodash' );
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
    var decision = this.decision.make( this.findPlayerInPossession(), this.players, this.pitch );
    var lookup = {
      'pass' : this.makePass(),
      'shoot': this.makeShot()
    }
    lookup[decision];
  },

  findPlayerInPossession: function() {
    for ( player of this.players ) {
      if ( player.possession === true ) { 
        return player; 
      }
    }
  },

  makeShot: function() {

  },

  makePass: function() {
    this.pass.attempt();
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