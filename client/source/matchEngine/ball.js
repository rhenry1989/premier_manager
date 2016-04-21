var Ball = function() {
  var ball = Object.create( ballProto )
  ball.size = 5;
  ball.color = 'yellow'
  return ball;
}

ballProto = {

}

module.exports = Ball;