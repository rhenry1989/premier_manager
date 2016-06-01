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

  closeToast: function() {
    ReactDOM.unmountComponentAtNode(document.getElementById('toast'));
  },

  render: function() {
    return(
      <LoadGameList
        games={this.props.games}
        load={this.loadGame}
        close={this.closeToast} />
    )
  }

});

module.exports = LoadGameContainer;
