var path = require('path')
  , fallback = require('express-history-api-fallback')
  , express = require('express')
  , config = require('./config/config.json')
  , root = path.join( __dirname + '/public/');

var app = express();
app.use( express.static(root) );
app.use( fallback('index.html', {root: root}));

app.listen(process.env.PORT || config.PORT, function(){
  console.log( 'listening on port ' + process.env.PORT || config.PORT );
});