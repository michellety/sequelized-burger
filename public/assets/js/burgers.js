// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
    $("#create-form").on("submit", function (event) {
        event.preventDefault();
        console.log("button click")
        var newBurger = {
            name: $("#burgerEntry").val().trim(),
        };

        console.log(newBurger);
        //send post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("New burger created");
            //reload the page to get the updated list
            location.reload();
        });
    });


    $(".devour").on("click", function (event) {
        // event.preventDefault();
        var burger_id = $(this).attr("id");
        console.log(burger_id);
        $.ajax({
            method: "PUT",
            url: "/burgers/" + burger_id
        }).then(function (data) {
            // reload page to display devoured burger in proper column
            location.reload();
        });

    });
});


