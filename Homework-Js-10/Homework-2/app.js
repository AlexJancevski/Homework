$(document).ready(function() {
    $("#generate-button").click(function() {
        let text = $("#header-text").val();
        let color = $("#header-color").val();
        let isValidColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color);

        if (!text) {
            $("#message").text("Please enter a valid text for the header.");
        } else if (!isValidColor) {
            $("#message").text("Please enter a valid color for the header.");
        } else {
            $("#message").text("");
            $("#header-container").append("<h1 style='color:" + color + ";'>" + text + "</h1>");
        }
    });
});