var _ = require('lodash');
var Player = require( './player/player' );
var Ball = require( './matchEngine/ball' );
var Team = require( './matchEngine/team' );
var Decision = require( './matchEngine/decision' );
var PitchView = require( './view/pitchView' )

window.onload = function() {

  var player1 = Player( {name:'Rick Henry', passing: 20} ).setPos( 40, 40 );
  player1.gainPossession();
  var player2 = Player( {name:'Leo Messi', passing: 16} ).setPos( 80, 80 );
  var player3 = Player( {name:'Jon Henry', passing: 5} ).setPos( 130, 130 );

  var team = Team();
  team.addPlayer( player1 );
  team.addPlayer( player2 );
  team.addPlayer( player3 );

  var decision = Decision();
  decision.addPlayers( team.players );
  decision.update();
  decision.pass.make();
  decision.update();

  var pitchView = PitchView();
  pitchView.setup();
  pitchView.drawPlayers( team.players );

  var ball = Ball( player1.posX, player1.posX )





  // function clear(){
  //   ctx.clearRect(0, 0, pitch.width, pitch.height);
  // }

  // function run(){
  //   clear();
  //   for ( player of team.players ) {
  //     drawPlayer( player.posX, player.posY ); 
  //     if ( player.possession ) {
  //       drawBall( ball.posX, ball.posY );
  //     }
  //   }
  //   drawBall(player.posX, player.posX);
  //   ball.posX = ball.posX + 0.5;
  //   ball.posY = ball.posY + 1;
  //   requestAnimationFrame(run);
  // }

  // requestAnimationFrame(run);



}