var GamesActions = require( '../actions/GamesActions' );
var _ = require( 'lodash' );

var initialState = {
  selectedGameId: null,
  games: []
}

var games = function(state, action) {
  if( typeof state === 'undefined' ) {
    state = initialState
  }

  switch (action.type) {
    case  'RECEIVE_GAMES':
      return _.assign({}, state, {games: action.games});
    case 'DELETE_GAME':
      return _.remove( state, function(g) { return n.id === action.id }.bind(this) );
    default:
      return state;
  }
}

module.exports = games;
