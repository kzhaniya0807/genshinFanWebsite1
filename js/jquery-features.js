$(document).ready(function () {
    // TASK 1: TRAVELER WELCOME MESSAGE
    $("#traveler-name").on("input", function () {

        const name = $(this).val().trim();

        if (name === "") {

            $("#welcome-message")
                .text("Welcome, Traveler!")
                .removeClass("success");

        } else {

            $("#welcome-message")
                .text("Your journey begins, " + name + "!")
                .addClass("success");

        }

    });


    // Click event: display final welcome message

    $("#welcome-button").on("click", function () {

        const name = $("#traveler-name").val().trim();

        if (name === "") {

            $("#welcome-message")
                .text("Please enter your Traveler name.")
                .removeClass("success");

            return;

        }

        $("#welcome-message")
            .text("Welcome to Teyvat, Traveler " + name + "!")
            .addClass("success");

    });

