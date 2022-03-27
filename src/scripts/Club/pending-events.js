$(document).ready(() => {
    $.getJSON('../../../json/club.json', (club) => {

        const pendingDiv = $("#match-tournament");

        club.pending.forEach(event => {
            pendingDiv.append(`
                <div class="content-section pending-events">
                    <span>
                        <img src="${event.img}">
                        ${event.data}
                    </span>
                </div>
            `);
        });
    })
});