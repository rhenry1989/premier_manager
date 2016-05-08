var React = require( 'react' );

var NewGameSubmit = React.createClass({

  render: function() {
    return(
      <button type="submit" className="button button-simple button-w-icon">
        Start Game
        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
      </button>
    )
  }

});

module.exports = NewGameSubmit;