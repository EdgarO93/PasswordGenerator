//creating variables, then splitting into arrays

var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
// have to add forward slashes to include qoutes and double forward slash to include on
var symbol = "!#$%&'()*\"\+,-./:;<=>?@[\\]^_`{|}~";

//this will make the strings into arrays
var abcArray = abcLower.split("");
var numArray = num.split("");
var symbolArray = symbol.split("");

// make Array for upper ABCs
var toCap = function (x) {
  return x.toUpperCase();
};

//The array(uppercase) is created by applying the above function (to make it uppercase) to the previous array (abclower)
var abcUpArray = abcArray.map(toCap);

//Window alert to give instruction to user
window.onload = alert("Welcome! Please click Generate Password to begin.");

// Creating a password variable to hold the choices (not really sure if this needs to be here)

var password = "";


//password generation code
function generatePassword () {
  var finPassword = "";
  var choices = [];

  // start of the prompt for password, setting up min 8 and max 128 characters
  var passLength = prompt("How many characters do you want your password to be?");

  //passLength == isNan was an attempt to make sure something is inputted and it's a number
  if (passLength < 8 || passLength > 128) {
    alert("It is recommended that your password be between 8 and 128 characters.\nTry again.");
  }

  //have to confirm the password characters, array.protoype.push.apply will merge arrays
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
    // the loop for randomly picking from the characters selected to fill the number of characters needed and then randomly picked
    else {
      for (var i = 0; i < passLength; i++) {
        var random = Math.floor(Math.random()* choices.length);
        finPassword += choices[random];
      }
    }
  }
  //adding this made it not undefined....but it still does not add the password
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
