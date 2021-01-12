// import functions and grab DOM elements
const spanRemianGuess = document.getElementById('remain-guess');
const userOut = document.getElementById('user-out');
const guess = document.getElementById('user-in');
const subButton = document.getElementById('sub-button'); 
const secNum = document.getElementById('sec-num');

// initialize state
let myNum = Math.ceil(Math.random() * 20);
let remainGuess = 4;
spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
// set event listeners to update state and DOM
subButton.addEventListener('click', () => { 
    --remainGuess;
    spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
    if (guess.value > myNum){ userOut.textContent = 'TOO High'; } 
    else if (guess.value < myNum){ userOut.textContent = 'TOO LOW'; } 
    else { secNum.textContent = `Congratulations! you guessed ${myNum} and were correct!`;
        guess.disable; }
    if (remainGuess > 0){
        spanRemianGuess.textContent = `You Have ${remainGuess} Guesses Remaining!`;
    }
    else {userOut.textContent = 'OOPS! YOU ARE OUT OF GUESSES!';
        guess.disabled = true;}});
// function compareNumbers(guess, correctNumber){
//     if (guess > correctNumber){ return 1;}
//     else if (guess < correctNumber){ return -1;}
//     else { return 0;}
// }
