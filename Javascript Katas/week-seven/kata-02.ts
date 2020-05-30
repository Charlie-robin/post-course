// 02. How do you find the duplicate number on a given integer array?

export const findDuplicate = (numArray) =>
  numArray.filter((element, index, array) => index !== array.indexOf(element))[0];

console.log(findDuplicate([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]));
