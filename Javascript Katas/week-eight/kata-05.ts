// How do you find the largest and smallest number in an unsorted integer array?

export const findLargestAndSmallest = (numArray) => ({
  smallest: numArray.sort((a, b) => a - b)[0],
  largest: numArray.sort((a, b) => b - a)[0],
});

// console.log(findLargestAndSmallest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
