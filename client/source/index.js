var _ = require('lodash');
var Player = require( './player/player' );
var Ball = require( './match/ball' );
var Team = require( './match/team' );

window.onload = function() {

  var player1 = Player( {name:'Rick Henry', passing: 20} ).setPos( 10, 10 );
  player1.gainPossession();
  var player2 = Player( {name:'Leo Messi', passing: 16} ).setPos( 50, 50 );
  var player3 = Player( {name:'Jon Henry', passing: 15} ).setPos( 100, 100 );

  var team = Team();
  team.addPlayer( player1 );
  team.addPlayer( player2 );
  team.addPlayer( player3 );

  team.pass();

  var ball = Ball();

  var pitch = document.getElementById( 'pitch' );
  var ctx = pitch.getContext( '2d' );

  var drawPlayer = function( x, y ) {
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2,true); // Outer circle
    ctx.stroke();
  }

  var drawBall = function( x, y ) {
    ctx.beginPath();
    ctx.arc( player.posX + 15, player.posY, ball.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  var drawLine = function() {
    
  }

  for ( player of team.players ) {
    drawPlayer( player.posX, player.posY ); 
    if ( player.possession ) {
      drawBall( player.posX, player.posY );
    }
  }



}