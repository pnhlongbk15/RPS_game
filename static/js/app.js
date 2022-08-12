let userScore = 0;
let computerScore = 0;
const scoreBoard = document.querySelector('.score-board')
    const userScore_board = document.getElementById('user-score');
    const computerScore_board = document.getElementById('computer-score');
const result = document.querySelector('.result');
    
    const rock = document.getElementById('rock');
    const paper = document.getElementById('paper');
    const scissor = document.getElementById('scissor');

/*--------- function ---------*/
function getComputerChoice() {
    const choices = ['rock','paper','scissor'];
    const index = Math.floor(Math.random()*3);
    return choices[index]
}

function win(userChoice, computerChoice){
    console.log('WIN');
    userScore++;
    userScore_board.innerText = userScore;
    result.innerHTML = userChoice + " beats " + computerChoice + ". You win! " ;
}
function lose(userChoice, computerChoice){
    console.log('LOSE')
    computerScore++;
    computerScore_board.innerText = computerScore;
    result.innerHTML =  userChoice + " lose " + computerChoice + ". You win!";
}
function draw(userChoice,computerChoice){
    result.innerHTML = userChoice + " draw " + computerChoice;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            win(userChoice, computerChoice);
            break;

        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            lose(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw(userChoice, computerChoice);
            break;

    } 
}

function main() {
    rock.addEventListener('click',()=>{
        game('rock')
    })

    paper.addEventListener('click',()=>{
        game('paper')
    })

    scissor.addEventListener('click',()=>{
        game('scissor')
    })
}
document.addEventListener('DOMContentLoaded', main)