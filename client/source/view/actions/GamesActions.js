var combineReducers = require( 'redux' ).combineReducers;
var fetch = require( 'isomorphic-fetch' );

var gameActions = {

  requestGames: function() {
    return {
      type: 'REQUEST_GAMES'
    };
  },

  receiveGames: function( games ) {
    return {
      type: 'RECEIVE_GAMES',
      games: games
    }
  },

  deleteGame: function( id ) {
    return {
      type: 'DELETE_GAME',
      id: id
    }
  },

  fetchGamesIfNeeded() {
    console.log( 'fetching games' );
  }

}

module.exports = gameActions;
