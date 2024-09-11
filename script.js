let fights = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let firstFighter = Math.floor(Math.random() * fights.length)
    let secondFighter = Math.floor(Math.random() * fights.length)
    stageEl.textContent = fights[firstFighter] + " vs " + fights[secondFighter]
})