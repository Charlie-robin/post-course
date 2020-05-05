// 04. How do you remove duplicates from an array in place?

export const removeDuplicates = (array) => array.filter((item, index) => array.indexOf(item) === index);



