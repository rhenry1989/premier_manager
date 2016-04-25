var PitchView = require( './pitchView' );

var MatchView = function( ball ) {
  var matchView = Object.create( MatchViewProto );
  matchView.ball = ball;
  matchView.players;
  matchView.canvas;
  matchView.ctx;
  matchView.toX;
  matchView.toY;
  matchView.ratioY;
  matchView.ratioX;
  matchView.pitchView;
  return matchView;
}

var MatchViewProto = {
  
  setup: function() {
    this.canvas = document.getElementById( 'pitch' );
    this.ctx = pitch.getContext( '2d' );
    this.pitchView = PitchView( this.canvas, this.ctx );
  },

  updateState: function( toX, toY ) {
    this.toX = toX;
    this.toY = toY;
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

  setPoints: function( move ) {
    if ( move.directionX < 0 && move.directionY < 0 ) {
      this.ratioX = 1;
      this.ratioY = Math.abs( move.directionY / move.directionX );
    }
  },

  moveBall: function( move ) {
    this.clear();
    this.setPoints( move );
    this.pitchView.draw();
    this.drawPlayers();
    this.drawBall( this.ball.posX, this.ball.posY );
    this.ball.posX = this.ball.posX + this.ratioX;
    this.ball.posY = this.ball.posY + this.ratioY;
    if( this.ball.posX === this.toX && this.ball.posY === this.toY ) { return; }
    requestAnimationFrame( this.moveBall.bind( this ) );
  }



}

module.exports = MatchView;