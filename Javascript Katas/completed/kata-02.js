// 02. How do you find the duplicate number on a given integer array?

const duplicateNumber = (array) =>
  array.filter((number) => array.join("").split(number).length > 2);

console.log(
  duplicateNumber([3, 1, 2, 3, 4, 5, 6, 6, 9, 66, 66]),
  "[ 3, 3, 6, 6, 66, 66 ]"
);
console.log(duplicateNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "empty");
console.log(duplicateNumber([1, 1, 1, 1, 1, 1, 1]), "[1,1,1,1,1,1,1]");

const findDuplicate = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  const result = [];
  for (let index = 0; index < sortedArray.length; index++) {
    sortedArray[index] === sortedArray[index - 1] ||
    sortedArray[index] === sortedArray[index + 1]
      ? result.push(sortedArray[index])
      : null;
  }
  return result;
};

console.log(
  findDuplicate([3, 1, 2, 3, 4, 5, 6, 6, 9, 66, 66]),
  "[ 3, 3, 6, 6, 66, 66 ]"
);
console.log(findDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "empty");
console.log(findDuplicate([1, 1, 1, 1, 1, 1, 1]), "[1,1,1,1,1,1,1]");
