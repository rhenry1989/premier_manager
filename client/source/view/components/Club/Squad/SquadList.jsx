var React = require( 'react' );

var SquadList = React.createClass({

  render: function() {
    var squad = this.props.players.map( function( player, index ) {
      return (
      <tr key={index}>
        <td>{player.name} {player.surname}</td>
        <td>{player.age}</td>
        <td>{player.club_id}</td>
        <td>{player.id}</td>
        <td>{player.nation_id}</td>
        <td>{player.rating}</td>
      </tr>
      )
    });
    return( 
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Club</th>
            <th>ID</th>
            <th>Nationality</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {squad}
        </tbody>
      </table>)
  }

});

module.exports = SquadList;