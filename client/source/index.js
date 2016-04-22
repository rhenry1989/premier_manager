var _ = require('lodash');
var Player = require( './player/player' );
var Ball = require( './matchEngine/ball' );
var Team = require( './matchEngine/team' );
var Engine = require( './matchEngine/engine' );
var PitchView = require( './view/pitchView' )

window.onload = function() {

  var player1 = Player( {name:'Rick Henry', passing: 20} ).setPos( 40, 40 );
  player1.gainPossession();
  var player2 = Player( {name:'Jon Henry', passing: 5} ).setPos( 80, 80 );

  var team = Team();
  team.addPlayer( player1 );
  team.addPlayer( player2 );

  var ball = Ball()
  ball.setPos( player1.posX, player1.posY );

  var pitchView = PitchView( ball );
  pitchView.setup();

  var engine = Engine( pitchView );
  engine.addPlayers( team.players );  
  engine.updateState();  
  engine.updateView();
  engine.makePass();

  // engine.pass.attempt( player1, player2 );
  // engine.update();


}