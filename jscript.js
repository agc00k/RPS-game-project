// Rock-Paper-Scissors Game JavaScript File

// Logic for getting computer choice
// Moved const inside function for playGame

function getGpuChoice() {
    const gpuVar = Math.floor(Math.random() * 3);
    if (gpuVar === 0) return "Rock";
    if (gpuVar === 1) return "Paper";
    return "Scissors";   
} 

// Logic for getting the human choice
// Moved const inside function for playGame

function getBioChoice() {
    const bioVar = parseInt(prompt("Please select 0 for 'Rock', 1 for 'Paper', or 2 for 'Scissors': "));
    if (bioVar === 0) return "Rock";
    if (bioVar === 1) return "Paper";
    return "Scissors";    
}

// Logic for 5 Rounds of Rock-Paper-Scissors Game
// Moved playRound function insire playGame
// Added loop of rounds, round messaging, and final game announcement
// Had help on loop function

function playGame(){

    let bioScore = 0;
    let gpuScore = 0;

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

    for (let round = 1; round <= 5; round++) {
        const bioSelection = getBioChoice();
        const gpuSelection = getGpuChoice();
        
        console.log(`Round ${round}:`);
        console.log(`You: ${bioSelection}`);
        console.log(`Computer: ${gpuSelection}`);

        const result = playRound(bioSelection, gpuSelection);
        console.log(result);
        console.log(`Score so far: You - ${bioScore}; Computer - ${gpuScore}`);
        console.log("-------------");
    }

    console.log("Final result after 5 rounds:");
    if (bioScore > gpuScore) {
        console.log(`You win the game! Final score: You ${bioScore} - Computer ${gpuScore}`);
    } else if (gpuScore > bioScore) {
        console.log(`Computer wins the game! Final score: Computer ${gpuScore} - You ${bioScore}`);
    } else {
        console.log(`Game is a tie! Final score: You ${bioScore} - Computer ${gpuScore}`);
    }
}

// Call the game to start
playGame();