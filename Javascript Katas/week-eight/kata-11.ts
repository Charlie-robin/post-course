const reverseString = (string) => string.split("").reverse().join("");

const cleanString = (string) =>
  string.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

export const palindrome = (string) =>
  cleanString(string) === reverseString(cleanString(string));
