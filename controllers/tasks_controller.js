var express = require("express");

var router = express.Router();
// Import the model (task.js) to use its database functions.
var task = require("../models/task.js");

//create router and export at end of file
router.get("/", function(req, res) {
    task.all(function(data) {
        var hbsObject = {
            taks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("api/taks", function(req, res) {
    task.create([
        "task_name", "completed"
    ], [
        req.body.task_name, req.body.completed
    ], function(result) {
        res.json({ id: result.insertID });
    });
});

module.exports = router;