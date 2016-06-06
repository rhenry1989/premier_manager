var combineReducers = require( 'redux' ).combineReducers;
var fetch = require( 'isomorphic-fetch' );

var gameActions = {

  requestGames: function() {
    return function( dispatch ) {
      console.log('hit');

      fetch( 'http://localhost:3000/games', {
        method: 'get'
      }).then( res => {
          return res.json()
      }).then( games => {
          dispatch( gameActions.receiveGames( games ) );
      })

    }
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
  }

}

module.exports = gameActions;
