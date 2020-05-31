// How do you print duplicate characters from a string?

export const findDuplicates = (string) =>
  string
    .split("")
    .filter((element, index, array) => index !== array.indexOf(element))
    .filter((element, index, array) => index === array.indexOf(element));

console.log(findDuplicates("abbcbc"));

