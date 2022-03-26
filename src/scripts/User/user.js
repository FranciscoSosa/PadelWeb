$(document).ready( () => {
        $.getJSON('../../../json/user.json', (user) => {
            $("#aside-name").text(user.name + " " + user.surname);
            $("#aside-played-games").text(user.games_played);
            $("#aside-lost-games").text(user.games_played - user.games_won);
            $("#aside-won-games").text(user.games_won);
            $("#aside-rank").text(user.rank);
            $("#aside-points").text(user.points);
            $(".user-profile-picture").attr("src", user.img);
        })
    }
)