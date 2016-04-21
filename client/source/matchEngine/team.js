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

}

module.exports = Team;