var PitchView = function( ball) {
  var pitchView = Object.create( PitchViewProto );
  pitchView.ball = ball;
  pitchView.players;
  pitchView.canvas;
  pitchView.ctx;
  pitchView.destX;
  pitchView.destY;
  pitchView.rX;
  pitchView.rY;
  return pitchView;
}

var PitchViewProto = {
  
  setup: function() {
    this.canvas = document.getElementById( 'pitch' );
    this.ctx = pitch.getContext( '2d' );
  },

  updateState: function( destX, destY, rX, rY ) {
    this.destX = destX;
    this.destY = destY;
    this.rX = rX;
    this.rY = rY; 
  },

  updatePlayers: function( players ) {
    this.players = players
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  drawBall: function( x, y ){
    this.ctx.beginPath();
    this.ctx.arc( x, y, 5, 0, 2 * Math.PI );
    this.ctx.stroke();
  },

  drawPlayers: function() {
    for ( player of this.players ) {
      this.ctx.beginPath();
      this.ctx.arc( player.posX, player.posY,10,0,Math.PI*2,true );
      this.ctx.stroke();
    }
  },

  moveBall: function() {
    this.clear();
    this.drawPlayers();
    this.drawBall( this.ball.posX, this.ball.posY );
    this.ball.posX = this.ball.posX + 1;
    this.ball.posY = this.ball.posY + 1;
    if( this.ball.posX === this.rX && this.ball.posY === this.rY ) { return; }
    requestAnimationFrame( this.moveBall.bind( this ) );
  }



}

module.exports = PitchView;