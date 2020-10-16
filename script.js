// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  let length = prompt("How many characters?");
  let passVal = "";
  let charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()";
  for (var i = 0; i < length; i++) {
    let c = Math.floor(Math.random() * charset.length + 1);
    passVal += charset.charAt(c);
  }
  return passVal;
}

//return passVal;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
