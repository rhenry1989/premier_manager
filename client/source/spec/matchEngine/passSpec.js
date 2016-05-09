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

});