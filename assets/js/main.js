var gameData

// ----------- Basic Functions -------------
function init() {
    loadFromSave()
    if (gameData == null) {
        resetData()
    }
}
function resetData() {
    gameData = {
        gold: 0,
        goldPerClick: 1,
        addZombieCost: 10,
        zombies: 1
    }
    updateGoldMinded()
    updateAddZombieToMine()
    updateZombies()
}
function loadFromSave() {
    var savegame = JSON.parse(localStorage.getItem("endlessHordeSave"))
    if (savegame !== null) {
        console.log("Loaded Savegame")
        gameData = savegame
        updateGoldMinded()
        updateAddZombieToMine()
        updateZombies()
    }
}
function saveGame(){
    localStorage.setItem("endlessHordeSave", JSON.stringify(gameData))
}
// ----------- Update Elements -------------
function updateGoldMinded(){
    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
}
function updateAddZombieToMine(){
    document.getElementById("addZombieToMine").innerHTML = "Add more Zombies to mine (Cost: " + gameData.addZombieCost + " Gold)"
}
function updateZombies(){
    document.getElementById("zombies").innerHTML = gameData.zombies + " Zombies"
}
// ----------- Game Elements -------------
function mineGold() {
    gameData.gold += gameData.goldPerClick * gameData.zombies
    updateGoldMinded()
}
function addZombieToMine() {
    if (gameData.gold >= gameData.addZombieCost) {
        gameData.gold -= gameData.addZombieCost
        gameData.addZombieCost *= 2
        gameData.zombies += 1
        updateGoldMinded()
        updateAddZombieToMine()
        updateZombies()
    }
}

// ----------- Loops -------------
var mainGameLoop = window.setInterval(function() {
    mineGold()
}, 1000)

var saveGameLoop = window.setInterval(function() {
    saveGame()
}, 15000)