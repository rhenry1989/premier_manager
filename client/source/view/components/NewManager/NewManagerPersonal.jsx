var React = require( 'react' );

var NewManagerPersonal = React.createClass({

  updateFirstName: function(e) {
    this.props.setFirstName( e.target.value );
  },

  updateSecondName:function(e) {
    this.props.setSecondName( e.target.value );
  },

  updateDateOfBirth: function(e) {
    this.props.setDateOfBirth( e.target.value );
  },

  render: function() {
    return (
      <form className="basic-form">
        <h3>A few details...</h3>  
        <label className="__text-grey">First Name:</label>
        <input className="basic-form-input" type='text' onChange={this.updateFirstName}/>
        <label className="__text-grey">Second Name:</label>
        <input className="basic-form-input" type='text' onChange={this.updateSecondName}/>
        <label className="__text-grey">Date of birth:</label>
        <input id="dob" className="basic-form-input" type='date' onChange={this.updateDateOfBirth} />
      </form>
    )
  }

});

module.exports = NewManagerPersonal;