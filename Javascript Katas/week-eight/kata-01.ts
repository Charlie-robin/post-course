// 01. How do you find the missing numbers in a given integer array?

export const missingNumberInSequence = (numArray) => {
  const sortedNumArray = [...numArray].sort((a, b) => a - b);
  const finalNumber = [...sortedNumArray].pop();
  const match = [];
  for (let counter = sortedNumArray[0]; counter < finalNumber; counter++) {
    sortedNumArray.includes(counter) ? null : match.push(counter);
  }
  return match;
};

// console.log(missingNumberInSequence([1, 2, 3, 5, 6, 7, 8, 9, 10]));
