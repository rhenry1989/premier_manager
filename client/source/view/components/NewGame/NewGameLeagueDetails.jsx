var React = require( 'react' );
var NewGameLeagueClubs = require( './NewGameLeagueClubs' );
var NewGameClubDetail = require( './NewGameClubDetail' );

var NewGameLeagueDetails = React.createClass({

  render: function() {
    return(
      <div className="panel-content row">
        <div className="column column-6 __border-r scroll-y">
          <NewGameLeagueClubs 
            clubs={this.props.focusLeague.clubs}
            selectClub={this.props.selectClub}>
          </NewGameLeagueClubs>
        </div>
        <div className="column column-6">
          <NewGameClubDetail club={this.props.focusClub} />
        </div>
      </div>
    )
  }

});

module.exports = NewGameLeagueDetails;