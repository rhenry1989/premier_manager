var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var NewGameContainer = require( './NewGame/NewGameContainer.jsx' );
var LoadGameContainer = require( './LoadGame/LoadGameContainer.jsx' );

var OpeningScreen = React.createClass({

  newGame: function() {
    ReactDOM.render(
      <NewGameContainer />,
      document.getElementById( 'app' )
    )
  },

  loadGame: function() {
    ReactDOM.render(
      <LoadGameContainer close={this.closeToast} />,
      document.getElementById( 'toast' )
    )
  },

  closeToast: function() {
    ReactDOM.unmountComponentAtNode(document.getElementById('toast'));
  },

  render: function() {
    return (
      <section className="home-menu-wrapper">
        <div className="home-menu">
          <div className="home-menu-logo">
            Premier Manager
          </div>
          <div className="panel">
            <div onClick={ this.newGame } className="panel-list-item">
              New game
              <i className="fa fa-arrow-circle-o-right __float-right" aria-hidden="true"></i>
            </div>
            <div onClick={ this.loadGame } className="panel-list-item">
              Load game
              <i className="fa fa-arrow-circle-o-right __float-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>
    )
  }

});

module.exports = OpeningScreen;