
let numberOfGames = prompt("How many games do you want to play?");
for(let i=1; i<= numberOfGames; i++)
{
    let playerSelection = prompt("Choose your weapon! (\"rock\",\"paper\",\"scissors\"");
    
    if(playerSelection != ""){
    console.log(game(playerSelection.toLowerCase(), getComputerChoice()))
    }
    else console.log("Something got messed up!")
}
let playerSelection = prompt("Choose your weapon! (\"rock\",\"paper\",\"scissors\"");
if(playerSelection != ""){
    
    console.log(game(playerSelection.toLowerCase(), getComputerChoice()))
}
function game(player,computer){
    switch (player){
        case "rock":
            switch (computer){
                case "rock":
                    return `tie`;
                case "paper":
                    return `computer wins! ${computer} beats ${player}`;
                case "scissors":
                    return `you win! ${player} beats ${computer} `;
            }
        
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