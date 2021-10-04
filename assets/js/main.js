var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10
}
function mineGold() {
    gameData.gold += gameData.goldPerClick
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}
function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
        document.getElementById("perClickUpgrade").innerHTML = "Add more Zombies to mine (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
}
function loadFromSave() {
    var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
    if (savegame !== null) {
        console.log("Loaded Savegame")
        gameData = savegame
    }
}
// Loops
var mainGameLoop = window.setInterval(function() {
    mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("endlessHordeSave", JSON.stringify(gameData))
}, 15000)