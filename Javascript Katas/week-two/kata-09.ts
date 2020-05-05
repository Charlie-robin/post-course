// How do you check if two strings are anagrams of each other?

const sortString = (string) => string.toLowerCase().split("").sort().join("");

export const compareAnagrams = (stringOne, stringTwo) => sortString(stringOne) === sortString(stringTwo);
