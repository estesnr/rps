// document.querySelector("button").addEventListener("click", playGame)
document.getElementById('rockIcon').addEventListener('click', useRock)
document.getElementById("paperIcon").addEventListener('click', usePaper)
document.getElementById('scissorIcon').addEventListener("click", useScissors)

// initial scorecards
let playScore = 0
let compScore = 0

function playGame(userInput) {
    
    let randNum = Math.random();
    let pcInput = ""
    let playerScore = document.getElementById('player-score')
    let pcScore = document.getElementById('pc-score')

    if(randNum < .33) {
        pcInput = "rock"
    }
    else if(randNum < .66) {
        pcInput = "paper"
    }
    else {
        pcInput = "scissors"
    }

    if((userInput == "rock" && pcInput == "scissors") || (userInput == "scissors" && pcInput == "paper") ||
    (userInput == "paper" && pcInput == "rock")) {
        alert(`YOU CHOSE ${userInput}, OPPONENT CHOSE ${pcInput}, YOU WIN!!`)
        playScore += 1
        playerScore.innerHTML = playScore
    }
    else if(userInput == pcInput) {
        alert(`YOU CHOSE ${userInput}, OPPONENT CHOSE ${pcInput}, DRAW!!`)
    }
    else {
        alert(`YOU CHOSE ${userInput}, OPPONENT CHOSE ${pcInput}, YOU LOSE!!`)
        compScore += 1
        pcScore.innerHTML = compScore
    }
}

function useRock() {
    playGame("rock")
}

function usePaper() {
    playGame("paper")
}

function useScissors() {
    playGame("scissors")
}

