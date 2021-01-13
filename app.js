// import functions and grab DOM elements
const spanRemianGuess = document.getElementById('remain-guess');
const guess = document.getElementById('user-in');
const subButton = document.getElementById('sub-button'); 
import { guessAnalyzer } from './utils.js';
import { guessTrack } from './utils.js';

// initialize state
spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
let remainGuess = 4;

// set event listeners to update state and DOM
subButton.addEventListener('click', () => { 
    --remainGuess;
    guessAnalyzer(guess);
    guessTrack(remainGuess);  
    spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
});