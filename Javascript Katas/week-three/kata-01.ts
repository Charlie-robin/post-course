//01. How do you find the missing numbers in a given integer array?

export const missingNumberInSequence = (array) => {
  const arrCopy = [...array].sort((a, b) => a - b);
  const arrLength = arrCopy.length - 1;
  const result = [];
  for (let index = arrCopy[0]; index < arrCopy[arrLength]; index++) {
    arrCopy.indexOf(index) === -1 ? result.push(index) : null;
  }
  return result;
};

console.log(missingNumberInSequence([1, 2, 4, 6]));
