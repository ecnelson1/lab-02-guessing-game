const spanRemianGuess = document.getElementById('remain-guess');
const userOut = document.getElementById('user-out');
const guess = document.getElementById('user-in');

// initialize state
let myNum = Math.ceil(Math.random() * 20);
let remainGuess = 4;

export function guessAnalyzer(){
    if (guess.value > myNum){ userOut.textContent = 'TOO High'; } 
    else if (guess.value < myNum){ userOut.textContent = 'TOO LOW'; } 
    else { userOut.textContent = `Congratulations! you guessed ${myNum} and were correct!`;
        guess.disable; }}

export function guessTrack(attempts){
    if (attempts > 0){
        spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
    }
    else {userOut.textContent = 'OOPS! YOU ARE OUT OF GUESSES!';
        guess.disabled = true;}}
