var React = require( 'react' );
var ClubDashboard = require( './ClubDashboard' );

var $ = require( 'jquery' );

var ClubContainer = React.createClass({

  getInitialState: function() {
    return { game: this.props.game, selectedManager: null }
  },

  componentDidMount: function() {
    var url = "http://localhost:3000/games/" + this.state.game
    $.get( url, function(game) {
      this.setState({ game: game, selectedManager: game.managers[0] });
    }.bind(this) )
  },

  render: function() {
    if (!this.state.selectedManager) { return(<h4>Waiting for data</h4>) }
    return(
      <ClubDashboard selectedClub={this.state.selectedManager.club} />
    )
  }

});

module.exports = ClubContainer;