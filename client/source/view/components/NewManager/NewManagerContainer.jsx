var React = require( 'react' );
var NewManagerSubmit = require( './NewManagerSubmit' );
var NewManagerDetails = require( './NewManagerDetails' );

var NewManagerContainer = React.createClass({

  render: function() {
    return(
      <section className="home-menu-wrapper">
        <div className="panel container-med row-90-height">
          <NewManagerSubmit />
          <NewManagerDetails club={this.props.selectedClub} />
        </div>
      </section>
    )
  }

});

module.exports = NewManagerContainer;