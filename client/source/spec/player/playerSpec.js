describe( "Player", function() {

  var players = require( '../api/players' )();
  var Player = require('../../player/player');
  var player;

  beforeEach(function() {
    player = players[0];
  });

  it( 'should set posX and posY to null', function() {
    expect( player.posX ).toEqual( null );
    expect( player.posY ).toEqual( null );
  });

  it( 'should be able to set position', function() {
    player.setPos( 50, 100 );
    expect( player.posX ).toEqual( 50 );
    expect( player.posY ).toEqual( 100 );
  });

  it( 'should be able to set closest rival', function() {
    player.setClosestOpponent( players[3] );
    expect( player.closestOpposition.name ).toEqual( 'Cristiano Ronaldo' )
  });

  it( 'should be able to set distance from possession', function() {
    player.setDistanceFromPossession( 70 );
    expect( player.distanceFromPossession ).toEqual( 70 );
  });

  it( 'should be able to set danger of position', function() {
    player.setDanger(75);
    expect( player.danger ).toEqual( 75 );
  })

  describe( 'when a player has a position', function() {

    beforeEach( function() {
      player.setPos( 50, 100 );
    });

    it( 'should be able to clear position', function() {
      player.clearPos();
      expect( player.posX ).toEqual( null );
      expect( player.posY ).toEqual( null );
    });
  });

  it( 'should be able to gain possession', function() {
    expect( player.possession ).toEqual( false )
    player.gainPossession();
    expect( player.possession ).toEqual( true )
  });

  describe( 'when a player has possession', function() {

    beforeEach( function() {
      player.gainPossession();
    });

    it( 'should be able to lose possession', function() {
      player.losePossession();
      expect( player.possession ).toEqual( false );
    })

  })

})