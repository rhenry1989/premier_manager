var React = require( 'react' );
var ReactDOM = require( 'react-dom' );

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
    var manager = this.state;
    var url = "http://localhost:3000/managers";

    var request = new XMLHttpRequest();
    request.open( "POST", url, true );
    request.setRequestHeader( "Content-Type", "application/json" );
    request.onload = function() {
      if ( request.status === 200 ) {
        ReactDOM.render(
          <ClubDashboard />,
          document.getElementById( 'app' )
        )
      }
    }.bind( this )
    request.send( JSON.stringify(manager) )
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