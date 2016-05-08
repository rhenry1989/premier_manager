var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var NewGameSelect = require( './NewGameSelect' );
var NewGameLeagueDetails = require( './NewGameLeagueDetails' );
var NewManagerContainer = require( '../NewManager/NewManagerContainer' )

var NewGameBox = React.createClass({

  getInitialState: function() {
    return { 
      focusNation: this.props.nations[0],
      focusLeague: this.props.nations[0].leagues[0],
      focusClub: this.props.nations[0].leagues[0].clubs[0] 
    };
  },

  startGame: function() {
    // POST request to server to create game - dealt with by container
    ReactDOM.render(
      <NewManagerContainer 
        selectedClub={this.state.focusClub}>
      </NewManagerContainer>,
      document.getElementById( 'app' )
    )
  },

  setFocusNation: function(nation) {
    this.setState({
      focusNation: nation,
      focusLeague: nation.leagues[0],
      focusClub: nation.leagues[0].clubs[0]
    })
  },

  setFocusLeague: function(league) {
    this.setState({ 
      focusLeague: league,
      focusClub: league.clubs[0]
    })
  },

  setFocusClub: function(club) {
    this.setState({ focusClub: club })
  },

  render: function() {
    if ( !this.props.nations ) { return( <h4>Waiting for data</h4> ) }
    return(
      <section className="home-menu-wrapper">
        <div className="panel container-med row-90-height">
          <NewGameSelect 
            nations={this.props.nations} 
            focusNation={this.state.focusNation}
            selectNation={this.setFocusNation}
            selectLeague={this.setFocusLeague}
            startGame={this.startGame}>
          </NewGameSelect>
          <NewGameLeagueDetails 
            focusLeague={this.state.focusLeague}
            focusClub={this.state.focusClub}
            selectClub={this.setFocusClub}> 
          </NewGameLeagueDetails> 
        </div> 
      </section>    
    )
  }

});

module.exports = NewGameBox;
