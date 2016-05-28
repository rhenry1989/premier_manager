var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
// var OpeningScreen = require( './view/components/OpeningScreen.jsx' );
var Main = require( './view/components/main.jsx' )
var _ = require('lodash');

window.onload = function() {

  ReactDOM.render(
    <Main />,
    document.getElementById( 'app' )
  )

}