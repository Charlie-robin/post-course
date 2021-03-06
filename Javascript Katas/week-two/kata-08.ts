// How do you print duplicate characters from a string?

const findDuplicateChar = (array) =>  array.sort((a,b)=> a-b).filter((item, index) => array.indexOf(item) !== index);
const removeDuplicateChar = (array) => array.filter((item, index) => array.indexOf(item) === index);
const removeSpaces = (array) => array.filter(item => item !== ' ');

export const findDuplicates = (string) => {
    const duplicateArray = findDuplicateChar(string.split(""));
    return removeDuplicateChar(duplicateArray);
};

// console.log(printDuplicateCharacters("hello high nice one baby"), "l,h,h,i,e,o,n,e,b");
// console.log(printDuplicateCharacters("hello"), "l");
// console.log(printDuplicateCharacters("nice guy"), "empty");

// const printDuplicateCharacters = (string) => {
//    const stringArray = string.split("");
//    const duplicateArray = findDuplicates(stringArray);
//    return removeSpaces(duplicateArray);
// }