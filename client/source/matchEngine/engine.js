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
      var decision = this.decision.make( this.players, this.pitch );
      console.log( 'players has decided to', decision.goingTo );
      if ( decision.goingTo === 'pass' ) {
        console.log( 'opted to pass from ' + decision.from.name + ' to ' +  decision.to.name )
        this.makePass( decision );
      }
      i++
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