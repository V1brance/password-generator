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
  var newPassword = "";
  var charTypes = ["lowercase", "uppercase", "numeric", "special"];
  var selectedTypes = [];
  var trues = 0;
  var passwordLength = 0;
  var uppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lowercase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "e",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var special = [
    " ",
    "!",
    '"',
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "}",
    "|",
    "~",
  ];

  // Utilize a while loop to prevent input outside the parameters of 8-128
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt(
      "Please enter a password length between 8 and 128 characters"
    );
  }

  // An empty aray is populated with the selections made by the user during this for loop, if a user hits y on a character
  // type then a string of that character type is added to the array
  for (i = 0; i < charTypes.length; i++) {
    var charSelect = prompt(
      "Would you like " +
        charTypes[i] +
        " characters in your password? Enter y/n:"
    );
    if (charSelect == "y") {
      selectedTypes.push(charTypes[i]);
      trues++;
    }
  }

  //A var called trues validates that at least one option has been selected for the password
  if (trues == 0) {
    return "You did not select any text options, please try again and answer yes to at least one character option";
  }

  console.log(selectedTypes);

  //Utilize a while loop to add random characters from random arrays selected from the user input and add these new characters
  //to the new password
  while (newPassword.length < passwordLength) {
    var nextChar = "";
    var nextCharType =
      selectedTypes[Math.floor(Math.random() * selectedTypes.length)];

    console.log(nextCharType);

    if (nextCharType == "lowercase") {
      nextChar = lowercase[Math.floor(Math.random() * lowercase.length)];
    } else if (nextCharType == "uppercase") {
      nextChar = uppercase[Math.floor(Math.random() * uppercase.length)];
    } else if (nextCharType == "numeric") {
      nextChar = numeric[Math.floor(Math.random() * numeric.length)];
    } else if (nextCharType == "special") {
      nextChar = special[Math.floor(Math.random() * special.length)];
    }

    newPassword = newPassword.concat(nextChar);
  }

  return newPassword;
}
