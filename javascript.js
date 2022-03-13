var myArray = [
    "rock", "paper", "scissors",
];
var playerInput;
var playerSelection;
var computerSelection;
var playerScore = 0
var computerScore = 0

function computerPlay() {computerSelection = myArray[Math.floor(Math.random()*myArray.length)] /*randomly selects R,P, or S*/}

function promptUser() {playerInput = prompt("Make your move!  Type rock, paper, or scissors."); /*prompts user to play*/
playerSelection = playerInput.toLowerCase(); /*converts response to lowercase*/}

 function playRound (playerSelection, computerSelection) /*defines function for one round of RPS*/
    {
    if (playerSelection == "rock" && computerSelection == "scissors" 
        || playerSelection == "paper" && computerSelection == "rock" 
        || playerSelection == "scissors" && computerSelection == "paper" ) /* defines conditions for player win */
        { ++playerScore; /* increments score for player win*/
            return `You won; ${playerSelection} beats ${computerSelection}!`} /* returns victory text*/
    else if (playerSelection === computerSelection) /* checks for tie*/
        {return `You tied. Try again!`} /*returns tie message*/
    else {++computerScore; /*computer scores under all other conditions*/
        return `The computer won;  ${computerSelection} beats ${playerSelection}.`}; /* returns loss message*/  
}

function game() 
{
    for (let i=0; i<5; i++) /*setting up for loop*/
    { computerPlay ();
    promptUser ();
    console.log (playerSelection + "," + computerSelection);
    console.log(playRound(playerSelection, computerSelection));
    console.log ("Score: player " + playerScore + ", computer " + computerScore)}
}

game()