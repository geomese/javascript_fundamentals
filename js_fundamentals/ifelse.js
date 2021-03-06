// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var bigNumber = 10
var littleNumber = 5

function greatNum(bigNumber, littleNumber){
  if(bigNumber > littleNumber){
    alert(bigNumber + " is more than " + littleNumber);
  } else {
    alert(bigNumber + " is less than " + littleNumber);
  }
}

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

var language = "de"

function helloWorld(language){
  if( language == "es" ) {
    console.log("Hola, mundo!");
  } else if ( language == "de" ) {
    console.log("Hallo, welt!");
  } else {
    console.log("Hello, world!");
  }
}

// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

var numberScore = 90

function assignGrade(numberScore){
  if(numberScore >= 80){
    console.log("A")
  } else if(numberScore >= 70){
    console.log("B")
  } else if(numberScore >= 60){
    console.log("C")
  } else if(numberScore >= 50){
    console.log("D")
  } else {
    console.log("F")
  }
}

// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

var noun = "dog"
var number = 5

function pluralize(noun, number){
  if(number >= 2){
    console.log(number + " " + noun + "s");
  } else {
    console.log(number + " " + noun);
  }
}

// BONUS

var noun = "dog"
var number = 5

function pluralize(noun, number){
  if(number >= 2){
    if(noun === "sheep"){
      console.log(number + " Sheep");
    } else if(noun === "goose"){
      console.log(number + " Geese");
    } else {
      console.log(number + " " + noun + "s");
    }
  } else {
    console.log(number + " " + noun);
  }
}


