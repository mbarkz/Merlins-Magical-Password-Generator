// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//lowercase characters is used as default password

// Function to prompt user for password options
function getPasswordOptions() {
    var passLegnth = prompt("How many characters would you like you password to be?");
    console.log(passLegnth);
    if (passLegnth < 8 || passLegnth > 128) {
      alert("Password must be between 8 and 128 characters, please refresh to try again.");    
    } else {
      var capLetter = confirm("Do you want caps in your password?");
    } 
      var symbols = confirm("Do you want special symbols in your password?");
      var passNumbers = confirm("Do you want numbers in your password?");
      console.log("Your password will be "+ passLegnth + " characters and will feature...\nCaptial letters: " + capLetter + "\nSymbols: " + symbols + "\nNumbers: " + passNumbers);
    
    // if (capLetter == true) {
    //   var userpassword = lowerCasedCharacters.concat(upperCasedCharacters);
    // } 

    if (capLetter == true && symbols == true && passNumbers == true) {
      var userpassword = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters, numericCharacters)
    }

    console.log(userpassword);
    
}

getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

getRandom();

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);