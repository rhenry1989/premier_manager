var Player = function( options ) {
  var player = Object.create( playerProto );
  player.id = options.id;
  player.club_id = options.club_id;
  player.name = options.name;
  player.nation = options.nation;
  player.technical = options.technical;
  player.brain = options.brain;
  player.posX = null;
  player.posY = null;
  player.danger = null;
  player.possession = false;
  player.distanceFromPossession = null;
  player.closestOpponent = null;
  return player;
}

var playerProto = {

  setClosestOpponent: function( player ) {
    this.closestOpposition = player
  },

  setDistanceFromPossession: function( distance ) {
    this.distanceFromPossession = distance;
  },

  setPos: function( x, y ) {
    this.posX = x;
    this.posY = y;
  },

  setDanger: function( value ) {
    this.danger = value;
  },

  clearPos: function() {
    this.posX = null;
    this.posY = null;
  },

  gainPossession: function() {
    this.possession = true;
  },

  losePossession: function() {
    this.possession = false;
  },

  resetDistanceFromPossession: function() {
    this.distanceFromPossession = null;
  }

}

module.exports = Player;