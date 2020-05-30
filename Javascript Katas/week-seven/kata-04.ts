// How do you remove duplicates from an array in place?

export const removeDuplicates = (numArray) => [...new Set(numArray)];
console.log(removeDuplicates([1, 2, 2, 3, 3, 5, 6, 7, 7]));
