var React = require( 'react' );
var ClubMenu = require( './ClubMenu' );

var ClubDashboard = React.createClass({

  render: function() {
    return (
      <section className="home-menu-wrapper">
        <div className="panel container row row-90-height">
          <div className="column column-2 __border-r scroll-y">
            <ClubMenu />
          </div>
        </div>
      </section>
    )
  }

});

module.exports = ClubDashboard;