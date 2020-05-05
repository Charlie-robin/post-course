// How do you check if a string contains only digits?


const filterStrings = (array) => array.filter(element => parseFloat(element));

export const onlyDigits = (...string) => string.length === filterStrings(string).length;





// export const onlyDigits = (string) => {
//     const stringArray = string.split(" ");
//     const filteredArray = filterStrings(stringArray);
//     return stringArray.length === filteredArray.length;
// }

// console.log(stringNumberChecker("2 2 2"))
// console.log(stringNumberChecker("hello"))
// console.log(stringNumberChecker("555555"))
// console.log(stringNumberChecker("2 50 -2 0.2"))

// His solution only works for string with no spaces.
// const stringNumberChecker = (string) => parseInt(string).toString() === string;

// console.log(stringNumberChecker("2"))
// console.log(stringNumberChecker("hello"))
// console.log(stringNumberChecker("555555"))