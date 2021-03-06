// Global variables and objects
let choices = ["rock", "paper", "scissors"];
let winningMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
}

/* Making use of immediately invoked function express (IIFE) to 
   assign variables with their respective values immediately
let computerSelection = (function(){
    let computerChoice = Math.floor(Math.random() * 3);
    return choices[computerChoice];
})();

let playerSelection = (function() {
    let temp = prompt("Choose your Destiny: Rock, Paper or Scissors?");
    if (typeof(temp) != "string"){
        return "Please provide an input that is consistent with the rules of the game... Ok please? o.o";
    }
    let playerChoice = temp.toLowerCase();
    if (playerChoice != "rock" || playerChoice != "paper" || playerChoice != "scissors"){
        return "Please make a valid selection. Try again";
    }
    return playerChoice;
})();
*/

function playerSelectionPhase(){
    let temp = prompt("Choose your Destiny: Rock, Paper or Scissors?");
    if (typeof(temp) != "string"){
        return "Please provide an input that is consistent with the rules of the game... Ok please? o.o";
    } //might be redundant
    let playerChoice = temp.toLowerCase();
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        return "Please make a valid selection. Try again";
    }
    return playerChoice;
}

function computerSelectionPhase(){
    let computerChoice = Math.floor(Math.random() * 3);
    return (choices[computerChoice]);
}

// if playRound has return value of 1 means .. win (+1 to playerCount)
// if " " value of 2 means .. lose (+1 to computerCount)
// if " " value of 3 means .. tie
function playRound(){
    computerSelection = computerSelectionPhase();
    playerSelection = playerSelectionPhase();
    if (playerSelection === computerSelection){
        console.log("You have tied a bow... wait I mean tied with the computer");
        return 3;
    }
    else if (computerSelection === winningMap[playerSelection]){
        console.log("Why couldn't you just let your computer win for once? sigh");
        return 1;
    }
    console.log("Shameful of you to lose... actually nevermind, you tried your best, that's all that matters :)");
    return 2;
}

function game(){
    let anotherGame;
    let playerCount = 0;
    let computerCount = 0;
    for (let i=0; i<5; i++){
        let tempscore;
        tempscore = playRound();
        if (tempscore == 3){continue;} //tie
        else if (tempscore == 2){computerCount++;} //computer wins
        else if (tempscore == 1){playerCount++;} // player wins
    }
    console.log("Your score is: " + playerCount);
    console.log("Your computer's score is: " + computerCount);

    if (playerCount == computerCount){
        anotherGame = prompt("You have scored the same number of points as a machine. Play again? Yes or No?").toLowerCase();
    }else if (playerCount > computerCount){
        anotherGame = prompt("You are a champion! Play again? Yes or No?").toLowerCase();
    }else{
        anotherGame = prompt("You have failed mankind. Would you like to try again? Yes or No?").toLowerCase();
    }

    if (anotherGame === "yes"){
        return game();
    }
    return "Thanks for playing! :D"
}