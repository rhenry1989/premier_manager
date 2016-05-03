var Decision = function() {
  var decision = Object.create( decisionProto );
  return decision;
}

var decisionProto = {

  make: function( players, pitch ) {
    var playerInPossession = this.findPlayerInPossession( players );
    this.playerDistancesFromPossession( players, playerInPossession )
    var distanceLPost = this.distanceFromLPost( playerInPossession );
    var distanceRPost = this.distanceFromRPost( playerInPossession );

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

  distanceCalculator: function( posXA, posYA, posXB, posYB ) {
    var diffX = Math.abs( posXA - posXB );
    var diffY = Math.abs( posYA - posYB );
    return Math.sqrt( diffX*diffX + diffY*diffY );
  },

  distanceFromLPost: function( playerInPossession ) {
    return this.distanceCalculator( 0, 48.71, playerInPossession.posY, playerInPossession.posX )
  },

  distanceFromRPost: function( playerInPossession ) {
    return this.distanceCalculator( 0, 41.29, playerInPossession.posY, playerInPossession.posX )
  },

  playerDistancesFromPossession: function( players, playerInPossession ) {
    for ( player of players ) {
      if ( player.possession === false ) {
        var distance = this.distanceCalculator( player.posX, player.posY, playerInPossession.posY, playerInPossession.posX );
        player.updateDistanceFromPossession( distance );
      }
    }
  }

}

module.exports = Decision;