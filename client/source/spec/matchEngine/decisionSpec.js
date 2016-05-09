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
          passing: 10,
          shooting: 50
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

    describe( 'when a player has possession', function() {

      beforeEach( function() {
        // playerInPossession = players[1];
      });

      // it( 'should calculate distance from left post', function() {
      //   var result = decision.distanceFromLPost( playerInPossession );
      //   expect( result ).toEqual( 112.38622735904966 );
      // });

      // it( 'should calculate distance from right post', function() {
      //   var result = decision.distanceFromRPost( playerInPossession );
      //   expect( result ).toEqual( 115.96061443438458 );
      // });

      describe( 'when a player makes a decision', function() {

        beforeEach( function() {
          // decision.playerDistancesFromPossession( players, playerInPossession );
        });

        // it( 'should select option when in possession', function() {
        //   var result = decision.make( players[1], players );
        //   expect( result ).toEqual( 'pass' );
        // });

        // it( 'should return false when player not in a shooting position', function() {
        //   var result = decision.shootingOpportunity( playerInPossession )
        //   expect( result ).toEqual( false );
        // });

        describe( 'when a player is in a shooting position', function() {

          beforeEach( function() {
            // playerInPossession.setPos( 10, 50 );
          });

          // it( 'should return true if in shooting bounds', function() {
          //   var result = decision.shootingOpportunity( playerInPossession );
          //   expect( result ).toEqual( true );
          // });

        });

      });

    });

  });

});