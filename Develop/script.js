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

function generatePassword() {
  // Declare some variables to start, the order is important for the rest of the function
  var charTypes = ["lowercase", "uppercase", "numeric", "special"];
  var passwordLength = 0;

  // Utilize a while loop to prevent input outside the parameters of 8-128
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Please enter a password length between 8 and 128 characters"
    );
  }

  // A for loop iterates through the charTypes array and changes the values to true or false depending on user input of desired char Types
  for (i = 0; i < charTypes.length; i++) {
    var charSelect = prompt(
      "Would you like " +
        charTypes[i] +
        " characters in your password? Enter y/n:"
    );
    if (charSelect == "y") {
      charTypes[i] = true;
    } else {
      charTypes[i] = false;
    }
  }
}
