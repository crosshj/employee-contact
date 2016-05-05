const PORT = 80;
import Hapi from 'hapi';
const server = new Hapi.Server();
import { init as routesInit } from './routes';
import mongoose from 'mongoose';

// THANKS! http://www.luiselizondo.net/how-to-create-a-docker-node-js-mongodb-varnish-environment/
const mongoAddress = process.env.MONGO_PORT_27017_TCP_ADDR || '127.0.0.1';
const mongoPort = process.env.MONGO_PORT_27017_TCP_PORT || '27017';
mongoose.connect('mongodb://' + mongoAddress + ':' + mongoPort + '/employee-contact');

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
