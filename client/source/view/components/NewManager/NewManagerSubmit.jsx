var React = require( 'react' );

var NewManagerSubmit = React.createClass({

  render: function() {
    return(
      <div className="panel-header __text-large">
        <div className="__float-left">Manager Details</div>
        <div className="__float-right">
          <form className="inline-form __text-right" onSubmit={this.beginGame}>
            <button type="submit" className="button button-simple button-w-icon">
              Continue
              <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
            </button>
          </form>
        </div>
      </div>
    )
  }

});

module.exports = NewManagerSubmit;