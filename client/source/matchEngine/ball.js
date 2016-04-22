var Ball = function( x, y ) {
  var ball = Object.create( ballProto )
  ball.size = 5;
  ball.posX = x;
  ball.posY = y;
  ball.color = 'yellow'
  return ball;
}

ballProto = {

  playerOffset: function() {
    this.posX += 11;
    this.posY += 11;
  }

}

module.exports = Ball;