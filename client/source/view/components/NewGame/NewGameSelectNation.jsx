var React = require( 'react' );

var NewGameSelectNation = React.createClass({

  getInitialState: function() {
    return { selectedIndex: this.props.nations[0] };
  },

  handleChange: function(e) {
    var newIndex = e.target.value;
    this.setState({ selectedIndex: newIndex });
    this.props.selectNation( this.props.nations[newIndex] );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log( 'submitted' );
    this.props.startGame();
  },

  render: function() {
    var options = this.props.nations.map(function( nation, index ) {
      return <option value={index} key={index}>{nation.name}</option>
    });
    return (
      <form className="inline-form __text-right" onSubmit={this.handleSubmit}>
        <div className="dropdown-w-icon __margin-r-sm">
          <select className="dropdown" value={this.state.selectedIndex} onChange={this.handleChange}>
            {options}
          </select>
          <div className="dropdown-icon">
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </div>
        </div>
        <div className="dropdown-w-icon __margin-r-sm">
          <select className="dropdown">
            <option>Premier Division</option>
            <option>First Division</option>
          </select>
          <div className="dropdown-icon">
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </div>
        </div>
        <button type="submit" className="button button-simple button-w-icon">
          Start Game
          <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
        </button>
      </form>
    )
  }

});

module.exports = NewGameSelectNation;