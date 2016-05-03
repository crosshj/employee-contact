require('babel-register')({
  presets: ['es2015', 'react'],
});

var Hapi = require('hapi');

var PORT = 80;

var server = new Hapi.Server();

server.connection({
    port: PORT,
    address: '0.0.0.0'
});

server.register(require('inert'), function(err) {
    if (err) {
      throw err;
    }

    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: 'client',
          index: ['index.html']
        }
      }
    });
});

server.start(function(){
    console.log('SERVER AT: ' + server.info.uri)
});

module.exports = server;