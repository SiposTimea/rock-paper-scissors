    //getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”
    //use Math.random method and multiply it by 10 to have the range of integers between 0 and 9
    //write condition that returns one of 3 strings using the modulus operator (%)

     let randomNumber = Math.floor(Math.random() * 10);
        
        function getComputerChoice(){             
            if (randomNumber % 3 === 0 || randomNumber === 0) {
                return "ROCK";
            } else if (randomNumber % 2 === 0) {
                return"PAPER";
            } else {
                return"SCISSORS";
            }
            }
            

    //declare a variant name humanAnswer and assign it to prompt method
    //write function named getHumanChoice and return the user's answer

        function getHumanChoice() {
            let humanAnswer = prompt("Please, enter your choice of rock, paper or scissiors: ");
            return humanAnswer;
           }
           
        

    //function for keeping the final score doing 5 rounds with a for loop
            let humanScore = 0;
            let computerScore = 0;
            playGame();

        function playGame() {
            console.log("Let's play Rock, Paper, Scissors!")
            for (let i = 1; i < 6; i++) {
                let humanSelection = getHumanChoice();
                let computerSelection = getComputerChoice();
                
                console.log("**************************")
                console.log("ROUND ", i);
                playRound(humanSelection, computerSelection);
            }
            
            console.log("**************************")
            console.log("GAME OVER");
            console.log("Your Score: ", humanScore, " | ", "Computer Score: ", computerScore);
            if (humanScore == computerScore){
                console.log("It's a draw.");
            }else if (humanScore > computerScore) {
                console.log("You've won, congratulation!");
            }else {
                console.log("Sorry, you've lost the game!");
            }
         }

    //function for playing one round and add 1 to winner's score         

        function playRound(humanSelection, computerSelection) {
            humanSelection = humanSelection.toUpperCase();
            console.log("Your choice is: " + humanSelection);
            console.log("Computer's choice is: " + computerSelection);
        /*lose case */
        if (humanSelection == "ROCK" && computerSelection == "PAPER"){
            console.log("You lose! Paper beats Rock.");
           computerScore = computerScore + 1;
            
        } else if(humanSelection == "PAPER" && computerSelection == "SCISSORS"){
            console.log("You lose! Scissors beat Paper.");
            computerScore = computerScore + 1;
            
        } else if(humanSelection == "SCISSORS" && computerSelection == "ROCK"){
            console.log("You lose! Rock beats Scissors.");
            computerScore = computerScore + 1;
            
         /*win case */
        } else if(humanSelection == "ROCK" && computerSelection == "SCISSORS"){
            console.log("You win! Rock beats Scissors.");
            humanScore = humanScore + 1;
            
        } else if(humanSelection == "PAPER" && computerSelection == "ROCK"){
            console.log("You win! Paper beats Rock.");
            humanScore = humanScore + 1;
            
        } else if(humanSelection == "SCISSORS" && computerSelection == "PAPER"){
            console.log("You win! Scissors beat Paper.");
            humanScore = humanScore + 1;
            
         /*it's a tie case */
        } else if(humanSelection == computerSelection){
            console.log("It's a tie!");
        }
        console.log("Your Score: " + humanScore, " | ", "Computer Score: " + computerScore);
    }
    

    
        

    


    