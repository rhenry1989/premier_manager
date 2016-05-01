var Player = function( options ) {
  var player = Object.create( playerProto );
  player.id = options.id;
  player.name = options.name;
  player.nation = options.nation;
  player.technical = options.technical;
  player.brain = options.brain;
  player.posX = null;
  player.posY = null;
  player.possession = false;
  player.distanceFromPossession = null;
  return player;
}

var playerProto = {

  setPos: function( x, y ) {
    this.posX = x;
    this.posY = y;
    return this;
  },

  clearPos: function() {
    this.posX = null;
    this.posY = null;
    return this;
  },

  gainPossession: function() {
    this.possession = true;
    return this;
  },

  losePossession: function() {
    this.possession = false;
    return this;
  },

  resetDistanceFromPossession: function() {
    this.distanceFromPossession = null;
    return this;
  }

}

module.exports = Player;