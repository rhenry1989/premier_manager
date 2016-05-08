var _ = require( 'lodash' );

var Pass = function() {
  var pass = Object.create( passProto );
  return pass;
}

var passProto = {

  attempt: function( players ) {
    // 1. based on time and space
      // If limited time, short, decision based pass or long ball??
    // 2. player in view based on awareness & time
    var options = this.options( players );
    // 3. player in space based on decisions
    // 4. player in advantageous position based on anticipation 
    var willPassTo = this.select( options );
    // 5. make pass - execution based on passing & technique
    return 'Yo'
  },

  select: function( options ) {
    return _.minBy( options, 'posX' );
  },

  options: function( players ) {
    return _.filter( players, { possession: false, club_id: 1 })
  },

  updatePossessions: function() {
    this.from.losePossession();
    this.to.gainPossession();
    this.to.resetDistanceFromPossession();
  }

}

module.exports = Pass