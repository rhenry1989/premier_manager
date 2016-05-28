var ApiUtils = require( '../utils/ApiUtils' );

var ViewActionCreators = {

  loadGames: function() {
    ApiUtils.loadGames();
  }

}

module.exports = ViewActionCreators;