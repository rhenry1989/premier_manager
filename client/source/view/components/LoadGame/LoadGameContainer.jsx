var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var LoadGameList = require( './LoadGameList' );
var ClubContainer = require( '../Club/ClubContainer' );

var LoadGameContainer = React.createClass({

  getInitialState: function() {
    return { games: [], selectedGameId: null }
  },

  setGameId: function( gameId ) {
    this.setState({ selectedGameId: gameId })
  },

  loadGame: function(e) {
    this.props.close();
    e.preventDefault();
    ReactDOM.render(
      <ClubContainer game={this.state.selectedGameId} />,
      document.getElementById( 'app' )
    )
  },

  componentDidMount: function() {
    GameActions.loadGames();
  },

  render: function() {
    return(
      <LoadGameList 
        setId={this.setGameId}
        games={this.state.games} 
        load={this.loadGame} 
        close={this.props.close} />
    )
  }

});

module.exports = LoadGameContainer;