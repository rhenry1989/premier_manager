var createStore = require( 'redux' ).createStore;
var gamesReducer = require( '../reducers/GamesReducer' );

var gamesStore = createStore( gamesReducer );

module.exports = gamesStore;
