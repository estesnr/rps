document.querySelector("button").addEventListener("click", playGame)


function playGame() {
    
    let userInput = document.querySelector('input').value.toLowerCase();
    let randNum = Math.random();
    let pcInput = ""

    if(randNum < .33) {
        pcInput = "rock"
    }
    else if(randNum < .66) {
        pcInput = "paper"
    }
    else {
        pcInput = "scissors"
    }

    if((userInput == "rock" && pcInput == "scissors") || (userInput == "scissors" && pcInput == "paper") || (userInput == "paper" && pcInput == "rock")) {
        alert(`YOU CHOSE ${userInput}, OPPONENT CHOSE ${pcInput}, YOU WIN!!`)
    }
    else if(userInput == pcInput) {
        alert(`YOU CHOSE ${userInput}, OPPONENT CHOSE ${pcInput}, DRAW!!`)
    }
    else {
        alert(`YOU CHOSE ${userInput}, OPPONENT CHOSE ${pcInput}, YOU LOSE!!`)
    }
}