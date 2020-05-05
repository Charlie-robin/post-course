// 02. How do you find the duplicate number on a given integer array?

const filterDuplicates = (array) =>
  array.filter((element) => array.indexOf(element) !== array.lastIndexOf(element));

const removeDuplicates = (array) => array.filter((item, index) => array.indexOf(item) === index);

export const findDuplicate = (array) => {
  const filteredArray = filterDuplicates(array);
  const result = removeDuplicates(filteredArray);
  return result.length !== 0 ? result[0] : undefined;
};

// const duplicateNumber = (array) =>
//   array.filter((number) => array.join("").split(number).length > 2);

// console.log(
//   duplicateNumber([3, 1, 2, 3, 4, 5, 6, 6, 9, 66, 66]),
//   "[ 3, 3, 6, 6, 66, 66 ]"
// );

// console.log(duplicateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "empty");
// console.log(duplicateNumber([1, 1, 1, 1, 1, 1, 1]), "[1,1,1,1,1,1,1]");

// export const findDuplicate = (array) => {
//   const sortedArray = array.sort((a, b) => a - b);
//   const result = [];
//   for (let index = 0; index < sortedArray.length; index++) {
//     sortedArray[index] === sortedArray[index - 1] ||
//     sortedArray[index] === sortedArray[index + 1]
//       ? result.push(sortedArray[index])
//       : null;
//   }
//   return result;
// };
