// How do you find the duplicate number on a given integer array?

export const findDuplicate = (array) =>
  [...array].filter(
    (element, index, array) => array.indexOf(element) !== array.lastIndexOf(element)
  )[0];

console.log(findDuplicate([1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]));
