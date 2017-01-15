switch( process.env.NODE_ENV ) {
  case 'PROD':
  case 'prod':
  case 'PRODUCTION':
  case 'production':
    module.exports = require('./config/webpack.prod');
  default:
    module.exports = require('./config/webpack.dev');
}