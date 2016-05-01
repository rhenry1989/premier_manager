var Ball = function() {
  var ball = Object.create( ballProto )
  ball.size = 5;
  ball.posX;
  ball.posY;
  return ball;
}

ballProto = {

  playerOffset: function() {
    this.posX += 11;
    this.posY += 11;
  },

  setPos: function( x, y ) {
    this.posX = x;
    this.posY = y;
  }

}

module.exports = Ball;