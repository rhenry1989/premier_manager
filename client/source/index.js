// var React = require( 'react' );
// var ReactDOM = require( 'react-dom' );
// var Provider = require( 'react-redux' ).Provider;
// var OpeningScreen = require( './view/components/OpeningScreen.jsx' );
// var _ = require( 'lodash' );
// var XHR = require( './view/lib/xhr' );
//
// var store = require( './view/stores/GamesStore' );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import OpeningScreen from './view/components/OpeningScreen';
import XHR from './view/lib/xhr';

import store from './view/stores/GamesStore';



var xhr = new XHR( 'http://localhost:3000/games', store );

var render = function () {
  ReactDOM.render(
    <Provider store={store}>
      <OpeningScreen />
    </Provider>,
    document.getElementById( 'app' )
  )
}

window.onload = function() {
  render();
}
