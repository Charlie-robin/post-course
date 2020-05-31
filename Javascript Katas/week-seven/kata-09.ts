// How do you check if two strings are anagrams of each other?

export const compareAnagrams = (stringOne, stringTwo) =>
  stringOne.toLowerCase().split("").sort().join("") === stringTwo.toLowerCase().split("").sort().join("")

console.log(compareAnagrams("dog", "god"));
console.log(compareAnagrams("Listen", "silent"));
