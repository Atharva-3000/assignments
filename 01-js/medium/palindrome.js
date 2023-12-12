/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Convert the string to lowercase
  str = str.toLowerCase();

  // Remove non-alphanumeric characters
  const cleanStr = str.replace(/[^a-z0-9]/g, '');

  // Compare the cleaned string with its reversed version
  const revStr = cleanStr.split('').reverse().join('');

  return cleanStr === revStr;
}


module.exports = isPalindrome;
