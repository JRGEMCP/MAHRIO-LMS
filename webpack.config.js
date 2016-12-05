switch( process.env.NODE_ENV ) {
  case 'DEV':
  case 'dev':
  case 'DEVELOPMENT':
  case 'development':
  default:
    module.exports = require('./config/webpack.dev')
}