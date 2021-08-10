//creating variables, then splitting into arrays

var abcLower = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
// have to add forward slashes to include qoutes and double forward slash to include on
var symbol = "!#$%&'()*\"\+,-./:;<=>?@[\\]^_`{|}~";

var abcArray = abcLower.split("");
var numArray= num.split("");
var symbolArray= symbol.split("");

// make Array for upper ABCs
var toCap =  function (x) {
  return x.toUpperCase();
};
//The array(uppercase) is created by applying the above function (to make it uppercase) to the previous array (abclower)
var abcUpArray = abcArray.map(toCap);

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
