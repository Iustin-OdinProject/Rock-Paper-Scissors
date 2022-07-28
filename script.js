
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