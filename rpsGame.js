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
    
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
   let rlFunction = function(){ rl.question("Your turn: ", (answer) => {

        if(answer=='r' || answer == 'rock'){
            playerTurn = rock;
        }
        else if(answer=='p' || answer == 'paper'){
            playerTurn = paper;
        }
        else if(answer=='s' || answer == 'scissors'){
            playerTurn = scissors;
        }
        else{
            console.log('Invalid input! Try input...');
            rlFunction();
        }

    console.log(`The computer chooses ${computerTurn}`);

    if((playerTurn == rock && computerTurn == scissors) || 
    (playerTurn == scissors && computerTurn == paper) || (playerTurn == paper && computerTurn == rock)){
        console.log('You win!');
    } else{
        console.log('You lose!');
    }

    if((playerTurn == rock && computerTurn == rock) || 
    (playerTurn == scissors && computerTurn == scissors) || (playerTurn == paper && computerTurn == paper)){
        console.log('Draw!');
    }

    return rl.close();
    });
    }
    rlFunction();
}
game();