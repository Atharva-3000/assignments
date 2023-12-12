/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let x = str1.split("").sort().join("");
  let y = str2.split("").sort().join("");
  return len1 == len2 && x == y ? true : false;
}

module.exports = isAnagram;
