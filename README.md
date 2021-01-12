# lab-02-guessing-game
HTML Setup
1. number input
2. button
3. guesses remaining span
4. too high/low span
stretch:
1. Reset button

grab dom elements
initialize state
add event listener
    -decrement stateremaining guesses (--)
    -store guess in var
    -compare guess to secret random number
    -if guess>number inject too high into results span
    -if guess<number inject too low into results
    -if guess=number congratulate user and disable input
    -if guesses remaining hit zero disable input and offer condolences to user
    -change remaining guesses in view
stretch reset button
State:
    -reset remain guesses to 4
    -get new random number
View:
    -re-enable input if disabled
    -reset guess remaining span
    -reset results text content