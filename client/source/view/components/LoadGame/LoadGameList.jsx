var React = require( 'react' );
var LoadGameDetail = require( './LoadGameDetail' );

var LoadGameList = React.createClass({

  render: function() {
    if (!this.props.games) return(<h4>Getting data...</h4>)
    var games = this.props.games.map(function(game, index){
      return(
      <li key={index} className="horizontal-list-item">
        <LoadGameDetail
          game={this.props.games[index]}
          deleteGame={this.props.deleteGame}>
        </LoadGameDetail>
      </li>)
    }.bind(this));

    return(
      <aside className="toast">
        <div className="toast-close" onClick={this.props.closeToast}>
          <i className="fa fa-minus" aria-hidden="true"></i>
        </div>
        <div className="toast-content">
          <ul className="horizontal-list">
            <form className="__flex-display" onChange={this.setGameId} onSubmit={this.props.load}>
              {games}
              <button type="submit" className="__margin-l-sm button-horizontal-list">Continue Game</button>
            </form>
          </ul>
        </div>
      </aside>
    )
  }

});

module.exports = LoadGameList;
