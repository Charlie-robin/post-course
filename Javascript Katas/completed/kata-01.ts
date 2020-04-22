//01. How do you find the missing numbers in a given integer array?

export const missingNumberInSequence = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  const lastNumber = sortedArray[sortedArray.length - 1];
  let match = [];
  for (
    let numIndex = sortedArray[0];
    numIndex < lastNumber;
    numIndex++
  ) {
    sortedArray.indexOf(numIndex) === -1 ? match.push(numIndex) : null;
  }
  return match;
};




