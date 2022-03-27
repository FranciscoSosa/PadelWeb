$(document).ready(() => {
    $.getJSON('../../../json/user.json', (user) => {
        const container = $("#data-match");
        user.matches.forEach((m) => {
            container.append(`
                <div class="content-section col-10 match-info-display">
                    <span>
                        <img src="${m.img}">
                        ${m.data}
                    </span>
                </div>`);
        });
    });
})
