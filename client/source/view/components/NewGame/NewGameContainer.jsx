var React = require( 'react' );
var _ = require( 'lodash' );
var NewGameBox = require( './NewGameBox' );

var NewGameContainer = React.createClass({

  getInitialState: function() {
    return { nations: null }
  }, 

  componentDidMount: function() {
    var url = "http://localhost:3000/nations?leagues=true&clubs=true";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(request.status === 200){
        var nations = JSON.parse(request.responseText);
        this.setState({ 
          nations: nations
        });
      }
    }.bind(this)
    request.send(null);
  },

  createGame: function( callback ) {
    var url = "http://localhost:3000/games";
    var request = new XMLHttpRequest();
    request.open( "POST", url );
    request.onload = function() {
      if(request.status === 200) {
        var game = JSON.parse( request.responseText );
        callback( game.id );
      }
    }
    request.send(null)
  },

  render: function() {
    if( !this.state.nations ) { return <h4>waiting for data</h4> }
    return (
      <NewGameBox nations={this.state.nations} createGame={this.createGame} />
    )
  }

})

module.exports = NewGameContainer;