var express = require( 'express' );
var app = express();

var views = __dirname + '/views/';

app.use( express.static('client/build') );

app.get( '/', function( req, res ) {
  res.sendFile( views + 'index.html' );
});

app.listen( 3000, function() {
  console.log( 'listening on port 3000' );
})

