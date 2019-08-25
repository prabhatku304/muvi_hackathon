const mongoose   =    require('mongoose');

mongoose.set('debug',true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost/muvi", { useNewUrlParser : true });


module.exports.User = require('./user');
module.exports.Project = require('./project');
module.exports.ProjectProfile = require('./projectProfile')
