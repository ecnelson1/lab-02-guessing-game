const spanRemianGuess = document.getElementById('remain-guess');
export const userOut = document.getElementById('user-out');
const guess = document.getElementById('user-in');
import { subButton } from './app.js';
// initialize state
let correctNumber = Math.ceil(Math.random() * 20);
let remainGuess = 4;

export function compareNumbers(){
    if (guess.value > correctNumber){ userOut.textContent = 'TOO High'; } 
    else if (guess.value < correctNumber){ userOut.textContent = 'TOO LOW'; } 
    else { userOut.textContent = `Congratulations! you guessed ${correctNumber} and were correct!`;
        guess.disabled = true;
        subButton.disabled = true; }}

export function guessTrack(attempts){
    if (attempts > 0){
        spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
    }
    else {userOut.textContent = 'OOPS! YOU ARE OUT OF GUESSES!';
        guess.disabled = true;
        subButton.disabled = true;}}
