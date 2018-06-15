// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//create the code that will call the ORM functions using task specific input for the ORM.
var task = {
    all: function(cb) {
        orm.all("tasks", function(res) {
            cb(res);
        });
    },

    create: function(cols, vals, cb) {
        orm.create("tasks", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("cats", objColVals, condition, function(res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller (catsController.js).
module.exports = task;