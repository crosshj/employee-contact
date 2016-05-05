const PORT = 80;
import Hapi from 'hapi';
const server = new Hapi.Server();
import { init as routesInit } from './routes';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/employee-contact');

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

routesInit(server);

server.start(() => {
  return console.log('SERVER AT: ' + server.info.uri);
});

module.exports = server;
