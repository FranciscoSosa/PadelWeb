$(document).ready( () => {
    $.getJSON('../../../json/club.json', (club) => {
        $("#aside-name").text(club.name);
        $("#aside-telephone").text(club.telephone);
        $("#aside-courts").text(club.courts);
        $("#aside-location").text(club.location);
        $(".user-profile-picture").attr("src", club.img);
    })
}
)