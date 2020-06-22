// 02. How do you find the duplicate number on a given integer array?

export const findDuplicate = (numArray) =>
  [
    ...new Set(
      numArray.filter(
        (element, index, array) => array.indexOf(element) !== index
      )
    ),
  ][0];

// console.log(findDuplicate([6, 1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 10]));
