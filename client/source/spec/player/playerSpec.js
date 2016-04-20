describe( "Player", function() {

  var Player = require('../../player/player');
  var player;

  beforeEach(function() {
    var options = {
      name: 'Rick Henry',
      passing: 10,
    }
    player = Player( options );
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