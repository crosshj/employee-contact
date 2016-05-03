var Hapi = require('hapi');
var PORT = 8080;
var server = new Hapi.Server(PORT, '0.0.0.0');

server.route({
    method: 'GET',
    path: '/{yourname*}',
    handler: function(req, reply) {
        reply('Hello ' + req.params.yourname + '!')
    }
});

server.start(function(){ // boots your server
    console.log('SERVER AT: ' + server.info.uri + '/YOURNAME')
});
