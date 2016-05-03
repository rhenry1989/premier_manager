var Decision = function() {
  var decision = Object.create( decisionProto );
  return decision;
}

var decisionProto = {

  make: function( players ) {
    return {
      goingTo: 'pass',
      from: this.findPlayerInPossession( players ),
      to: this.selectPass( players )
    };
  },

  selectPass: function( players ) {
    var selected = players[0]
    for ( player of players ) {
      if ( player.possession === false  ) {
        selected = player;
      }
    }
    return selected;
  },

  findPlayerInPossession: function( players ) {
    for ( player of players ) {
      if ( player.possession === true ) { 
        return player; 
      }
    }
  },

  distanceFromPossession: function( player, playerInPossession ) {
    var diffX = Math.abs( playerInPossession.posX - player.posX );
    var diffY = Math.abs( playerInPossession.posY - player.posY );
    return Math.sqrt( diffX*diffX + diffY*diffY );
  },

  playerDistances: function( players, playerInPossession ) {
    for ( player of players ) {
      if ( player.possession === false ) {
        var distance = this.distanceFromPossession( player, playerInPossession );
        player.updateDistanceFromPossession( distance );
      }
    }
  }

}

module.exports = Decision;