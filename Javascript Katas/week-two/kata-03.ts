// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?
const filterDuplicates = (array) =>
  array.filter((element) => array.indexOf(element) !== array.lastIndexOf(element));

const removeDuplicates = (array) => array.filter((item, index) => array.indexOf(item) === index);

export const findMultipleDuplicates = (array) => {
  const filteredArray = filterDuplicates(array);
  const removeDoubles = removeDuplicates(filteredArray);
  const result = removeDoubles.sort((a, b) => a - b);
  return result.length !== 0 ? result : [];
};

// export const findMultipleDuplicates = (array) => {
//     const sortedArray = array.sort((a, b) => a - b);
//     const result = [];
//     for (let index = 0; index < sortedArray.length; index++) {
//       sortedArray[index] === sortedArray[index - 1] ||
//       sortedArray[index] === sortedArray[index + 1]
//         ? result.push(sortedArray[index])
//         : null;
//     }
//     return result;
//   };
