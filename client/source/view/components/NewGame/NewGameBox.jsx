var React = require( 'react' );
var NewGameSelect = require( './NewGameSelect' );
var NewGameLeagueDetails = require( './NewGameLeagueDetails' );

var NewGameBox = React.createClass({

  getInitialState: function() {
    return { 
      focusNation: this.props.nations[0],
      focusLeague: this.props.nations[0].leagues[0],
      focusClub: this.props.nations[0].leagues[0].clubs[0] 
    };
  },

  startNewGame: function(e) {
    e.preventDefault();
    ReactDOM.render(
      <NewManagerBox 
        selectedClub={this.state.focusClub}>
      </NewManagerBox>,
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
      <section className="__vertical-align">
        <div className="panel container-med row-90-height">
          <NewGameSelect 
            nations={this.props.nations} 
            focusNation={this.state.focusNation}
            selectNation={this.setFocusNation}
            selectLeague={this.setFocusLeague}>
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
