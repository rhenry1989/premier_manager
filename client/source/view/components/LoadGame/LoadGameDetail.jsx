var React = require( 'react' );
var LoadGameClubInfo = require( './LoadGameClubInfo' );

var LoadGameDetail = React.createClass({

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
        </div>
      </figure>
    )
  }

});

module.exports = LoadGameDetail;