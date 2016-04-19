var Player = require( './player/player' );
var Ball = require( './match/ball' );
var Team = require( './match/team' );

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