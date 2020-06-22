// 04. How do you remove duplicates from an array in place?

export const removeDuplicates = (numArray) => [...new Set(numArray)];
