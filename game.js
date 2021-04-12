
const computerPlay = () => {

    const maximo = 3;
    const minimo = 0;
    const res = Math.floor(Math.random() * (maximo - minimo) + minimo);

    return res;
}

const fromIdToName = (id) => {

    switch (id) {
        case 0:
            return 'rock (machine)';
        case 1:
            return 'paper (machine)';
        case 2:
            return 'scissors (machine)';
        case 3:
            return 'draw';
        case 4:
            return 'rock (player)';
        case 5:
            return 'paper (player)';
        case 6:
            return 'scissors (player)';

        default:
            return 'unknown';

    }

}

const fromPromptToId = (name) => {
    switch (name) {
        case 'rock':
            return 4;
        case 'paper':
            return 5;
        case 'scissors':
            return 6;
        default:
            return -1; // entry error
    }
}

const playRound = (player, machine) => {

    /*
    COMPUTER
        0 - rock
        1 - paper
        2 - scissors
    
    3 - draw

    PLAYER
        4 - rock
        5 - paper
        6 - scirssors
    */

    switch (machine) {
        case 0: /// rock VS ???
            switch (player) {
                case 4:
                    return 3; //draw
                case 5:
                    return 5; // paper wins (player)
                case 6:
                    return 0; //  rock wins (machine)
            }

        case 1: // paper VS
            switch (player) {
                case 4:
                    return 1; // paper wins (machine)
                case 5:
                    return 3; //draw
                case 6:
                    return 6; // scissors wins (player)
            }

        case 2: // scissors VS
            switch (player) {
                case 4:
                    return 4; // rock wins (player)
                case 5:
                    return 2; // scissors wins (machine)
                case 6:
                    return 3; //draw
            }

    }



}

const game = () => {

    let i = 1;
    let machineScore = 0;
    let playerScore = 0;
    let draws = 0;
    
    do {
        console.log(`Match #${i}`);
        const playerSelectionName = prompt("Rock, Paper o Scissors?").toLocaleLowerCase().trim();
    
        const playerSelection = fromPromptToId(playerSelectionName);
    
        if( playerSelection != -1 ){
            i = i + 1; // only increment when user entry is valid
            const computerSelection = computerPlay();
            const result = playRound(playerSelection, computerSelection)  ;
    
            if( result >= 0 && result <= 2 ){
                machineScore = machineScore + 1;
            }
            
            if( result >=4 && result <= 6){
                playerScore = playerScore + 1;
            }
    
            if( result === 3 ){
                draws = draws + 1;
            }
    
    
            const resultName = fromIdToName(result);
    
            console.log(fromIdToName(computerSelection) + ' VS ' + fromIdToName(playerSelection) + ' => '+resultName );
            console.log(`(${result}) ${computerSelection} VS ${playerSelection} = Machine:${machineScore}, Player:${playerScore}, Draw:${draws}`)
            
        
        }
        
    } while (i <= 5);
    
    console.log('Score:');
    console.log(`Machine:${machineScore}, Player:${playerScore}, Draw:${draws}`);
   
}

game();








    




