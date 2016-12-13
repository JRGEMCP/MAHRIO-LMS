var path = require('path')
  , fallback = require('express-history-api-fallback')
  , express = require('express')
  , config = require('./config/config.json')
  , root = path.join( __dirname + '/public/');

var app = express();
app.use( express.static(root) );
app.use( fallback('index.html', {root: root}));

var port = process.env.PORT || config.PORT;
app.listen(port, function(){
  console.log( 'listening on port ' + port );
});