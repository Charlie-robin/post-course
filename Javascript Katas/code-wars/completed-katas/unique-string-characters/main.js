// In this Kata, you will be given two strings a and b and your task will be to
//  return the characters that are not common in the two strings.

// solve("xyab","xzca") = "ybzc"
// --The first string has 'yb' which is not in the second string.
// --The second string has 'zc' which is not in the first string.

const solve = (stringOne, stringTwo) =>
  matchRemover(stringOne,stringTwo) + matchRemover(stringTwo,stringOne);

const matchRemover = (string, match) =>
  string
    .toLowerCase()
    .split("")
    .filter((element) => !match.includes(element))
    .join("");

console.log(solve("hem", "hmf"));
