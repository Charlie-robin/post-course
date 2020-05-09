// How do you check if two strings are anagrams of each other?

export const compareAnagrams = (stringOne, stringTwo) =>
  stringCleaner(stringOne) === stringCleaner(stringTwo);

const stringCleaner = (string) => string.toLowerCase().split("").sort().join("");

console.log(stringCleaner("Listen"));
