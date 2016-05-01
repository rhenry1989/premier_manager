var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var _ = require('lodash');

window.onload = function() {

  var OpeningScreen = React.createClass({

    render: function() {
      return (
        <section className="home-menu-wrapper">
          <div className="home-menu">
            <div className="home-menu-logo">
              Premier Manager
            </div>
            <div className="panel">
              <div className="panel-list-item">
                New game
                <i className="fa fa-arrow-circle-o-right __float-right" aria-hidden="true"></i>
              </div>
              <div className="panel-list-item">
                Load game
                <i className="fa fa-arrow-circle-o-right __float-right" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </section>
      )
    }

  });

  ReactDOM.render(
    <OpeningScreen />,
    document.getElementById( 'app' )
  )

}