// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// create alert telling them we're about to ask for criteria

alert("Please select the desired features for your password.");

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password

// create a prompt re: passwork length between 8 and 128

let chosenLength = prompt("How long would you like your password (between 8 and 128 characters)?");

if (chosenLength > 7 && chosenLength < 129){
  criteria();
}

// if length is not between 8 and 128, say invalid and call generatePassword

else {
  alert ("Invalid selection.");
  generatePassword()
};
};

function criteria(){



// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//create preArray to get characters pushed into it

let preArray = [];


// create an empty array to contain possible characters

let charArray = [];

//for every affirmative confirm, push a random element from respective array into preArray

//create arrays for character options

let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChar = [" ", "!",`"`, "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<","=", ">", "?", "@","[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// console.log(numeric.length)

// create confirms for lowercase, uppercase, numeric, and special characters. if their confirms are true, push to charArray.

let lowerConf = confirm("Would you like your password to include lowercase letters?");

if (lowerConf === true){
  preArray.push(lowerCase[Math.floor(Math.random() * lowerCase.length)]);
  charArray.push(...lowerCase)
}

console.log(preArray);
console.log(charArray);

//^console.logs to track progress

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// create a new array (later to be turned to string with .join("") method), called passArray

//create a for loop with i <= 128, in this loop, push charArray[Math.ciel(Math.random() * charArray.length] into preArray

// set passArray = preArray.slice(0, promptRePasswordLength)
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// return passArray.join("")

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//^It kinda looks like it's already set to display on the page, but we'll see when we get here. 
}

criteria(); 
// 