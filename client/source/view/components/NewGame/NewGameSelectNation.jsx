var React = require( 'react' );

var NewGameSelectNation = React.createClass({

  getInitialState: function() {
    return { selectedIndex: 0 };
  },

  onNationChange: function(e) {
    var newIndex = e.target.value;
    this.setState({ selectedIndex: Number( newIndex ) });
    this.props.selectNation( this.props.nations[newIndex] );
  },

  handleSubmit: function(e) {
    e.preventDefault();
    console.log( 'submitted' );
    this.props.startGame();
  },

  render: function() {
    var nations = this.props.nations.map(function( nation, index ) {
      return <option value={index} key={index}>{nation.name}</option>
    });
    return (
      <form className="inline-form __text-right" onSubmit={this.handleSubmit}>
        <div className="dropdown-w-icon __margin-r-sm">
          <select className="dropdown" value={this.state.selectedIndex} onChange={this.onNationChange}>
            {nations}
          </select>
          <div className="dropdown-icon">
            <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </div>
        </div>
      </form>
    )
  }

});

module.exports = NewGameSelectNation;