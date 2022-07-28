let timesPlayed=0, computerScore = 0, playerScore = 0;
const tie = document.querySelector('#tie');
const roundsPlayed = document.querySelector('#noRounds');
const player_score = document.querySelector('#player_score');
const computer_score = document.querySelector('#computer_score');
const winnerLabel = document.querySelector('#winner');
const win = document.querySelector('#win');
function initGame(player){
    if(computerScore >= 5 || playerScore >= 5)
        if(confirm("Game has ended. Do you want to start another"))
            restartGame()
        else
            {}
    else
    {
        timesPlayed +=1;
        roundsPlayed.textContent = timesPlayed;
        computer_score.textContent = computerScore;
        player_score.textContent = playerScore;
        tie.style.visibility = 'hidden';
        if(game(player.toLowerCase(), getComputerChoice())!=0)
            alert("Something is wrong.. the computer is cheating!!!");
        }
}
function game(player,computer){
    switch (player){
        case "rock":
            switch (computer){
                case "rock":
                {
                    tie.style.visibility = 'visible';
                    win.style.visibility = 'hidden';
                    return 0;
                }
                case "paper":
                {
                    setWinner('computer')
                    return 0;
                }
                case "scissors":
                {
                    setWinner('player')
                    return 0;
                }
            }
        case "paper":
            switch (computer){
                case "rock":
                {
                    setWinner('player')
                    return 0;
                }
                case "paper":
                {
                    tie.style.visibility = 'visible';
                    win.style.visibility = 'hidden';
                    return 0;
                }
                case "scissors":
                {
                    setWinner('computer')
                    return 0;
                }
            }
        case "scissors":
            switch (computer){
                case "rock":
                {
                    setWinner('computer')
                    return 0;
                }
                case "paper":
                {
                    setWinner('player')
                    return 0;
                }
                case "scissors":
                {
                    tie.style.visibility = 'visible';
                    win.style.visibility = 'hidden';
                    return 0;
                }
            }
<<<<<<< HEAD
=======
        case "paper":
            switch (computer){
                case "rock":
                    return `you win! ${player} beats ${computer} `;
                case "paper":
                    return `tie`;
                case "scissors":
                    return `computer wins! ${computer} beats ${player}`;
            }
        case "scissors":
            switch (computer){
                case "rock":
                    return `computer wins! ${computer} beats ${player}`;
                case "paper":
                    return `you win! ${player} beats ${computer} `;
                case "scissors":
                    return 'tie';
            }
>>>>>>> fcdc8f7f3d200e6923ca29964c470eb9f8700259
    }
}
function setWinner(winner){
    win.style.visibility = 'visible';
    switch(winner){
        case 'player':
        {
            playerScore +=1;
            winnerLabel.textContent = 'Player';
            break;
        }
        case 'computer':
        {
            computerScore +=1;
            winnerLabel.textContent = 'Computer';
            break;
        }
    }    
    computer_score.textContent = computerScore;
    player_score.textContent = playerScore;
}
function restartGame(){
    computerScore=0;
    playerScore=0;
    timesPlayed=0;
    computer_score.textContent = computerScore;
    player_score.textContent = playerScore;
    roundsPlayed.textContent = timesPlayed;
    tie.style.visibility = 'hidden'; 
}

function getComputerChoice(){
    var randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
    return randomNumber;
}