// Rock-Paper-Scissors JavaScript File

// Step 1: Logic for getting computer choice

const gpuChoice = Math.floor(Math.random() * 3);

function getGpuChoice(gpuVar) {
    if (gpuVar === 0) return "Rock";
    if (gpuVar === 1) return "Paper";
    return "Scissors";   
    } 

// Step 2: Logic for getting the human choice

const bioChoice = parseInt(prompt("Please select 0 for 'Rock', 1 for 'Paper', or 2 for 'Scissors': "));

function getBioChoice(bioVar) {
    if (bioVar === 0) return "Rock";
    if (bioVar === 1) return "Paper";
    return "Scissors";    
    }

// Step 3: Declare score variables

let bioScore = 0;
let gpuScore = 0;

// Step 4: Logic to play a single round

const bioSelection = getBioChoice(bioChoice);
const gpuSelection = getGpuChoice(gpuChoice);

function playRound(bioTurn, gpuTurn) {
    if (bioTurn === gpuTurn) {
        return "It's a tie! Play again!";
    }
    const bioWins = 
        (bioTurn === "Rock" && gpuTurn === "Scissors") ||
        (bioTurn === "Paper" && gpuTurn === "Rock") ||
        (bioTurn === "Scissors" && gpuTurn === "Paper");
    if (bioWins) {
        bioScore++;
        return `You win! ${bioTurn} beats ${gpuTurn}`;
    } else {
        gpuScore++;
        return `You lose! ${gpuTurn} beats ${bioTurn}`;
    }
}

console.log("Human: " + bioSelection);
console.log("Computer: " + gpuSelection);

const roundResult = playRound(bioSelection, gpuSelection);
console.log(roundResult);

console.log(`Scores -> Human: ${bioScore}, Computer: ${gpuScore}`);