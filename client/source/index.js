var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var OpeningScreen = require( './view/components/OpeningScreen.jsx' )
var _ = require('lodash');

window.onload = function() {

  ReactDOM.render(
    <OpeningScreen />,
    document.getElementById( 'app' )
  )

}