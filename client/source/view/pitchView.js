var PitchView = function( canvas, ctx ) {
  var pitchView = Object.create( PitchViewProto );
  pitchView.ctx = ctx;
  pitchView.canvas = canvas;
  return pitchView;
}

var PitchViewProto = {

  draw: function() {
    this.drawPattern();
    this.drawPitch();
  },

  drawRect: function( col, x, y, l, h ) {
    this.ctx.strokeStyle = col;
    this.ctx.strokeRect(x, y, l, h);
  },

  drawPitch: function() {
    this.drawRect("#FFFFFF", 20,20,1050,580);
    this.drawRect("#FFFFFF", 20,85, 180,440);
    this.drawRect("#FFFFFF", 890,85, 180,440);
    this.drawRect("#FFFFFF", 20,210, 60,200);
  },

  drawPattern: function() {
    var i = 0;
    while ( i < 1090 ) {
      this.ctx.fillStyle="#1A8700";
      this.ctx.fillRect( 0, i, 1090, 100 );
      i = i + 206;
    }
  },

}

module.exports = PitchView;