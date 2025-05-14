let player={
    name:"Hussein",
    chips:190

}
let cards = []
let sum =0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEL=document.querySelector("#player-el")
playerEL.textContent =player.name+": $"+player.chips

function getRandomCard(){
    let number= Math.floor(Math.random()*113)+1
    if(number>10){
        return 10
    }else if(number===1){
        return 11
    }else{
        return number
    }
        
}

function startGame() {
    isAlive=true
    let firstCard=getRandomCard()
    let secoundCard=getRandomCard()
    cards=[firstCard,secoundCard]
    sum=firstCard+secoundCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}