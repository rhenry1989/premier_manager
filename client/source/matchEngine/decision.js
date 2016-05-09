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

  distanceFromLPost: function( pip ) {
    return this.distanceCalculator( 0, 48.71, pip.posY, pip.posX )
  },

  distanceFromRPost: function( pip ) {
    return this.distanceCalculator( 0, 41.29, pip.posY, pip.posX )
  },

}

module.exports = Decision;