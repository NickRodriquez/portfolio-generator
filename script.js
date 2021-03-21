// Assignment code here
function generatePassword() {
  var passwordLength = +prompt("choose a length between 8 and 128")
  if (passwordLength < 8 || passwordLength > 128)  {
    alert("passwordlength is to not correct");
   return;
  }
  var hasNumbers = confirm("do you want numbers")
  var hasSpecials = confirm("Do you want special characters")
  var hasLowerCase = confirm("do you want lower case")
  var hasUpperCase = confirm("do you want upper case")
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()"
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var allChars = "";
  if (hasNumbers === true){
    allChars = allChars + numberChars
  }
  if (hasSpecials) {
    allChars = allChars + specialChars
  }
  if (hasLowerCase){
    allChars = allChars + lowerChars
}
  if (hasUpperCase) {
    allChars = allChars + upperChars
}
  var randPasswordArray = [...Array(passwordLength)];
  randPasswordArray = randPasswordArray.fill(allChars);
  if (hasNumbers) {
    randPasswordArray[0] = numberChars
  }
  if (hasSpecials) {
    randPasswordArray[3] = specialChars
  }
  if (hasUpperCase) {
    randPasswordArray[1] = upperChars
  }
  if (hasLowerCase) {
  randPasswordArray[2] = lowerChars
  }
  console.log(randPasswordArray);
  return shuffleArray(randPasswordArray.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

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





