var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

var LoadGameList = require( './LoadGameList' );
var ClubContainer = require( '../Club/ClubContainer' );

var LoadGameContainer = React.createClass({

  loadGame: function(e) {
    this.props.close();
    e.preventDefault();
    ReactDOM.render(
      <ClubContainer game={this.state.selectedGameId} />,
      document.getElementById( 'app' )
    )
  },

  render: function() {
    return(
      <LoadGameList
        games={this.props.games}
        load={this.loadGame}
        closeToast={this.props.closeToast}
        deleteGame={this.props.deleteGame} />
    )
  }

});

module.exports = LoadGameContainer;
