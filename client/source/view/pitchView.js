var PitchView = function() {
  var pitchView = Object.create( PitchViewProto );
  pitchView.canvas;
  pitchView.ctx;
  return pitchView;
}

var PitchViewProto = {
  
  setup: function() {
    this.pitch = document.getElementById( 'pitch' );
    this.ctx = pitch.getContext( '2d' );
  },

  drawBall: function( x, y ){
    this.ctx.beginPath();
    this.ctx.arc( x, y, 5, 0, 2 * Math.PI);
    this.ctx.stroke();
  },

  drawPlayers: function( players ) {
    for ( player of players ) {
      this.ctx.beginPath();
      this.ctx.arc(player.posX, player.posY,10,0,Math.PI*2,true);
      this.ctx.stroke(); 
      if ( player.possession ) {
        this.drawBall( player.posX, player.posY );
      }
    }

  },



}

module.exports = PitchView;