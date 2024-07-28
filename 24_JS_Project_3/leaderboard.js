let leaderboardData = [];
document.addEventListener("DOMContentLoaded", function() {
    const leaderboardTable = document.getElementById("data");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const countriesInput = document.getElementById("countries");
    const playerScoreInput = document.getElementById("player-score");
    const addButton = document.querySelector('button');
    const errorMessage = document.getElementById("error-message");
    const savedData = localStorage.getItem("leaderboardData");
    if (savedData) {
        leaderboardData = JSON.parse(savedData);
        renderLeaderboard();
    }
    addButton.addEventListener("click", function(event) {
        event.preventDefault();
        const firstName = firstNameInput.value.trim();
        const lastName = lastNameInput.value.trim();
        const country = countriesInput.value.trim();
        const score = parseInt(playerScoreInput.value.trim());

        if (firstName && lastName && country && !isNaN(score)) {
            leaderboardData.push({ firstName, lastName, country, score });
            leaderboardData.sort((a, b) => b.score - a.score);
            renderLeaderboard();
            localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
            firstNameInput.value = "";
            lastNameInput.value = "";
            countriesInput.value = "";
            playerScoreInput.value = "";
            errorMessage.textContent = "";
        } else {
            errorMessage.textContent = "All fields are required.";
        }
    });
    function renderLeaderboard() {
        leaderboardTable.innerHTML = "";
        leaderboardData.forEach((data, index) => {
            const row = document.createElement("div");
            row.innerHTML = `
                <div>${index + 1}</div>
                <div>${data.firstName}</div>
                <div>${data.lastName}</div>
                <div>${data.country}</div>
                <div>
                    <span>${data.score}</span>
                    <div onclick="updateScore(${index}, 5)"      style="background-color: white; color: tomato; border: 1px solid tomato; border-radius: 25px; margin: 0 10px 0 30px;">+5</div>
                    <div onclick="updateScore(${index}, -5)"  style="background-color: white; color: tomato; border: 1px solid tomato; border-radius: 25px; margin: 0 10px;">-5</div>
                    <div onclick="deletePlayer(${index})"        style="background-color: white; color: tomato; border: 1px solid tomato; border-radius: 25px; margin: 0 10px;"><i class="fa-solid fa-trash-can"></i></div>
                </div>
            `;
            leaderboardTable.appendChild(row);
        });
    }
    window.updateScore = function(index, change) {
        leaderboardData[index].score += change;
        leaderboardData.sort((a, b) => b.score - a.score);
        renderLeaderboard();
        localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
    }
    window.deletePlayer = function(index) {
        leaderboardData.splice(index, 1);
        renderLeaderboard();
        localStorage.setItem("leaderboardData", JSON.stringify(leaderboardData));
    }
});