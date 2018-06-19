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

router.post("/", function(req, res) {
    task.insertOne([
        "task_name"
    ], [
        req.body.task_name
    ], function() {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    task.updateOne({
        completed: req.body.completed
    }, condition, function(data) {
        res.redirect("/");
    });
});



module.exports = router;