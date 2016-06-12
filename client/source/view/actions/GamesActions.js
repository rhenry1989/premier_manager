var combineReducers = require( 'redux' ).combineReducers;
var fetch = require( 'isomorphic-fetch' );
import ReactDOM from 'react-dom';

var gameActions = {

  closeLoadGames: function() {
    return {
      type: 'CLOSE_LOAD_GAMES'
    }
  },

  requestGames: function() {
    return function( dispatch ) {

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
    console.log( 'hit', id )
    return {
      type: 'DELETE_GAME',
      id: id
    }
  }

}

module.exports = gameActions;
