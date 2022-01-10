//generate computer selection
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

//get user selection
getUserPick = () => {
    let userSelection;
    while (!userSelection) {
        userInput = prompt("Enter user selction:", "hint: rock, paper, or scissors");
        userInput = userInput.toLowerCase();
        if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
            userSelection = userInput;
        }
    }
    return userSelection;
}

game = (numberRounds) => {
    let cpuWins = 0;
    let humanWins = 0;
    let roundsPlayed = 0;
    while (roundsPlayed < numberRounds){
        userSelection = getUserPick();
        cpuSelection = computerPlay();
        let winner = playRound(userSelection, cpuSelection);
        console.log(winner);
        if (winner.includes("user")) {
            humanWins++;
            roundsPlayed++;
        } else if (winner.includes("cpu")) {
            cpuWins++;
            roundsPlayed++;
        }
    }
    console.log(`After ${numberRounds} rounds the score was User: ${humanWins} & CPU: ${cpuWins}`);
}

game(5);
