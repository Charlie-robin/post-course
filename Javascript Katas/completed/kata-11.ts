// How do you check if a given string is a palindrome?

const reverseString = (string) =>
  string.toLowerCase().split("").reverse().join("");

const checkPalindrome = (string) =>
  string.toLowerCase() === reverseString(string)
    ? `${string} is a palindrome`
    : `${string} is not a palindrome`;


console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("diging"));
console.log(checkPalindrome("abba"));
