function game(){
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';
    let playerTurn;
    
    let computerRandomNumber = Math.floor(Math.random()*3)+1;
    let computerTurn;
    switch(computerRandomNumber){
        case 1:
            computerTurn = rock;
            break;
        case 2:
            computerTurn = scissors;
            break;
        case 3:
            computerTurn = paper;
            break;
    }
    
    const prompt = require("prompt-sync")({sigint:true});
    
    let flag = false;
    while(!flag){
        playerTurn = prompt("Your turn: ");
        if(playerTurn=='r' || playerTurn == 'rock'){
            playerTurn = rock;
            flag = true;
        }
        else if(playerTurn=='p' || playerTurn == 'paper'){
            playerTurn = paper;
            flag = true;
        }
        else if(playerTurn=='s' || playerTurn == 'scissors'){
            playerTurn = scissors;
            flag = true;
        }
        else{
            console.log('Invalid input! Try again...');
        }
    }
    if(playerTurn==rock || playerTurn == paper || playerTurn== scissors){
        console.log(`The computer chooses ${computerTurn}`);

        if((playerTurn == rock && computerTurn == rock) || 
        (playerTurn == scissors && computerTurn == scissors) || (playerTurn == paper && computerTurn == paper)){
            console.log('Draw!');
        }
        if((playerTurn == rock && computerTurn == scissors) || 
        (playerTurn == scissors && computerTurn == paper) || (playerTurn == paper && computerTurn == rock)){
            console.log('You win!');
        } else{
            console.log('You lose!');
        }
    }
}
game();