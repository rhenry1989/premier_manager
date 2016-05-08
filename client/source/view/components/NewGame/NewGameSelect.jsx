var React = require( 'react' );
var NewGameSelectNation = require( './NewGameSelectNation' );
var NewGameSelectLeague = require( './NewGameSelectLeague' );
var NewGameSubmit = require( './NewGameSubmit' );

var NewGameSelect = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault()
    this.props.startGame();
  },

  render: function() {
    return (
      <div className="panel-header __text-large">
        <div className="__float-left">Select team to manage</div>
        <div className="__float-right">
          <form className="inline-form __text-right" onSubmit={this.onFormSubmit}>
            <NewGameSelectNation 
              nations={this.props.nations}
              selectNation={this.props.selectNation}>
            </NewGameSelectNation>
            <NewGameSelectLeague 
              leagues={this.props.focusNation.leagues}
              selectLeague={this.props.selectLeague}>
            </NewGameSelectLeague>
            <NewGameSubmit>
            </NewGameSubmit>
          </form>
        </div>
      </div>
    )
  }

});

module.exports = NewGameSelect;