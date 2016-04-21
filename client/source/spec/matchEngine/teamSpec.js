describe( 'Team', function() {

  var Team = require('../../match/team');
  var Player = require('../../player/player');
  var team;

  beforeEach( function() {
    team = Team();
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

  describe( 'a team with multiple players', function() {

    beforeEach( function() {
      for ( var i = 1; i < 3; i+=1 ) {
        var options = {
          name: 'Player' + i,
          passing: 10,
        }
        var player = Player( options );
        player.setPos( i, i );
        team.addPlayer( player )
      }
    });

    it( 'should calculate distance between players', function() {
      result = team.distanceFromPossession( team.players[0], team.players[1] );
      expect( result ).toEqual( 1.4142135623730951 );
    });  

  });

});