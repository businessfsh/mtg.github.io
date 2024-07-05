const playerContainer = document.getElementById('player-container');

function setupPlayers() {
    const numPlayers = document.getElementById('num-players').value;
    playerContainer.innerHTML = '';

    for (let i = 1; i <= numPlayers; i++) {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.innerHTML = `
            <div class="life-counter" id="life-total-${i}">20</div>
            <div class="buttons">
                <button onclick="changeLife(${i}, -1)">-</button>
                <button onclick="changeLife(${i}, 1)">+</button>
            </div>
        `;
        playerContainer.appendChild(playerDiv);
    }
}

function changeLife(player, amount) {
    const lifeTotalElement = document.getElementById(`life-total-${player}`);
    let lifeTotal = parseInt(lifeTotalElement.innerText);
    lifeTotal += amount;
    lifeTotalElement.innerText = lifeTotal;
}

// Initialize with 2 players
setupPlayers();