describe( 'Pass', function() {

  var Api = require( '../api/players' );
  var Pass = require( '../../matchEngine/pass' );
  var pass;
  var players;

  beforeEach( function() { 
    players = Api();
    players[0].setPos( 15, 45 );
    players[0].updateDistanceFromPossession( 45 );
    players[1].setPos( 60, 45 );
    players[1].gainPossession();
    players[2].setPos( 50, 45 );
    pass = Pass();      
  });

  it( 'should offer potential options to pass to', function() {
    var result = pass.options( players );
    expect( result.length ).toEqual( 2 );
  });

  it( 'should select the player closest to goal', function() {
    var options = pass.options( players );
    var result = pass.select( options );
    expect( result.name ).toEqual( 'Rick Henry' );
  });

});