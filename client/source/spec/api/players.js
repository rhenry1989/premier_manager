data = [
  {
    id: 1,
    club_id: 1,
    name: 'Rick Henry',
    technical: {
      passing: 25
    },
    brain: {
      decisions: 30,
      awareness: 23
    }
  },
  {
    id: 2,
    club_id: 1,
    name: 'Jon Henry',
    technical: {
      passing: 34
    },
    brain: {
      decisions: 31,
      awareness: 28
    }
  },
  {
    id: 3,
    club_id: 1,
    name: 'Lionel Messi',
    technical: {
      passing: 83
    },
    brain: {
      decisions: 92,
      awareness: 94
    }
  },
  {
    id: 4,
    club_id: 2,
    name: 'Cristiano Ronaldo',
    technical: {
      passing: 74
    },
    brain: {
      decisions: 90,
      awareness: 91
    }
  }
]

var Player = require( '../../player/player' );

var players = function() {
  return data.map( function(e,i)  {
    return Player( e )
  });
}


module.exports = players;
