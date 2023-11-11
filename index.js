function game(){
//variables set for each score to track

let compScore = 0;
let playerScore = 0;
let tieScore = 0;

//loops the rounds until best of 5
for (i=0; (compScore < 3) && (playerScore <3); i++){
function getCompChoice(){
    let answers = ['rock', "paper", "scissors"];
    let choice = Math.floor(Math.random()*answers.length);
    return (answers[choice]);
}

//for game:
// let compChoice = getCompChoice();
//for troubleshooting:
let compChoice = "rock";


function getPlayerChoice(){
    let playerChoice = prompt("Pick rock, paper, or scissors");
    return playerChoice.toLowerCase();
}

let playerChoice = getPlayerChoice();
console.log("Computer chooses " + compChoice + ", player chooses " + playerChoice);

//determines result of round
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

//adds each round win to the score variables
if (result === "You win!"){
    playerScore ++;
} else if (result === "The computer wins!"){
    compScore ++;
} else {
    tieScore ++;
}
}

let totalGames = compScore + playerScore + tieScore;

console.log(("Player Score: " + playerScore) + (", Computer Score: " + compScore) + (", Tie Games: " + tieScore));
console.log("Total Games: " + totalGames);

//reports final results
if (playerScore > compScore){
    // console.log("You beat the computer!");
    let displayedResult = document.getElementById("result");
    displayedResult.innerText = "You beat the computer!";
} else {
    console.log("You've been beaten by the computer!");
}

}
game();