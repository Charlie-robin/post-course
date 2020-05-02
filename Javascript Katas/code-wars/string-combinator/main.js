// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

const longest = (stringOne, stringTwo) =>
  [...stringOne, ...stringTwo]
    .sort()
    .filter((element, index, array) => array.indexOf(element) === index)
    .join("");

console.log(longest("hello", "hellfffoz"));
