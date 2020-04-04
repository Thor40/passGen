
var charTypes = {

  'lower': ("abcdefghijklmnopqrstuvwxyz"),
  'upper': ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  "number": ("0123456789"),
  "special": (" !#$%&()*+,-./:;<=>?@[\]^_`{|}~"),
  };
  
  var inputCharSet = "";
  var choices = "";
  function generatePassword() {
      input = parseInt(window.prompt("How many characters would you like your password? Choose between 8 and 128"));
      if (!input > 7 || !input > 129) {
          window.confirm("This needs a valid value!");
          generatePassword();
      }
          else if (input > 7 && input < 129) {
          if (userLower = window.confirm("Will this password contain the lowercase alphabet?")) {
              inputCharSet += charTypes.lower;
          }
          if (userUpper = window.confirm("Will this password contain the uppercase alphabet?")) {
              inputCharSet += charTypes.upper;
          }
          if (userNumber = window.confirm("Will this password contain numbers?")) {
              inputCharSet += charTypes.number;
          }
          if (userSpecial = window.confirm("Will this password contain special characters?")) {
              inputCharSet += charTypes.special;
          }
          var totalInput = inputCharSet;
          console.log(choices);
  
      for (var i = 0; i < input; i++) {
          choices = totalInput[Math.floor(Math.random() * totalInput.length)];
          return choices;
          }
      }
  };
  
  generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

startPrompt();