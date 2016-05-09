describe( 'Engine', function() {

  var Engine = require( '../../matchEngine/engine' );
  var Player = require( '../../player/player' );
  var Api = require( '../api/players' );
  var engine;

  beforeEach( function() {
    var players = Api();
    players[1].gainPossession();
    players[0].setPos( 15, 45 );
    players[1].setPos( 30, 45 );
    engine = Engine( players );
  });

  it( 'should be created players', function() {
    expect(engine.players.length).toEqual( 4 );
  });

  it( 'should be able to calculate a distance between two points', function() {
    var result = engine.twoPointsDistance( 0, 0, 100, 100);
    expect( result ).toEqual( 141.4213562373095 );
  });

  describe( 'A match', function() {

    it( 'should set player in possession', function() {
      engine.setPlayerInPossession( engine.players[1] );
      expect( engine.pIP.name ).toEqual( 'Jon Henry' );
    });

    it( 'should set opponent for pIP', function() {
      engine.setOpponent( engine.players[3] );
      expect( engine.opponents.length ).toEqual( 1 );
      expect( engine.opponents[0].name ).toEqual( 'Cristiano Ronaldo' );
    });

    beforeEach(function() {
      engine.setPlayerInPossession( engine.players[1] );
      engine.setPlayerInPossession( engine.players[1] );
    });

    it( 'should set team mate for pIP', function() {
      engine.setTeamMate( engine.players[0] );
      expect( engine.teamMates.length ).toEqual( 1 ); 
      expect( engine.teamMates[0].name ).toEqual( 'Rick Henry' ); 
    });

    it( 'should calculate danger level for teamMate', function() {
      engine.setPlayerDanger( engine.players[0] );
      expect( engine.players[0].danger ).toEqual( 85 );
    });

    it( 'shoud set distance from possession for team mate', function() {
      engine.setDistanceFromPossession( engine.players[0] );
      expect( engine.players[0].distanceFromPossession ).toEqual( 15 );
    }); 

  });


});