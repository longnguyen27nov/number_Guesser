let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (currentHumanGuess, computerGuess, target) => {
  if(currentHumanGuess < 0 || currentHumanGuess > 9){
   console.log(window.alert('Please input a number within 0-9'));  
     }
  else if(currentHumanGuess === computerGuess){
    return true;
  }
  else{
  const getAbsoluteDistance = (currentHumanGuess,computerGuess) => {
    let humanResult = Math.abs(target - currentHumanGuess);
    let computerResult = Math.abs(target - computerGuess);

    return humanResult <= computerResult ? true : false;
  }; getAbsoluteDistance(currentHumanGuess,computerGuess);
  }
};

const updateScore = (winner) => {
 if (winner === 'human') {
    humanScore++;
 }
 else {
    computerScore++;
 }
};

const advanceRound = () => {
  currentRoundNumber++;
};
