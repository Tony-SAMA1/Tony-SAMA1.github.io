let DiceButton = document.getElementById("dice-button")
let DiceResult = document.getElementById("dice-result")
let DiceLabel = document.getElementById("dice-label")
let flag = true
DiceButton.addEventListener("click", ()=>{
    DiceResult.innerText = getRandomInt(1,6)
    if(flag){

    }
    flag = !flag
})

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}