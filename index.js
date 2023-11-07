function game(){
// I'm going to try and set a variable for compScore and playerScore;
let compScore = 0;
let playerScore = 0;
let tieScore = 0;

for (i=0; i<5; i++){
// Have the computer pick rock, paper, or scissors at random;
// Store that result in a variable called compChoice;
function getCompChoice(){
    let answers = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random()*answers.length);
    return (answers[choice]);
}

let compChoice = getCompChoice();

// Ask the user to choose rock, paper, or scissors;
//     This needs to NOT be case sensitive;
// Store that result in a variable called playerChoice;
function getPlayerChoice(){
    let playerChoice = prompt("Pick rock, paper, or scissors");
    return playerChoice.toLowerCase();
}

let playerChoice = getPlayerChoice();
console.log("Computer chooses " + compChoice + ", player chooses " + playerChoice);

// Compare the computer's choice to the user's choice;
//     If the computer chose "Rock", check:
//         If the player chose "Rock", log "It's a tie!";
//         If the player chose "Paper", log "You win!";
//         If the player chose "Scissors", log "The computer wins!";
//     If the computer chose "Paper", check:
//         If the player chose "Rock", log "The computer wins!";
//         If the player chose "Paper", log "It's a tie!";
//         If the player chose "Scissors", log "You win!";
//     If the computer chose "Scissors", check:
//         If the player chose "Rock", log "You win!";
//         If the player chose "Paper", log "The computer wins!";
//         If the player chose "Scissors", log "It's a tie!";
function getResult(){
    if (compChoice === "rock"){
        if (playerChoice === "rock"){
            return "It's a tie!"
        } else if (playerChoice === "paper"){
            return "You win!"
        } else {return "The computer wins!"}
    } else if (compChoice === "paper"){
        if (playerChoice === "rock"){
            return "The computer wins!";
        } else if (playerChoice === "paper"){
            return "It's a tie!";
        } else {return "You win!"};
    } else {
        if (playerChoice === "rock"){
            return "You win!"
        } else if (playerChoice === "paper"){
            return "The computer wins!"
        } else {return "It's a tie!"}
    }
}

let result = getResult();

console.log(result);



// if the result is "you win", add one to playerScore;

if (result === "You win!"){
    playerScore ++
} else if (result === "The computer wins!"){
    compScore ++
} else {
    tieScore ++
}
}
console.log("Player Score: " + playerScore);
console.log("Computer Score: " + compScore);
console.log("Tie Games: " + tieScore);
// if the result is "the computer wins", add one to compScore;
// if the result is "tie", add one to tie maybe? Or do nothing
if (playerScore > compScore && playerScore >= tieScore){
    console.log("You beat the computer!")
} else if (compScore > playerScore && compScore >= tieScore)
    {console.log("You've been beaten by the computer!")
} else {console.log("It's a tie!")}



// If the player wins, add a point to the player count;
// If the computer wins, add a point to the computer count;
// If the result is a tie, add a point to the tie count;
//     The game is over when a total of 5 wins are accumulated;
// After the game ends, declare a total winner;
//     Provide stats (i.e., computer won x, player won y);
}
game();