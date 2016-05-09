var React = require( 'react' );
var NewManagerClub = require( './NewManagerClub' );  
var NewManagerPersonal = require( './NewManagerPersonal' );  

var NewManagerDetails = React.createClass({

  render: function() {
    return(
      <div className="panel-content row">
        <div className="column column-6 __border-r scroll-y __vertical-center-align">
          <NewManagerPersonal
            setFirstName={this.props.setFirstName}
            setSecondName={this.props.setSecondName}
            setDateOfBirth={this.props.setDateOfBirth}>
          </NewManagerPersonal>
        </div>
        <div className="column column-6 __vertical-center-align">
          <NewManagerClub club={this.props.club} />
        </div>
      </div>
    )
  }

});

module.exports = NewManagerDetails;