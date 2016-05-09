var _ = require( 'lodash' );
var Pass = require( './pass' );
var Decision = require( './decision' );
var Pitch = require( './pitch' )

var Engine = function( players ) {
  var engine = Object.create( engineProto );
  engine.players = players;
  engine.pitch = Pitch( 120, 90 );
  engine.decision = Decision();
  engine.pass = Pass();
  engine.pIP;
  engine.teamMates = [];
  engine.opponents = [];
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

  setPlayerDanger: function( player ) {
    var x = (100 - player.posX);
    if( player.posY >= 45 ) {
      var y = player.posY - 45;
    }
    var y = 45 - player.posY;
    player.setDanger(x - y);
  },

  setOpponent: function( player ) {
    if ( player.club_id !== this.pIP.club_id ) {
      this.opponents.push( player )
    }
  },

  setTeamMate: function( player ) {
    if ( player.club_id === this.pIP.club_id ) { 
      this.teamMates.push( player );
    }
  },

  setPlayerInPossession: function( player ) {
    if ( player.possession === true ) { this.pIP = player; }
  },

  makePass: function() {
    this.pass.attempt();
  }

}

module.exports = Engine;