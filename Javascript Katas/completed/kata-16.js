// How do you check if a string contains only digits?


const filterStrings = (array) => array.filter(element => parseFloat(element));

const stringNumberChecker = (string) => {
    const stringArray = string.split(" ");
    const filteredArray = filterStrings(stringArray);
    return stringArray.length === filteredArray.length ? `Contains only these digits ${filteredArray}.` : `Does not contain only digits.`
}

console.log(stringNumberChecker("2 2 2"))
console.log(stringNumberChecker("hello"))
console.log(stringNumberChecker("555555"))
console.log(stringNumberChecker("2 50 -2 0.2"))

// His solution only works for string with no spaces.
// const stringNumberChecker = (string) => parseInt(string).toString() === string;

// console.log(stringNumberChecker("2"))
// console.log(stringNumberChecker("hello"))
// console.log(stringNumberChecker("555555"))