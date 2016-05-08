var React = require( 'react' );

var NewGameNationDetail = React.createClass({

  getInitialState: function() {
    return { selectedIndex: null };
  },

  onClubClick: function(e) {
    var newIndex = e.target.value;
    this.setState({ selectedIndex: newIndex });
    this.props.selectClub( this.props.league.clubs[newIndex] );
  },

  render: function() {
    if(!this.props.league){return <h4> No Country Selected </h4>}

    var clubs = this.props.league.clubs.map(function( club, index ){
      return <li className="panel-list-item" key={index} value={index} onClick={this.onClubClick} >{club.name}</li>
    }.bind(this))

    return (
      <ul className="panel-list">
        { clubs }
      </ul>
    )
  }

});

module.exports = NewGameNationDetail;