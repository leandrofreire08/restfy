// The Course model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
 
var courseSchema = new Schema({
	_id: Number,
	university_id: Number,
	avatar: String,
	name: String,
	description: String,
	status: Number
});
 
module.exports = mongoose.model('Course', courseSchema, 'mongo_courses');