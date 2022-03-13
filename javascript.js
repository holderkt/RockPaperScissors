let myArray = [
    "rock", "paper", "scissors",
];
let playerInput
let playerSelection;
let computerSelection;
let playerScore = 0
let computerScore = 0

playerInput = prompt("Make your move!"); /*prompts user to play*/
playerSelection = playerInput.toLowerCase(); /*converts response to lowercase*/
console.log (playerSelection); /*reports to console for debugging*/
computerSelection = myArray[Math.floor(Math.random()*myArray.length)]; /*randomly selects R,P, or S*/
console.log (computerSelection); /*reports to console for debugging*/

 function playRound (playerSelection, computerSelection) /*defines function for one round of RPS*/
    { 
    if (playerSelection == "rock" && computerSelection == "scissors" 
        || playerSelection == "paper" && computerSelection == "rock" 
        || playerSelection == "scissors" && computerSelection == "paper" ) /* defines conditions for player win */
        { playerScore += 1; /* increments score for player win*/
            return `You won! ${playerSelection} beats ${computerSelection}!`} /* returns victory text*/
    else if (playerSelection === computerSelection) /* checks for tie*/
        {return `You tied. Try again!`} /*returns tie message*/
    else {computerScore += 1; /*computer scores under all other conditions*/
        return `The computer won.  ${computerSelection} beats ${playerSelection}.`}; /* returns loss message*/  
}
console.log(playRound(playerSelection, computerSelection)) /*prints return from playRound function - victory, tie, loss message*/

function game () 
{
    for (let i=0; i<5; i++) /*setting up for loop, THIS IS NOT WORKING*/
    {let playerInput = prompt("Make your move!"); /*prompts user to play*/
    let playerSelection = playerInput.toLowerCase(); /*converts response to lowercase*/
    console.log (playerSelection); /*reports to console for debugging*/
    let computerSelection = myArray[Math.floor(Math.random()*myArray.length)]; /*randomly selects R,P, or S*/
    console.log (computerSelection); /*reports to console for debugging*/;
    playRound (playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection))}}