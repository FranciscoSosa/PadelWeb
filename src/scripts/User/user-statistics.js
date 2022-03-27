$(document).ready(() => {
    $.getJSON('../../../json/user.json', (user) => {

        const historyDiv = $("#match-history");

        user.history.forEach(e => {
            historyDiv.append(`
                <div class="content-section match-info-display">
                    ${e}
                </div>
            `);
        });
    })
});