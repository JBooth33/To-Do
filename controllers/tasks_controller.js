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

router.put("api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    task.update({
        completed: req.body.completed
    }, condition, function(result) {
        if (result.changedRows == 0) {

            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("api/taks/:id", function(req, res) {
    var condition = "id = " +req.params.id;

    task.delete(condition, function(result) {
        if (result.affectedRows ==0) {
            return res.status(404).end();
        }
    });
});

module.exports = router;