/**
 * Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor

Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */
function swapcase(oldString) {
  let newString = [];
  for (let i = 0; i < oldString.length; i++) {
    if (oldString[i].toUpperCase() === oldString[i]) {
      newString += oldString[i].toLowerCase();
    } else {
      newString += oldString[i].toUpperCase();
    }
  }
  return newString;
}
console.log(swapcase("SubhaSree"));
