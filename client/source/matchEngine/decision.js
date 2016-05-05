var Decision = function() {
  var decision = Object.create( decisionProto );
  return decision;
};

var decisionProto = {

  make: function( playerInPossession, players, pitch ) {
    this.playerDistancesFromPossession( players, playerInPossession );
    var distanceLPost = this.distanceFromLPost( playerInPossession );
    var distanceRPost = this.distanceFromRPost( playerInPossession );

    if ( this.shootingOpportunity( playerInPossession ) ) {
      return 'shoot'
    }
    return 'pass'
  },

  shootingOpportunity: function( playerInPossession ) {
    var distanceX = ( playerInPossession.technical.shooting / 2 );
    if ( playerInPossession.posX > distanceX ) {
      return false;
    }
    if ( playerInPossession.posY > 10 && playerInPossession.posY < 80 ) {
      return true;
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