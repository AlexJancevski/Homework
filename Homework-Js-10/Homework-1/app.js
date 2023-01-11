$(document).ready(function() {
    $("#greet-button").click(function() {
        let name = $("#name-input").val();
        $("#greeting").text("Hello there " + name + "!");
    });
});