$(document).ready(function () {
    $.getJSON("../../../json/affiliate-clubs.json", function (data) {
        $.each(data, function (key, value) {
            $("#affiliate-club").append("<img class = 'fphoto-cancha' src='" + value.URL + "'" + "alt='imagen cancha'>");
            $("#affiliate-club").append("<p>" + value.Nombre + "</p>");
            $("#affiliate-club").append("<p>" + value.Direccion + "</p>");
            $("#affiliate-club").append("<p>" + value.Descripcion + "</p>");
            $("#affiliate-club").append("<hr>");
        });
    });
});