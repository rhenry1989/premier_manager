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

  render: function() {
    var nations = this.props.nations.map(function( nation, index ) {
      return <option value={index} key={index}>{nation.name}</option>
    });
    return ( 
      <div className="dropdown-w-icon __margin-r-sm">
        <select className="dropdown" value={this.state.selectedIndex} onChange={this.onNationChange}>
          {nations}
        </select>
        <div className="dropdown-icon">
          <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
        </div>
      </div>
    )
  }

});

module.exports = NewGameSelectNation;