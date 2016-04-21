describe( 'Decision', function() {

  var Decision = require( '../../matchEngine/decision' );
  var Player = require('../../player/player');
  var decision;

  beforeEach( function() {
    decision = Decision();
  });

  it( 'should be able to add players to the team', function() {
    var options = {
      name: 'Rick Henry',
      passing: 10,
    }
    var player = Player( options );
    team.addPlayer( player );
    expect( team.players.length ).toEqual( 1 );
  });

});