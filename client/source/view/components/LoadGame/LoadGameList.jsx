var React = require( 'react' );
var LoadGameDetail = require( './LoadGameDetail' );

var LoadGameList = React.createClass({

  setGameId: function(e) {
    e.preventDefault;
    var newId = +e.target.value;
    this.props.setId( newId );
  },

  render: function() {
    var games = this.props.games.map(function(game, index){
      return(
      <li key={index} className="horizontal-list-item">
        <LoadGameDetail 
          game={this.props.games[index]}>  
        </LoadGameDetail>
      </li>)
    }.bind(this));

    return(
      <aside className="toast">
        <div className="toast-close" onClick={this.props.close}>
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