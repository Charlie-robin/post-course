// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
//  For example:

//  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
const stringCleaner = (string) =>
  string
    .toLowerCase("")
    .split("")
    .sort()
    .join("");

const anagrams = (string, array) =>
  array.filter((element) => stringCleaner(element) === stringCleaner(string));

console.log(anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]));
