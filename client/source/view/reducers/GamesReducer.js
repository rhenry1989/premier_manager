var GamesActions = require( '../actions/GamesActions' );
var _ = require( 'lodash' );

var initialState = {
  selectedGameId: null,
  games: [],
  gamesLoaded: false,
  gamesLoadedShowing: false
}

var games = function(state, action) {
  if( typeof state === 'undefined' ) {
    state = initialState
  }

  switch (action.type) {

    case 'CLOSE_LOAD_GAMES':
      return _.assign({}, state, { gamesLoadedShowing: false } );
    case 'RECEIVE_GAMES':
      return _.assign({}, state, { games: action.games, gamesLoaded: true, gamesLoadedShowing: true });
    case 'DELETE_GAME':
      var index = _.findIndex( state.games, function(game) { return game.id === action.id } );
      var newGames = state.games.slice( 0, index ).concat( state.games.slice( index + 1 ) );
      console.log( newGames );
      return _.assign({}, state, { games: newGames });
    default:
      return state;
  }
}

module.exports = games;
