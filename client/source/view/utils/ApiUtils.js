var API = "http://localhost:3000/";
var xhr = require( '../lib/xhr' );

var ApiUtils = {

  loadGames: function() {

    xhr.getJSON( API + "games", function( res ) {
      // console.log( res )
      ServerActionCreators.loadedGames( res )
    });

  }

}


module.exports = ApiUtils;
