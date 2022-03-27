$(document).ready(() => {
    $.getJSON('../../../json/user.json', (user) => {
        const container = $("#data-match");
        user.tournaments.forEach((t) => {
            container.append(`
                <div class="content-section  col-10 match-info-display">
                    <span>
                        <img src="${t.img}">
                        ${t.data}
                    </span>
                </div>`);
        });
    });
})
