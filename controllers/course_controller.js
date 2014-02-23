var Course = require('../models/courses.js');

var controller = {

	getCourse: function(req, res, next) {
		Course.findOne({'_id':req.params.id},function(err, course) {
			res.send(course);
		});
	},
	getCourses: function(req, res, next) {
		Course.find({}).sort({ _id: 'asc'}).exec(function(err, courses) {
			res.send(courses);
		});
	}
};

exports = module.exports = controller;