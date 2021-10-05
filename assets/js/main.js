var gameData

// ----------- Basic Functions -------------
function init() {
    resetData()
    loadFromSave()
}
function resetData() {
    gameData = {
        gold: 0,
        goldPerClick: 1,
        goldPerClickCost: 10
    }
}
function loadFromSave() {
    var savegame = JSON.parse(localStorage.getItem("endlessHordeSave"))
    if (savegame !== null) {
        console.log("Loaded Savegame")
        gameData = savegame
        updateGoldMinded()
        updatePerClickUpgrade()
    }
}
function saveGame(){
    localStorage.setItem("endlessHordeSave", JSON.stringify(gameData))
}
// ----------- Update Elements -------------
function updateGoldMinded(){
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}
function updatePerClickUpgrade(){
    document.getElementById("perClickUpgrade").innerHTML = "Add more Zombies to mine (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
}
// ----------- Game Elements -------------
function mineGold() {
    gameData.gold += gameData.goldPerClick
    updateGoldMinded()
}
function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
        gameData.gold -= gameData.goldPerClickCost
        gameData.goldPerClick += 1
        gameData.goldPerClickCost *= 2
        updateGoldMinded()
        updatePerClickUpgrade()
    }
}

// ----------- Loops -------------
var mainGameLoop = window.setInterval(function() {
    mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    saveGame()
}, 15000)