//generate computer selection
let userSelection;
let numberRounds = 5;
let cpuWins = 0;
let humanWins = 0;
let roundsPlayed = 0;

computerPlay = () => {
    let possibilites = ["rock", "paper", "scissors"];
    return possibilites[Math.floor(Math.random() * 3)];
}

//gameplay
playRound = (playerSelection, computerSelection) => {
    //check if push
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != computerSelection) {
        //rock beat scissors
        if ((playerSelection == "rock" || computerSelection == "rock") && (playerSelection == "scissors" || computerSelection == "scissors")) {
            if (playerSelection == "rock") {
                return "user rock beats scissors."
            } else {
                return "cpu rock beats scissors."
            }
        }
        //paper beat rock
        else if ((playerSelection == "paper" || computerSelection == "paper") && (playerSelection == "rock" || computerSelection == "rock")) {
            if (playerSelection == "paper") {
                return "user paper beats rock."
            } else {
                return "cpu paper beats rock."
            }
        }
        //scissors beat paper
        else if ((playerSelection == "scissors" || computerSelection == "scissors") && (playerSelection == "paper" || computerSelection == "paper")) {
            if (playerSelection == "scissors") {
                return "user scissors beats paper."
            } else {
                return "cpu scissors beats paper."
            }
        }
    } else {
        return "push";
    }  
}

loadGame = (userSelection) => {
    let winner;
    if (roundsPlayed < numberRounds) {
        cpuSelection = computerPlay();
        winner = playRound(userSelection, cpuSelection);
        console.log(winner);
        if (winner.includes("user")) {
            humanWins++;
            roundsPlayed++;
        } else if (winner.includes("cpu")) {
            cpuWins++;
            roundsPlayed++;
        }
        currentScore();
    }
    if (roundsPlayed == numberRounds) {
        console.log();
    }     
}

loadScore = () => {
    const userScore = document.createElement("div");
    userScore.innerHTML = `The current score is HUMAN: ${humanWins}, CPU: ${cpuWins}, with ${numberRounds - roundsPlayed} rounds remaining.`;
    userScore.style.fontSize = "45px";
    userScore.id = "score";
    document.body.appendChild(userScore);
}

currentScore = () => {
    let updateScore;
    if (roundsPlayed < numberRounds) {
        updateScore = `The current score is HUMAN: ${humanWins}, CPU: ${cpuWins}, with ${numberRounds - roundsPlayed} rounds remaining.`;
    }
    else if (roundsPlayed == numberRounds) {
        updateScore = `After ${numberRounds} rounds the score was User: ${humanWins} & CPU: ${cpuWins}`;
    }
    let newScore = document.getElementById("score");
    newScore.innerHTML = updateScore;  
}

makeButtons = () => {
    let userSelection = "none";
    const div = document.createElement("div");
    const rock = document.createElement("button");
    rock.innerHTML = "<span style='font-size:90px'>ROCK</span>";
    rock.style.height = "450px";
    rock.style.width = "450px";
    rock.addEventListener("click", function(e) {
        userSelection = "rock";
        loadGame(userSelection);
    });
    div.appendChild(rock);

    const paper = document.createElement("button");
    paper.innerHTML = "<span style='font-size:90px'>PAPER</span>";
    paper.style.height = "450px";
    paper.style.width = "450px";
    paper.addEventListener("click", function(e) {
        userSelection = "paper";
        loadGame(userSelection);
    });
    div.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.innerHTML = "<span style='font-size:90px'>SCISSORS</span>";
    scissors.style.height = "450px";
    scissors.style.width = "450px";
    scissors.addEventListener("click", function(e) {
        userSelection = "scissors";
        loadGame(userSelection);
    });
    div.appendChild(scissors);
    document.body.appendChild(div);
    loadScore();
}

makeButtons();



