var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var Provider = require( 'react-redux' ).Provider;
var OpeningScreen = require( './view/components/OpeningScreen.jsx' );
var _ = require( 'lodash' );
var XHR = require( './view/lib/xhr' );

var store = require( './view/stores/GamesStore' );

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
