var express = require("express");

var router = express.Router();
// Import the model (task.js) to use its database functions.
var task = require("../models/task.js");

//create router and export at end of file
router.get("/", function(req, res) {
    task.selectAll(function(data) {
        var hbsObject = {
            tasks: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/tasks", function(req, res) {

    var newTask = req.body.task_name.toString();

    console.log(newTask);

    task.insertOne("task_name", newTask, function(result) {
        res.json({ id: result.insertID });
    });
});

router.put("/api/tasks/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    task.updateOne({
        completed: true
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/tasks/delete/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    task.deleteOne(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

module.exports = router;