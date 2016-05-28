var AppDispatcher = require( '../AppDispatcher' );

var ServerActionCreators = {

  loadedGames: function( games ) {
    AppDispatcher.handleServerAction({
      type: ActionTypes.GAMES_LOADED,
      games: games
    });
  }

}

module.exports = ServerActionCreators;