// How do you find the largest and smallest number in an unsorted integer array?

export const findLargestAndSmallest = (array) => {
  return { largest: largestNum(array), smallest: smallestNum(array) };
};

const largestNum = (array) => [...array].sort((a, b) => b - a)[0];
const smallestNum = (array) => [...array].sort((a, b) => a - b)[0];
