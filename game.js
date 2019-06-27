// Create a small array
var letters = ["a", "b", "c", "d", ""];

// Create an empty array to hold what the user guesses
var userGuesses = [];

// Create a variable that will be randomly assigned one of the three letters
var randomLetter = letters[Math.floor(Math.random() * letters.length)]
// Set a limit for the user guesses left and assign that to a variable. 
var guessLeft = 3;
var txtGuessleft = document.getElementById("txtGuessleft");
txtGuessleft.textContent = guessLeft;
var txtallGuess = document.getElementById("txtallGuess");

// Create counters for wins and losses and assign them the value of zero
var wins = 0;
var txtwin = document.getElementById("txtwin");
var losses = 0;
var txtLoose = document.getElementById("txtLoose");
var allGuess = [];
var compGuess = String.fromCharCode(Math.floor(Math.random() * (26)) + 97);
// alert (compGuess)


function reset(){
  txtallGuess.textContent = "";
  guessLeft = 3;
}


document.onkeyup = function (event) {
  if (event.key.toLowerCase() === compGuess) {
    wins = wins + 1
    txtwin.textContent = wins

  }
  else {
    guessLeft = guessLeft - 1
    txtGuessleft.textContent = guessLeft

    allGuess.push(event.key);
    //  alert(allGuess);
    txtallGuess.textContent = allGuess.toString();
    if (guessLeft == 0) {
      losses = losses + 1
      txtLoose.textContent = losses;
      console.log(losses);
      reset();
    }
  }

}

// Create three functions to update guesses, update guesses left, and update guesses so far

  // In the update guesses left function create a code to grab the HTML element and setting it equal to the guesses left.
  // (i.e. guesses left will get displayed in HTML)


  // In the update guesses function we get a random letter-to-guess and assign it based on a random generator (only looking at a, b, or c)



  // In the update guesses-so-far function we take the guesses the user has tried -- then display it as letters separated by commas.

// Create a reset function will be called when we reset everything
// The reset Function should assign the values of the variables to their original values before the user started to play
// For example, the guesses left variable, the guessed letter empty array ...etc

// Call the functions that you created above

// Create a document.onkeydown function that will capture the keyboard clicks.

  // This function should reduce the guesses by one

  // Set the event.key to Lowercase the letter and save it in a variable 

  // Then push the guess to the guessedLetters array

  // Then its going to run the update functions
