Pseudocode:

Writing the code for the computer side of the game
Step 1: 
- declare a variant name randomNumber and assign the random number method to get a random number between 0 and 1 
- multiply it by 10 to return a random integer between 0 and 9.
- Write function and name it getComputerChoice
- getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”
- use Math.random method and multiply it by 10 to have the range of integers between 0 and 9
- write condition that returns one of 3 strings
- using the modulus operator (%) 
- if the number is divisible by 3 with a reminder of 0: return the string: Rock 
- if the number is divisible by 2 with a reminder of 0: return the string: Paper
- else return the string: Scissiors

Step 2: 
- declare a variant name humanAnswer and assign it to prompt method
- this will create a pop-up on the screen with an input field where the users can enter their answer
- ask the users to type their choice of rock, paper or scissiors
- write function named getHumanChoice and return the user's answer

Step 3:
- declare 2 variable to keep score and assign them to value zero
- this will increment after each score

Step 4:
Creating 1 single round:
- create a function named playround
- define two parameters for playRound: humanSelection and computerSelection
- Use these two parameters to take the human and computer choices as arguments
LOSE CASE:
- if humanselection is "ROCK" and computerselection is "PAPER"
- console log: “You lose! Paper beats Rock”.
- else if humanselection is "PAPER" and computerselection is "SCISSORS"
- console log: “You lose! Scissors beat Paper”.
- else if humanselection is "SCISSORS" and computerselection is "ROCK"
- console log: “You lose! Rock beats Scissors”.

WIN CASE:
- if humanselection is "ROCK" and computerselection is "SCISSORS"
- console log: “You win! Rock beats Scissors”.
- else if humanselection is "PAPER" and computerselection is "ROCK"
- console log: “You win! Paper beats Rock”.
- else if humanselection is "SCISSORS" and computerselection is "PAPER"
- console log: “You win! Scissors beat Paper”.

TIE CASE:
- if humanselection is equal to computerselection
- console log: "It's a tie!"

Step 5:
- increase the score of the winner by 1.

Step 6:
- create a new function named playgame
- create a for loop which calls the playRound function 5 times
- keep score and the end of the 5 rounds call the winner and show the scores