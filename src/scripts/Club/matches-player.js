$(document).ready(() => {
    $.getJSON('../../../json/matches-player.json', (match) => {

        const playersDiv = $("#players");
        const playerId = "player"

        let number = 1;
        match.players.forEach(player => {
            playersDiv.append(`
                    <label for="${playerId}-${number}" class="horizontal-flex">${player}
                        <input type="checkbox" id="${playerId}-${number}" 
                        name="${playerId}-${number}" class="players-checkbox"><br>
                        <span class="checkmark"></span>
                    </label>
            `);
            number++;
        });
    })
});