var Pitch = function( length, width ) {
  var pitch = Object.create( pitchProto );
  pitch.length = length;
  pitch.width = width;
  pitch.goalWidth = 7.32;
  pitch.goalHeight = 2.44;
  return pitch;
}

var pitchProto = {

  getGoalCenter: function() {
    var center = ( this.width / 2 )
    return center;
  }

}

module.exports = Pitch;