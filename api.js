var restify = require('restify');
var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "apistudy"});

function respond(req, res, next) {
	log.info(req.params);
	res.send('hello ' + req.params.name);
}

var server = restify.createServer({
	name: 'ApiStudy'
});

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});