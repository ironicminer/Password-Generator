// Assignment Code
var generateBtn = document.querySelector("#generate");
// Generate password function
function generatePassword() {
  let passVal = [];
  let upperCase = confirm("Do you want upper case?");
  let lowerCase = confirm("Do you want lower case?");
  let numbers = confirm("Do you want numbers?");
  let specChars = confirm("Do you want special characters?");
  let passLength = prompt("How many characters would you like?");

  let totlength = passLength * 1;
  let lowerChar = [
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
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let upperChar = [
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
  let nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  let numGrabber = [];
  // Checking the length of password input

  while (numGrabber.length < totlength) {
    if (lowerCase === true && numGrabber.length < totlength) {
      let low = random(lowerChar);
      numGrabber.push(low);
    }

    if (upperCase === true && numGrabber.length < totlength) {
      let up = random(upperChar);
      numGrabber.push(up);
    }

    if (specChars === true && numGrabber.length < totlength) {
      let spec = random(special);
      numGrabber.push(spec);
    }

    if (numbers === true && numGrabber.length < totlength) {
      let num = random(nums);
      numGrabber.push(num);
    }
  }

  function random(arr) {
    let i = arr[Math.floor(Math.random() * arr.length)];
    return i;
  }
  return numGrabber.join("");
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
