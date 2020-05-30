// 01. How do you find the missing numbers in a given integer array?
export const missingNumberInSequence = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  const lastNumber = sortedArray[sortedArray.length - 1];
  let match = [];
  for (let numIndex = sortedArray[0]; numIndex < lastNumber; numIndex++) {
    !sortedArray.includes(numIndex) ? match.push(numIndex) : null;
  }
  return match;
};

console.log(missingNumberInSequence([1, 2, 4, 5, 6, 7, 8, 9, 10]));

console.log(missingNumberInSequence([1, 2, 3, 4, 5, 6, 7, 9, 10]));

console.log(missingNumberInSequence([256, 255, 253]));

console.log(missingNumberInSequence([-1, -2, -4]));
