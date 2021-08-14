// Arrays of the characters that will be used by the password generator
var abcUpArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var abcArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolArray = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "'", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//Window alert to give instruction to user
window.onload = alert("Welcome! Please click Generate Password to begin.");

// Creating a password variable with global scope 
var password = "";

//password generator code
function generatePassword() {
  var finPassword = "";
  var choices = [];

  // start of the prompt for password, setting up min 8 and max 128 characters
  var passLength = prompt("How many characters do you want your password to be?\n Please pick between 8 and 128.");
  // console.log(passLength) to check prompt length
  // isNan fuction is to make sure it's a number
  if (isNaN(passLength) === true) {
    alert("Please enter a number. \nTry again, click Generate Password.")
    //this covers min of 8 and max of 128 as well as something being inputed
  } else if (passLength < 8 || passLength > 128) {
    alert("It is recommended that your password be between 8 and 128 characters.\nTry again, click Generate Password.");
  }

  //have to confirm the password characters, array.protoype.push.apply will merge arrays with each criteria selected
  else {
    if (confirm("Should password have uppercase letters?")) {
      Array.prototype.push.apply(choices, abcUpArray)
    }
    if (confirm("Should password have lowercase letters?")) {
      Array.prototype.push.apply(choices, abcArray)
    }
    if (confirm("Should password have numbers?")) {
      Array.prototype.push.apply(choices, numArray)
    }
    if (confirm("Should password have special characters?")) {
      Array.prototype.push.apply(choices, symbolArray)
    }
    //this alert will show up if user chooses no criteria, where password would go I included messages before the undefined statement
    else if (choices.length === 0) {
      alert("Please choose at least one criteria.\n Try again, click Generate Password!")
      finPassword = "Try \n again!\n Click \n Generate Password!!!\n!!!"
    }

    // the loop for randomly picking from the criteria selected to fill the finPassword variable until the password length achieved
    for (var i = 0; i < passLength; i++) {
      var random = Math.floor(Math.random() * choices.length);
      finPassword += choices[random];
      // console.log(finPassword) to check final passowrd
    }

    // console.log(choices) to check if prompt was populating choices
  }
  //This will define var password in function writePassword
  return finPassword;

}
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
