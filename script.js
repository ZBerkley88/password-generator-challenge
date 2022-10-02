// Arrays of various characters to be include in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Assignment Code. This turns the id="generate" from index.html into a variable.
var generateBtn = document.querySelector("#generate");

// Function for getting a random element from an array. getRandom uses an array as an argument and chooses a random element from that array.
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function getPasswordOptions() {
  // Variable to store length of password from user input
  // parseInt parses a value as a string and returns the first integer 
  // I do not understand "radix"
  var length = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );

  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if (Number.isNaN(length)) {
    alert('Password length must be provided as a number');
    return null;
  }

  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return null;
  }

  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  if (length > 128) {
    alert('Password length must be fewer than 128 characters');
    return null;
  }

  // Variables to store boolean value regarding the inclusion of various characters
  var hasSpecialCharacters = confirm(
    'Click OK to confirm including special characters.'
  );

  var hasNumericCharacters = confirm(
    'Click OK to confirm including numeric characters.'
  );

  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lower-case characters.'
  );

  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including upper-case characters.'
  );

  // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
  if (hasSpecialCharacters === false && hasNumericCharacters === false && hasLowerCasedCharacters === false && hasUpperCasedCharacters === false) {
    alert('You must choose at least one type of character to be included in your password.');
    return null;
  };
  
  // Object to store user input
  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters,
  };
  return passwordOptions;
}

function generatePassword() {
  var options = getPasswordOptions();

  // Creating arrays for characters used in the password 
  var passCharacters = [];

  // Concatenating lists based on user input
  if (options.hasSpecialCharacters === true) {
    passCharacters = passCharacters.concat(specialCharacters);
  } 
  if (options.hasNumericCharacters === true) {
    passCharacters = passCharacters.concat(numericCharacters);
  }
  if (options.hasLowerCasedCharacters === true) {
    passCharacters = passCharacters.concat(lowerCasedCharacters);
  }
  if (options.hasUpperCasedCharacters === true) {
    passCharacters = passCharacters.concat(upperCasedCharacters);
  }

  var passwordString = ""

  for (let i = 0; i < options.length; i++) {
    var randElement = getRandom(passCharacters);
    passwordString += randElement;
  }
  return passwordString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);