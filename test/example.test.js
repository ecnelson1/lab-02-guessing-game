// IMPORT MODULES under test here:
import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const correctNumber = false;
    if (guess.value > correctNumber){ return 1;} 
    else if (guess.value < correctNumber){ return -1; } 
    else { return 0; }
    // Make assertions about what is expected versus the actual result
    expect.equal(guess, correctNumber);
});
