// Assignment code here
var passwordInfo = {
  lower: ("abcdefghijklmnopqrstuvwxyz").split(""),
  upper: ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split(""),
  number: ("0123456789").split(""),
  sChar: (" !#$%&()*+,-./:;<=>?@[\]^_`{|}~").split("")
};

function startPrompt() {
  // Ask user how many Char in Password, between 8 - 128
  var selectPrompt = window.prompt("How many characters would you like your password? Choose between 8 and 128");
  selectPrompt = parseInt(selectPrompt);
  while (selectPrompt > 7 && selectPrompt < 129){
    console.log(randomLetterL(), randomLetterU(), randomNum(), randomSChar());
    break;
  } if (!selectPrompt > 7 && selectPrompt < 129){
    window.confirm("This needs a valid value!");
    startPrompt();
  }
};

var randomLetterL = function() {
  var randomGen = Math.floor(Math.random()*passwordInfo.lower.length);
  var randomEle = passwordInfo.lower[randomGen]; 
  return randomEle;
};
var randomLetterU = function() {
  var randomGen = Math.floor(Math.random()*passwordInfo.upper.length);
  var randomEle = passwordInfo.upper[randomGen]; 
  return randomEle;
};
var randomNum = function() {
  var randomGen = Math.floor(Math.random()*passwordInfo.number.length);
  var randomEle = passwordInfo.number[randomGen]; 
  return randomEle;
};
var randomSChar = function() {
  var randomGen = Math.floor(Math.random()*passwordInfo.sChar.length);
  var randomEle = passwordInfo.sChar[randomGen]; 
  return randomEle;
};



/*
function specialChar() {
  chooseNum = window.confirm("Will this contain numbers?");
  chooseL = window.confirm("Will this contain Lowercase Letters?");
  chooseU = window.confirm("Will this contain Uppercase Letters?");
  chooseS = window.confirm("Will this contain Special Characters?");
  if(!chooseNum){

  }
};

passPrompt();



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
*/



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

startPrompt();