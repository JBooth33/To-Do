// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

//create the code that will call the ORM functions using task specific input for the ORM.
var task = {
    selectAll: function(cb) {
        orm.selectAll("tasks", function(res) {
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("tasks", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("tasks", objColVals, condition, function(res) {
            cb(res);
        });
    },

    deleteOne: function(condition, cb) {
        orm.deleteOne("tasks", condition, function(res) {
            cb(res);
        });
    }
};
// Export the database functions for the controller (catsController.js).
module.exports = task;