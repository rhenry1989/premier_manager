var Team = function() {
  var team = Object.create( teamProto );
  team.players = []
  return team;
}

var teamProto = {

  addPlayer: function( player ) {
    this.players.push( player );
    return this;
  },

  pass: function() {
    var player = this.playerInPossession();
    this.calcTeamMateDistances( player );
    var receiver = this.playerToPass( player ); 
    player.losePossession();
    receiver.gainPossession();
    receiver.resetDistanceFromPossession();
  },

  calcTeamMateDistances: function( playerInPossession ) {
    for ( teamMate of this.players ) {
      if ( teamMate.possession === false ) {
        var distance = this.distanceFromPossession( playerInPossession, teamMate );
        teamMate.distanceFromPossession = distance;
      }
    }
  },

  playerToPass: function( player ) {
    if ( player.passing >= 15 ) {
      return _.maxBy( this.players, function( player ) {
        return player.distanceFromPossession
      });
    } else if ( player.passing < 15 ) {
      return _.minBy( this.players, function( player ) {
        return player.distanceFromPossession
      })
    }
  },

  distanceFromPossession: function( playerInPossession, teamMate ) {
    var diffX = Math.abs( playerInPossession.posX - teamMate.posX );
    var diffY = Math.abs( playerInPossession.posY - teamMate.posY );
    return Math.sqrt( diffX*diffX + diffY*diffY );
  },

  playerInPossession: function() {
    for ( player of this.players ) {
      if ( player.possession === true ) { return player; }
    }
  }

}

module.exports = Team;