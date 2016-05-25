var React = require( 'react' );
var ClubMenu = require( './ClubMenu' );
var SquadContainer = require( './Squad/SquadContainer' );

var ClubDashboard = React.createClass({

  render: function() {
    return (
      <section className="home-menu-wrapper">
        <div className="panel container row row-90-height">
          <div className="column column-2 __border-r scroll-y">
            <ClubMenu />
          </div>
          <div className="column column-10">
            <SquadContainer players={this.props.selectedClub.players} />
          </div>
        </div>
      </section>
    )
  }

});

module.exports = ClubDashboard;