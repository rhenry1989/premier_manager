var React = require( 'react' );
var ReactDOM = require( 'react-dom' );
var $ = require( 'jquery' );
var NewManagerSubmit = require( './NewManagerSubmit' );
var NewManagerDetails = require( './NewManagerDetails' );
var ClubDashboard = require( '../Club/ClubDashboard' );

var NewManagerContainer = React.createClass({

  getInitialState: function() {
    return( { 
      game_id: this.props.game_id,
      club_id: this.props.selectedClub.id,
      first_name: null,
      second_name: null,
      date_of_birth: null 
    });
  },

  setFirstName: function( firstName ) {
    this.setState({ first_name: firstName });
  },

  setSecondName: function( secondName ) {
    this.setState({ second_name: secondName });
  },

  setDateOfBirth: function( dateOfBirth ) {
    this.setState({ date_of_birth: dateOfBirth });
  },

  createManager: function() {
    var url = "http://localhost:3000/managers";
    $.ajax({
      type: "POST",
      url: url,
      data: this.state,
      success: function( res ) {
        ReactDOM.render(
          <ClubDashboard />,
          document.getElementById( 'app' )
        )
      }.bind(this),
      dataType: 'JSON'
    });
  },

  render: function() {
    return(
      <section className="home-menu-wrapper">
        <div className="panel container-med row-90-height">
          <NewManagerSubmit
            createManager={this.createManager}
          >
          </NewManagerSubmit>
          <NewManagerDetails 
            club={this.props.selectedClub}
            setFirstName={this.setFirstName}
            setSecondName={this.setSecondName}
            setDateOfBirth={this.setDateOfBirth}>
          </NewManagerDetails>
        </div>
      </section>
    )
  }

});

module.exports = NewManagerContainer;