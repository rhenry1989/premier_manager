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

  distanceCalculator: function( posXA, posYA, posXB, posYB ) {
    var diffX = Math.abs( posXA - posXB );
    var diffY = Math.abs( posYA - posYB );
    return Math.sqrt( diffX*diffX + diffY*diffY );
  },

  distanceFromPosts: function( playerInPossession ) {
    var lPost = 48.71
    var rPost = 41.29
    var lPostDiff = Math.abs( playerInPossession.posY - lPost );
    var diffX = playerInPossession.posX * playerInPossession.posX;
    return Math.sqrt( diffX + lPostDiff*lPostDiff );
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