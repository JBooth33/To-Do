$(function() {
    $(".add-task").on("click", function() {
        event.preventDefault();
        console.log("Success");
        var id = $(this).data("id");
        
        var newTask = {
            task_name: $("#task").val().trim(),
        };

        console.log(newTask.task_name);

        $.ajax("/api/tasks/", {
            type: "POST",
            data: newTask
        }).then(
            function () {
                console.log("Created new task");

                location.reload();
            }
        );
    });


    $(".not-completed").on("click", function (event) {
        var id = $(this).data("id");

        console.log(id);

        var newCompletedState = {
            completed: true,
        };

        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: newCompletedState
        }).then(
            function () {
                console.log("Completed task #", id);

                location.reload();
            }
        );
    });

});