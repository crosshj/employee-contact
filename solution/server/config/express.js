var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override');

module.exports = function (app) {
  app.set('port', (process.env.PORT || 3000));

  // X-Powered-By header has no functional value.
  // Keeping it makes it easier for an attacker to build the site's profile
  // It can be removed safely
  app.disable('x-powered-by');
  app.set('views', path.join(__dirname, '..', 'views'));

  app.set('view cache', false);

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
  app.use(methodOverride());
  app.use(express.static(path.join(__dirname, '../..', 'public')));


  var node_env = process.env.NODE_ENV;
  console.log('--------------------------');
  console.log('===> 😊  Starting Server . . .');
  console.log('===>  Environment: ' + node_env);
  if(node_env === 'production') {
    console.log('===> 🚦  Note: In order for authentication to work in production');
    console.log('===>           you will need a secure HTTPS connection');
  }

};