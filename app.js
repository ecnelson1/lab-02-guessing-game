// import functions and grab DOM elements
const remianGuess = document.getElementById('remain-guess');
const userOut = document.getElementById('user-out');
const Numguess = document.getElementById('user-in');
const subButton = document.getElementById('sub-button'); 

// initialize state
const secNum = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM
subButton.addEventListener('click', () => { 
    console.log(secNum);

})