// Assignment code here

function passPrompt() {
  var selectPrompt = window.prompt("How many characters would you like your password? Choose between 8 and 128");
  selectPrompt = parseInt(selectPrompt);
  if (selectPrompt >7 && selectPrompt < 129){
    console.log("hello!");
  } else {
    alert("This needs a valid value!");
    passPrompt();
  }
};

passPrompt();


/*
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var passwordInfo = {
  lower: ("abcdefghijklmnopqrstuvwxyz").split(""),
  upper: ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split(""),
  number: ("0123456789").split(""),
  sChar: (" !#$%&()*+,-./:;<=>?@[\]^_`{|}~").split("")
};

var randomLetter = function() {
  var randomGen = Math.floor(Math.random()*passwordInfo.lower.length);
  var randomEle = passwordInfo.lower[randomGen]; 
  return randomEle;
};

console.log(randomLetter());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

*/