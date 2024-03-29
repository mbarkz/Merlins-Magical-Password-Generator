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

var passLegnth = prompt("How many characters would you like you password to be?");
console.log(passLegnth);

// Function to prompt user for password options
function getPasswordOptions() {

    if (passLegnth < 8 || passLegnth > 128) {
      alert("Password must be between 8 and 128 characters, please refresh to try again.");    
    } else {
      var capLetter = confirm("Do you want caps in your password?");
    } 
      var symbols = confirm("Do you want special symbols in your password?");
      var passNumbers = confirm("Do you want numbers in your password?");
      console.log("Your password will be "+ passLegnth + " characters and will feature...\nCaptial letters: " + capLetter + "\nSymbols: " + symbols + "\nNumbers: " + passNumbers);
    
    if (capLetter == true && symbols == true && passNumbers == true) {
      var userpassword = lowerCasedCharacters.concat(upperCasedCharacters, specialCharacters, numericCharacters)

    } else if (capLetter == false && symbols == true && passNumbers == true) {
      var userpassword = lowerCasedCharacters.concat(specialCharacters, numericCharacters)

    } else if (capLetter == false && symbols == false && passNumbers == true) {
      var userpassword = lowerCasedCharacters.concat(numericCharacters)

    } else if (capLetter == true && symbols == false && passNumbers == true) {
      var userpassword = lowerCasedCharacters.concat(upperCasedCharacters)

    } else if (capLetter == true && symbols == false && passNumbers == false) {
      var userpassword = lowerCasedCharacters.concat(upperCasedCharacters) 

    } else if (capLetter == false && symbols == true && passNumbers == false) {
      var userpassword = lowerCasedCharacters.concat(specialCharacters) 

    } else {
      var userpassword = lowerCasedCharacters
    } 

    return(userpassword)
}

var userPassArray = getPasswordOptions();

console.log(userPassArray);
// done - this returns an array of characters from which the randomiser can select from.

// Function for getting a random element from an array
function getRandom(arr) {
  
}

// this loops for the legnth of numbers which the user selected for thier password
// the finalPass variable stores a random choice from the userPassArray which is earlier concatanated from each selection in the 
// the .push then adds another 

var finalPass = 0

for (let i = 0; i < passLegnth; i++) {
  let finalPass = userPassArray[Math.floor(Math.random() * userPassArray.length)];
  userPassArray.push(finalPass[Math.floor(Math.random() * finalPass.length)]);
  console.log(finalPass);
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

  passwordText.value = finalPass;
}

// Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);