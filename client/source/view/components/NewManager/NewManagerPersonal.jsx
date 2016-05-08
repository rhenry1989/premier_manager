var React = require( 'react' );

var NewManagerPersonal = React.createClass({

  render: function() {
    return (
      <form className="basic-form">
        <h3>A few details...</h3>  
        <label className="__text-grey" htmlFor="first_name">First Name:</label>
        <input className="basic-form-input" type='text' name="first_name" />
        <label className="__text-grey" htmlFor="second_name">Second Name:</label>
        <input className="basic-form-input" type='text' name="second_name" />
        <label className="__text-grey" htmlFor="date_of_birth">Date of birth:</label>
        <input className="basic-form-input" type='date' name="date_of_birth" />
      </form>
    )
  }

});

module.exports = NewManagerPersonal;