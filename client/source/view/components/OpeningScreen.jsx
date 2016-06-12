// var React = require( 'react' );
// var ReactDOM = require( 'react-dom' );
var connect = require( 'react-redux' ).connect;
var actions = require( '../actions/GamesActions' );

import React from 'react';
import ReactDOM from 'react-dom';

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
    var dispatch = this.props.dispatch;
    actions.requestGames()( dispatch );
  },

  render: function() {
    var loadGameContainer = <LoadGameContainer
      games={ this.props.games }
      closeToast={ function() { dispatch( actions.closeLoadGames() );} }
      deleteGame={ function(id) { dispatch( actions.deleteGame(id) ) } }>
    </LoadGameContainer >;
    var dispatch = this.props.dispatch;
    var loadGamesView = this.props.gamesLoadedShowing ? loadGameContainer : null;
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
        { loadGamesView }
      </section>
    )
  }

});

OpeningScreen = connect( state => state )( OpeningScreen )

module.exports = OpeningScreen;
