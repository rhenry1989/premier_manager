describe( 'Pass', function() {

  var Pass = require( '../../matchEngine/pass' );
  var Player = require( '../../player/player' );
  var pass;
  var players;

  beforeEach( function() {
    var options = {
      name: 'Rick Henry',
      technical: {
        passing: 90
      },
      brain: {
        decisions: 43
      }
    }
    var player1 = Player( options );
    var options = {
      name: 'Jon Henry',
      technical: {
        passing: 10
      },
      brain: {
        decisions: 43
      }
    }
    var player2 = Player( options );
    player2.gainPossession();
    players = [ player1, player2 ];
    pass = Pass();      
  });

  it( 'should select what player to attempt to pass to', function() {
    var result = pass.select( players );
    expect( result.name ).toEqual( 'Rick Henry' );
  });


});