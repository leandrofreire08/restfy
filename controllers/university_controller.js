var University = require('../models/universities.js');

var controller = {

	getUniversity: function(req, res, next) {
		University.findOne({'_id':req.params.id},function(err, university) {
			res.send(university);
		});
	},
	getUniversities: function(req, res, next) {
		University.find({}).sort({ _id: 'asc'}).exec(function(err, universities) {
			res.send(universities);
		});
	}
};

exports = module.exports = controller;