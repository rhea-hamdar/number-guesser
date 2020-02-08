let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random() * 10);

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (userGuess, computerGuess, targetNumber) => {
  if (userGuess < 0 || userGuess > 9) {
    alert('Please input a number between 0 and 9');
  } else if (getAbsoluteDistance(userGuess, targetNumber) <= getAbsoluteDistance(computerGuess, targetNumber)){
    return true;
  } else {
    return false;
  }
};

const updateScore = winner => {
  if (winner === 'human') {
    return humanScore++;
  } else if (winner === 'computer') {
    return computerScore++;
  }
};

const advanceRound = () => currentRoundNumber++;
