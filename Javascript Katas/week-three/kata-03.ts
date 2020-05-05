// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?
export const findMultipleDuplicates = (array) =>
  [...array].filter((element, index, array) => array.indexOf(element) !== index);


