describe( 'Pitch', function() {

  var Pitch = require( '../../matchEngine/pitch' );
  var pitch;

  beforeEach(function() {
    pitch = Pitch( 120, 90 );
  });

  it( 'should have a Number as a length and width', function() {
    expect( pitch.length ).toEqual( 120 );
    expect( pitch.width ).toEqual( 90 );
  });

  it( 'should have a set width and height for the goal', function() {
    expect( pitch.goalWidth ).toEqual( 7.32 );
    expect( pitch.goalHeight ).toEqual( 2.44 );
  });

  it( 'should calculate center position of goal', function() {
    var goals = pitch.getGoalCenter();
    expect( goals ).toEqual( 45 )
  })

});