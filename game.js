
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

let matchCount = 0;

const winnerScore = 3;

let machineScore = 0;
let playerScore = 0;
let draws = 0;


function game() {

    if ( !(machineScore == winnerScore || playerScore == winnerScore) ) { // if reaches the end of the game, print the score
        
        matchCount = matchCount + 1; // match # 

        const playerSelection = fromPromptToId(this.getAttribute('id'));

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        if (result >= 0 && result <= 2) {
            machineScore = machineScore + 1;
        }

        if (result >= 4 && result <= 6) {
            playerScore = playerScore + 1;
        }

        if (result === 3) {
            draws = draws + 1;
        }


        const matchOutcome = document.createElement('div');
        matchOutcome.textContent = `Match # ${matchCount} -> ${fromIdToName(computerSelection)} VS ${fromIdToName(playerSelection)} => mac(${machineScore}) / pl (${playerScore}) / dw (${draws})`;
        
        const resultContainer = document.querySelector('#resultcontainer');
        resultContainer.appendChild(matchOutcome);

        if( machineScore == winnerScore || playerScore == winnerScore ){
            showScore();
        }

    }
   

}

function showScore (){

    const score = document.createElement('div');

    if( machineScore > playerScore ){
        score.style.cssText = "background-color: red; line-height: 2em;"
        score.textContent = 'You loose :(';
    }
    else {
        score.style.cssText = "background-color: green; line-height: 2em;"
        score.textContent = 'You win :)';
    }


    const resultContainer = document.querySelector('#resultcontainer');
    resultContainer.appendChild(score);

    const actions = document.querySelector('#actions');
    actions.remove();

}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(e => {
    e.addEventListener('click', game);
});


// game();













