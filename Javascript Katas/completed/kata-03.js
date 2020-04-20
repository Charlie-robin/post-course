// 03. How do you find duplicate numbers in an array if it contains multiple duplicates?

const findDuplicateNumbers = (array) => {
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
    findDuplicateNumbers([3, 1, 2, 3, 4, 5, 6, 6, 9, 66, 66]),
    "[ 3, 3, 6, 6, 66, 66 ]"
  );
  console.log(findDuplicateNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), "empty");
  console.log(findDuplicateNumbers([1, 1, 1, 1, 1, 1, 1]), "[1,1,1,1,1,1,1]");