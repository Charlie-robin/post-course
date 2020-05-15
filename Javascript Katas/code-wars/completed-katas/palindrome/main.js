// Create a function that checks if a word is a palindrome

const checkPalindrome = (word) => {
  const reversedWord = word.toLowerCase().split("").reverse().join("");
  return reversedWord === word.toLowerCase();
};

console.log(checkPalindrome("DEvILop"));
console.log(checkPalindrome("raCecar"));
