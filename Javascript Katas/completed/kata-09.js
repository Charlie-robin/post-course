// How do you check if two strings are anagrams of each other?

const sortString = (string) => string.toLowerCase().split("").sort().join("");

const anagramChecker = (stringOne, stringTwo) => sortString(stringOne) === sortString(stringTwo) ? "anagram" : "invalid";

console.log(anagramChecker("God anna", "dOg naan"), "anagram");
console.log(anagramChecker("monkey", "space"), "invalid");
console.log(anagramChecker("god", "dog"), "anagram");