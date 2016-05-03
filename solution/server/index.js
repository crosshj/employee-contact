const Hapi = require('hapi');
const PORT = 80;
const server = new Hapi.Server();

require('babel-register')({
  presets: ['es2015', 'react'],
});

server.connection({
    port: PORT,
    address: '0.0.0.0'
});

server.register(require('inert'), (err) => {
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

server.start(() => {
    console.log('SERVER AT: ' + server.info.uri);
});

module.exports = server;
