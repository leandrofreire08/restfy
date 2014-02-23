var restify = require('restify');
var mongoose = require('mongoose');

var server = restify.createServer({
	name: 'ApiStudy'
});

mongoose.connect('mongodb://localhost/vdc_development');

var UniversityController = require('./controllers/university_controller.js');

server.get('/university/:id', UniversityController.getUniversity);
server.get('/universities', UniversityController.getUniversities);

server.listen(8080, function() {
	console.log('%s listening at %s', server.name, server.url);
});