// How do you check if a given string is a palindrome?

const reverseString = (string) =>
  string.toLowerCase().split("").reverse().join("");

const cleanString = (string) => string.toLowerCase().replace(/[^A-Za-z0-9]/g, "")


export const palindrome = (string) => cleanString(string) === reverseString(cleanString(string));