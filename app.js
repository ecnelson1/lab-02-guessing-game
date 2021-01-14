// import functions and grab DOM elements
const spanRemianGuess = document.getElementById('remain-guess');
const guess = document.getElementById('user-in');
export const subButton = document.getElementById('sub-button');
const newGame = document.getElementById('new-game'); 
import { userOut, compareNumbers, guessTrack } from './utils.js';
// initialize state
let remainGuess = 4;
spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;

// set event listeners to update state and DOM
subButton.addEventListener('click', () => { 
    --remainGuess;
    compareNumbers(guess);
    guessTrack(remainGuess);  
    spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
});
newGame.addEventListener('click', ()=> {
    remainGuess = 4;
    spanRemianGuess.textContent = `New game! you have ${remainGuess} remaining!`;
    userOut.textContent = 'New Game Initiated';
    subButton.disabled = false;
});