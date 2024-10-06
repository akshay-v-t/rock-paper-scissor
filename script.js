let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');

const choices = ['rock', 'paper', 'scissor'];


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    let winner = '';

    
    if (playerSelection === computerSelection) {
        winner = 'It\'s a draw!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissor') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissor' && computerSelection === 'paper')
    ) {
        winner = 'You win this round!';
        userScore++;
    } else {
        winner = 'Computer wins this round!';
        computerScore++;
    }

    
    userScoreDisplay.innerText = `User Score: ${userScore}`;
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    resultDisplay.innerText = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${winner}`;

   
    checkForWinner();
}


function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function checkForWinner() {
    if (userScore === 5) {
        resultDisplay.innerText = 'Congratulations! You are the overall winner!';
        resetGame();
    } else if (computerScore === 5) {
        resultDisplay.innerText = 'Sorry! The computer is the overall winner!';
        resetGame();
    }
}


function resetGame() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.innerText = `User Score: ${userScore}`;
    computerScoreDisplay.innerText = `Computer Score: ${computerScore}`;
    resultDisplay.innerText += ' The game has been reset. Click to play again!';
}


document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissor').addEventListener('click', () => playRound('scissor'));
