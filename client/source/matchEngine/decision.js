var Decision = function() {
  var decision = Object.create( decisionProto );
  return decision;
};

var decisionProto = {

  make: function( pip, players, pitch ) {
    this.playerDistancesFromPossession( players, pip );
    var distanceLPost = this.distanceFromLPost( pip );
    var distanceRPost = this.distanceFromRPost( pip );

    if ( this.shootingOpportunity( pip ) ) {
      return 'shoot'
    }
    return 'pass'
  },

  shootingOpportunity: function( pip ) {
    var distanceX = ( pip.technical.shooting / 2 );
    if ( pip.posX > distanceX ) {
      return false;
    }
    if ( pip.posY > 10 && pip.posY < 80 ) {
      return true;
    }
  },

  distanceCalculator: function( posXA, posYA, posXB, posYB ) {
    var diffX = Math.abs( posXA - posXB );
    var diffY = Math.abs( posYA - posYB );
    return Math.sqrt( diffX*diffX + diffY*diffY );
  },

  distanceFromLPost: function( pip ) {
    return this.distanceCalculator( 0, 48.71, pip.posY, pip.posX )
  },

  distanceFromRPost: function( pip ) {
    return this.distanceCalculator( 0, 41.29, pip.posY, pip.posX )
  },

  playerDistancesFromPossession: function( players, pip ) {
    for ( player of players ) {
      if ( player.possession === false ) {
        var distance = this.distanceCalculator( player.posX, player.posY, pip.posY, pip.posX );
        player.updateDistanceFromPossession( distance );
      }
    }
  }

}

module.exports = Decision;