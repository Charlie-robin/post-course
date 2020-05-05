// 04. How do you remove duplicates from an array in place?

export const removeDuplicates = (array) => [... new Set(array)];

console.log(removeDuplicates([1,2,2,3]))