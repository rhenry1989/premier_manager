var React = require( 'React' );

var ClubMenu = React.createClass({

  render: function() {
    return (
      <ul className="panel-list">
        <li className="panel-list-item">Mail</li>
        <li className="panel-list-item">Squad</li>
        <li className="panel-list-item">Tactics</li>
        <li className="panel-list-item">Fixtures</li>
        <li className="panel-list-item">Transfers</li>
      </ul>
    )
  }

});

module.exports = ClubMenu;