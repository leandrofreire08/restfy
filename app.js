var restify = require('restify');
var mongoose = require('mongoose');

var server = restify.createServer({
	name: 'ApiStudy'
});

mongoose.connect('mongodb://localhost/vdc_development');

// Turn server available
module.exports.server = server;
routes = require('./config/routes.js');

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});