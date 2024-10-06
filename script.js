
let words = ["rock", "paper", "scissor"] 

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++){
        
        function getComputerChoice(){
            index = (Math.floor(Math.random()*words.length));
            computerChoice = words[index];
            console.log("Computer choice :" + " " + computerChoice );
            return computerChoice;
            
        }
        
        function getHumanChoice(){
            humanChoice = prompt("Enter rock, paper or scissor");
            humanChoice = humanChoice.toLowerCase(); 
            console.log("Your choice is :" + humanChoice)
            return humanChoice;
        }
        
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        
        function playRound(humanChoice, computerChoice ){
           

            if (humanChoice === "rock" && computerChoice === "paper"){
                computerScore =computerScore + 1;

            }

            else if ( humanChoice === "paper" && computerChoice === "rock"){
                humanScore = humanScore +1;
            }

            else if( humanChoice === "scissor" && computerChoice === "paper"){
                humanScore = humanScore +1;
            }

            else if (humanChoice === "paper" && computerChoice === "scissor"){
                computerScore = computerScore+1;
            }

            else if ( humanChoice ==="rock" && computerChoice === "scissor"){
                humanScore = humanScore +1;
            }

            else if (humanChoice === computerChoice){
                console.log("No score!")
               
            }
            
            else{
                computerScore = computerScore +1;
               
            }

           
        }
        
        playRound(humanSelection, computerSelection);
        
    }

    console.log("Game Over!")
    console.log("Computer score : " + computerScore);
    console.log("Your Score : " + humanScore)

    function selectWinner(){
        if(computerScore>humanScore){
            alert("Computer won the game!" + " " + "Computer score : " + computerScore + " " + "Your Score : " + humanScore)
            console.log("Computer won the game!")
        }
        else if(computerScore<humanScore){
            alert("You won the game!" + " " + "Computer score : " + computerScore + " " + "Your Score : " + humanScore)
            console.log("You won the game!")
        }
        else {

            alert("Its a tie!")
            console.log("Its a tie!")
        }
    }

    selectWinner();

}

playGame();

