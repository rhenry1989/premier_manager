// var createStore = require( 'redux' ).createStore;
// var gamesReducer = require( '../reducers/GamesReducer' );

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import gamesReducer from '../reducers/GamesReducer';

let gamesStore = applyMiddleware( thunk )( createStore )( gamesReducer );

module.exports = gamesStore;
