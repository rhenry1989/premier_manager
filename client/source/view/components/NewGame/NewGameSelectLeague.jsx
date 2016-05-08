var React = require( 'react' );

var NewGameSelectLeague = React.createClass({

  onLeagueChange: function(e) {
    var newIndex = e.target.value;
    this.props.selectLeague( this.props.nation.leagues[newIndex] );
  },

  render: function() {
    if ( !this.props.nation ){ return( <h4>waiting for data</h4> ) }

    var leagues = this.props.nation.leagues.map( function(league, index) {
      return( <option key={index} value={index}>{league.name}</option> )
    });

    return(
      <div className="dropdown-w-icon __margin-r-sm">
        <select className="dropdown" onChange={this.onLeagueChange}>
          {leagues}
        </select>
        <div className="dropdown-icon">
          <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </div>
      </div>
    )
  }

});

module.exports = NewGameSelectLeague;