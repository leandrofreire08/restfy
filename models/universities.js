// The University model
 
var mongoose = require('mongoose')
   ,Schema = mongoose.Schema;
 
var universitySchema = new Schema({
	_id: Number,
	name: String,
	fullname: String,
	description: String,
	address_id: Number,
	year: String,
	url: String,
	wikipedia: String,
	avatar: String,
	logo: String,
	status: Number, 
});
 
module.exports = mongoose.model('University', universitySchema, 'mongo_universities');