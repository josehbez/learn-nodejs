 const task = require('./task');
 const user = require('./user');

 exports.schemas = {
     ...task,
     ...user
 }