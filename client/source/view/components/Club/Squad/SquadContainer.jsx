var React = require( 'react' );
var SquadList = require( './SquadList' )

var SquadContainer = React.createClass({

  render: function() {
    return (
      <SquadList players={this.props.players} />
    )
  }

});

module.exports = SquadContainer;