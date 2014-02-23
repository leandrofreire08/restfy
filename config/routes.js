server = module.parent.exports.server;

/* require your controllers here */
var UniversityController = require('../controllers/university_controller.js');

/* Put routes here */

// University EndPoint
server.get('/university/:id', UniversityController.getUniversity);
server.get('/universities', UniversityController.getUniversities);