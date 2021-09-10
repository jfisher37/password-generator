// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  // var passwordText = document.querySelector("#password");
  
  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let chosenLength = 0
// ^decided to declare this in global context to allow it to be used in criteria function.

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

chosenLength = prompt("How long would you like your password (between 8 and 128 characters)?");

if (chosenLength > 7 && chosenLength < 129){
  criteria();
  return chosenLength
}

// if length is not between 8 and 128, say invalid and call generatePassword

else if (!chosenLength){
  return
}

else if (chosenLength < 8 || chosenLength > 128 || typeof chosenLength !== Number){
  alert ("Invalid selection.");
  generatePassword()
};




// this isn't working...

};

function criteria(){

  console.log(chosenLength)


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
  charArray.push(...lowerCase);
};

let upperConf = confirm("Would you like your password to include uppercase letters?");

if (upperConf === true){
  preArray.push(upperCase[Math.floor(Math.random() * upperCase.length)]);
  charArray.push(...upperCase);
};

let numConf = confirm("Would you like your password to include numbers?");

if (numConf === true){
  preArray.push(numeric[Math.floor(Math.random() * numeric.length)]);
  charArray.push(...numeric);
};

let specConf = confirm("Would you like your password to include special characters?");

if (specConf === true){
  preArray.push(specialChar[Math.floor(Math.random() * specialChar.length)]);
  charArray.push(...specialChar);
};

if (lowerConf === false && upperConf === false 
  && numConf === false && specConf === false) {
  alert("You must select at least one type of character. Try again.");

  criteria();
}
else {
//   alert("Find your password below.")
// };

// ^Let's ask about this

console.log(preArray);
console.log(charArray);

//^console.logs to track progress



// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// create a new array (later to be turned to string with .join("") method), called passArray

let passArray = []
// console.log(chosenLength)
// ^log to ensure that chosenLength made it successsfully into criteria func 

//create a for loop with i < 128, in this loop, push charArray[Math.ciel(Math.random() * charArray.length] into preArray

for (let i = 0; i < 128; i++){
  preArray.push(charArray[Math.floor(Math.random() * charArray.length)]);
};

console.log(preArray);
// ^Log to verify things are going as hoped.

// set passArray = preArray.slice(0, promptRePasswordLength)
passArray = preArray.slice(0, chosenLength);


console.log(passArray);
// ^Checking passArray (to compare to finalArray)
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// Let's try to create a randomizer:

let finalArray = [];

while (passArray.length) {
  let randIndex = Math.floor(Math.random() * passArray.length);
  finalArray.push (passArray[randIndex]);
  passArray.splice (randIndex, 1);
  
};

console.log(finalArray);
// ^Checking finalArray to compare to passArray



// console.log(passArray.length);
// ^making sure the final length matches chosen length

// return passArray.join("")
let passwordText = document.querySelector("#password");

passwordText.value = finalArray.join("");

}

//Moved these two lines (140 and 142) from above so that they existed within the scot of func criteria.

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//^It kinda looks like it's already set to display on the page, but we'll see when we get here. 
};

// criteria(); 
// here for console.logs in criteria function. Comment out when done.