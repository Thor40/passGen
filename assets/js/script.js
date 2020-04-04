
var charTypes = {
  lower: ("abcdefghijklmnopqrstuvwxyz"),
  upper: ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
  number: ("0123456789"),
  special: (" !#$%&()*+,-./:;<=>?@[\]^_`{|}~"),
  };
  
  var inputCharSet = "";
  var choices = "";
  function generatePassword() {
      input = parseInt(window.prompt("How many characters would you like your password? Choose between 8 and 128"));
      if (!input > 7 || !input > 129) {
          window.confirm("This needs a valid value!");
      }
          else if (input > 7 && input < 129) {
            console.log(input);
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
          console.log(inputCharSet);

          var choices = [];
          
    
      for (i = 0; i < input; i++) {
        choices.push(inputCharSet[Math.floor((Math.random() * inputCharSet.length) + 0)]);
        var results = choices.join();
          }
          return(results);
      }
  };
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
