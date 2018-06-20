
$(function() {
    //on-click event for adding task
    $(".add-task").on("click", function() {
        event.preventDefault();
        var id = $(this).data("id");
        
        var newTask = {
            task_name: $("#task").val().trim(),
        };

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

//on-click event to change a task from not-completed to completed
    $(".not-completed").on("click", function (event) {
        var id = $(this).data("id");

        var newCompletedState = {
            completed: true,
        };

        $.ajax("/api/tasks/" + id, {
            type: "PUT",
            data: newCompletedState
        }).then(
            function () {
                

                location.reload();
            }
        );
    });

//on-click event to delete a task 
    $(".finished").on("click", function (event) {
        var id = $(this).data("id");

        $.ajax("/api/tasks/" + id, {
            type: "DELETE"
        }).then(
            function () {
                
                location.reload();
            }
        );
    });

});