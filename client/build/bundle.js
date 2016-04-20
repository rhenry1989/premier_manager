/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Player = __webpack_require__( 3 );
	var Ball = __webpack_require__( 4 );
	var Team = __webpack_require__( 5 );
	
	window.onload = function() {
	
	  var player1 = Player( {name:'Rick Henry', passing: 20} ).setPos( 10, 10 ).gainPossession();
	  var player2 = Player( {name:'Leo Messi', passing: 16} ).setPos( 50, 50 );
	  var player3 = Player( {name:'Jon Henry', passing: 4} ).setPos( 100, 100 );
	
	  var team = Team();
	  team.addPlayer( player1 );
	  team.addPlayer( player2 );
	  team.addPlayer( player3 );
	
	  team.pass();
	
	  console.log( team )
	
	  // var ball = Ball();
	
	  // var pitch = document.getElementById( 'pitch' );
	  // var ctx = pitch.getContext( '2d' );
	
	  // for ( player of team.players ) {
	  //   ctx.beginPath();
	  //   ctx.arc( player.posX, player.posY, 10, 0, 2 * Math.PI);
	  //   ctx.stroke();
	
	  //   if (player.possession) {
	  //     ctx.beginPath();
	  //     ctx.arc( player.posX + 15, player.posY, ball.size, 0, 2 * Math.PI);
	  //     ctx.stroke();
	  //   }
	  // }
	
	
	
	}

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	var Player = function( options ) {
	  var player = Object.create( playerProto );
	  player.name = options.name;
	  player.passing = options.passing;
	  player.posX = null;
	  player.posY = null;
	  player.possession = false;
	  player.distanceFromPossPlayer = null;
	  return player;
	}
	
	var playerProto = {
	
	  setPos: function( x, y ) {
	    this.posX = x;
	    this.posY = y;
	    return this;
	  },
	
	  gainPossession: function() {
	    this.possession = true;
	    return this;
	  },
	
	  losePossession: function() {
	    this.possession = false;
	    return this;
	  }
	
	}
	
	module.exports = Player;

/***/ },
/* 4 */
/***/ function(module, exports) {

	var Ball = function() {
	  var ball = Object.create( ballProto )
	  ball.size = 5;
	  ball.color = 'yellow'
	  return ball;
	}
	
	ballProto = {
	
	}
	
	module.exports = Ball;

/***/ },
/* 5 */
/***/ function(module, exports) {

	var Team = function() {
	  var team = Object.create( teamProto );
	  team.players = []
	  return team;
	}
	
	var teamProto = {
	
	  addPlayer: function( player ) {
	    this.players.push( player );
	    return this;
	  },
	
	  pass: function() {
	    var player = this.playerInPossession();
	    var receiver = this.playerToPass( player ); 
	    // player.losePossession();
	    // receiver.gainPossession();
	  },
	
	  playerToPass: function( playerInPossession ) {
	    for ( player of this.players ) {
	      if ( player.possession === false ) {
	        var diffX = Math.abs( playerInPossession.posX - player.posX );
	        var diffY = Math.abs( playerInPossession.posY - player.posY );
	        player.distanceFromPossPlayer = Math.sqrt( diffX*diffX + diffY*diffY );
	      }
	    }
	    
	  },
	
	  playerInPossession: function() {
	    for ( player of this.players ) {
	      if ( player.possession === true ) { return player; }
	    }
	  }
	
	}
	
	module.exports = Team;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map