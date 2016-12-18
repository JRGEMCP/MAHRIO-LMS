var path = require('path')
  , fallback = require('express-history-api-fallback')
  , express = require('express')
  , config = require('./config/config.json')
  , root = path.join( __dirname + '/public/');

var app = express();
app.use( express.static(root) );
app.use( fallback('index.html', {root: root}));
var port = process.env.PORT || config.PORT;
if( process.argv.length == 2 ) {
  app.listen(port, function(){
    console.log( 'Running Production!');
  });
} else {
  app.listen(port, process.argv[2], function(){
    console.log( 'listening on ' + process.argv[2] +':' + port );
  });
}