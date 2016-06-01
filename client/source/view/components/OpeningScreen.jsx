var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var connect = require( 'react-redux' ).connect;
var actions = require( '../actions/GamesActions' );

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
      <LoadGameContainer games={this.props.games} />,
      document.getElementById( 'toast' )
    )
  },

  componentDidMount: function() {
    this.props.dispatch( actions.fetchGamesIfNeeded() );
    console.log( 'mounted' );
  },

  render: function() {
    var dispatch = this.props.dispatch;
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
            <div onClick={ function() { dispatch( actions.testGame() ) } } className="panel-list-item">
              Load game
              <i className="fa fa-arrow-circle-o-right __float-right" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </section>
    )
  }

});

var mapStateToProps = function( state ) {

}

OpeningScreen = connect()( OpeningScreen )

module.exports = OpeningScreen;
