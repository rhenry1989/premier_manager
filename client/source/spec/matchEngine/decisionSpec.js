describe( 'Decision', function() {

  var Decision = require( '../../matchEngine/decision' );
  var Player = require('../../player/player');
  var decision;
  var players;
  var playerInPossession;

  beforeEach( function() {
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
    decision = Decision();
  });

  describe( 'Possession', function() {

    beforeEach( function() {
      player1.setPos( 50, 50 );
      var options2 = {
        name: 'Jon Henry',
        technical: {
          passing: 10
        },
        brain: {
          decisions: 43
        }
      }
      player2 = Player( options2 );
      player2.setPos( 100, 100 );
      player2.gainPossession();
      players = [ player1, player2 ];
    });

    it( 'should find player in possession', function() {
      var result = decision.findPlayerInPossession( players );
      expect( result ).toBeTruthy();
      expect( result.name ).toEqual( 'Jon Henry' )
    });

    it( 'should be able to calculate a distance', function() {
      var result = decision.distanceCalculator( 0, 0, 100, 100);
      expect( result ).toEqual( 141.4213562373095 );
    });

    describe( 'when a player has possession', function() {

      beforeEach( function() {
        playerInPossession = decision.findPlayerInPossession( players );
      });

      it( 'should calculate distance from left and right posts', function() {
        var result = decision.distanceFromPosts( playerInPossession );
        expect( result ).toEqual( 112.38622735904966 );
      });

      describe( 'when a player makes a decision', function() {

        beforeEach( function() {
          decision.playerDistancesFromPossession( players, playerInPossession );
        });

        it( 'should select option when in possession', function() {
          var result = decision.make( players );
          expect( result.goingTo ).toEqual( 'pass' );
          expect( result.from.name ).toEqual( 'Jon Henry' );
          expect( result.to.name ).toEqual( 'Rick Henry' );
        });

        it( 'should select what player to attempt to pass to', function() {
          var result = decision.selectPass( players );
          expect( result.name ).toEqual( 'Rick Henry' );
        });

      });

    });

  });

});