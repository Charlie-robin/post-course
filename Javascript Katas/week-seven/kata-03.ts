// How do you find duplicate numbers in an array if it contains multiple duplicates?

export const findMultipleDuplicates = (numArray) =>
  numArray.filter((element, index, array) => index !== array.indexOf(element));

