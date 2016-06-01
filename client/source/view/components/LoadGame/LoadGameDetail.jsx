var React = require( 'react' );
var LoadGameClubInfo = require( './LoadGameClubInfo' );

var LoadGameDetail = React.createClass({

  deleteGame(e) {
    e.preventDefault();
    console.log(e.target.value);
  },

  render: function() {
    var names = this.props.game.managers.map(function(manager, index){
      return <LoadGameClubInfo key={index} manager={manager} />
    });

    return(
      <figure className="card">
        <div className="card-content">
          {names}
        </div>
        <div className="card-footer">
          <input type="radio" name="gameSelect" value={this.props.game.id} />Select Game
          <button type="submit" onClick={this.deleteGame} value={this.props.game.id}>Delete </button>
        </div>
      </figure>
    )
  }

});

module.exports = LoadGameDetail;
