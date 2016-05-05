describe( 'Engine', function() {

  var Engine = require( '../../matchEngine/engine' );
  var Player = require( '../../player/player' );
  var engine;
  var player1;
  var player2;

  beforeEach( function() {
    engine = Engine();
    var options = {
      name: 'Rick Henry',
      technical: {
        passing: 10
      },
      brain: {
        decisions: 43
      }
    }
    player1 = Player( options );
  });

  it( 'should be able to add players to the team', function() {
    engine.addPlayer( player1 );
    expect(engine.players.length).toEqual( 1 );
  });

  describe( 'A match', function() {

    beforeEach( function() {
      engine.addPlayer( player1 )
      var options = {
        name: 'Jon Henry',
        technical: {
          passing: 10
        },
        brain: {
          decisions: 43
        }
      }
      player2 = Player( options );
      player2.gainPossession();
      engine.addPlayer( player2 );      
    });

    it( 'should find player in possession', function() {
      var result = engine.findPlayerInPossession();
      expect( result ).toBeTruthy();
      expect( result.name ).toEqual( 'Jon Henry' )
    });

    it ( 'should play a match', function() {
      engine.play();
    });

  });


});