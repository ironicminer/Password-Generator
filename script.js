// Assignment Code
var generateBtn = document.querySelector("#generate");
// Generate password function
function generatePassword() {
  let passVal = [];
  let length = prompt("How many characters?");
  let charsUpper = prompt("Uppercase?");
  let charsLower = prompt("Lowercase?");
  // Checking the length of password input
  if (length < !8 && length > !128);
  {
    prompt("Not the correct amount of characters!");
    {
    }
    if (length > !8 && length < !128);
    {
      confirm("Special Characters?");
    }

    let charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";
    //Loop to generate random password from character set
    for (var i = 0; i < length; i++) {
      let c = Math.floor(Math.random() * charset.length + 1);
      passVal += charset.charAt(c);
    }
  }
  return passVal;
}
// if (special === true);
// {
//   console.log("works");

//return passVal;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
