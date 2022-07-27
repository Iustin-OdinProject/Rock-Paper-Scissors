
let playerSelection = prompt("Choose your weapon! (\"rock\",\"paper\",\"scissors\"");
if(playerSelection != ""){
    console.log(game(playerSelection.toLowerCase(), getComputerChoice()))
}
function game(player,computer){
    if(player == "rock"){
        if(computer == "rock")
            return "tie";
        else if(computer == "paper")
            return `computer wins! ${computer} beats ${player}`;
        else if(computer == "scissors")
            return `you win! ${player} beats ${computer} `;
    }
    if(player == "paper"){
        if(computer == "rock")
            return `you win! ${player} beats ${computer} `;
        else if(computer == "paper")
            return `tie`;
        else if(computer == "scissors")
            return `computer wins! ${computer} beats ${player}`;
    }
    if(player == "scissors"){
        if(computer == "rock")
            return `computer wins! ${computer} beats ${player}`;
        else if(computer == "paper")
            return `you win! ${player} beats ${computer} `;
        else if(computer == "scissors")
            retunr `tie`;
    }
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