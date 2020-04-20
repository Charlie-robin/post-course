// How do you print the first non-repeated character from a string?

const stringToArray = (string) => string.toLowerCase().split("");

const printFirstNonRepeatedCharacter = (string) => {
    const stringArray = stringToArray(string);
    const nonRepeatedArray = stringArray.filter((element => stringArray.indexOf(element) === stringArray.lastIndexOf(element)));
    return nonRepeatedArray[0];
}

// const printFirstNonRepeatedCharacter = (string) => {
//   const stringArray = stringToArray(string);
//   const filterNonRepeatedChar = stringArray.filter((element, index) => element !== stringArray[index-1] && element !== stringArray[index+1]);
//   return filterNonRepeatedChar[0];
// };




console.log(printFirstNonRepeatedCharacter("hheello"), "o")
console.log(printFirstNonRepeatedCharacter("disco"), "d")
console.log(printFirstNonRepeatedCharacter("functionfnction"), "u")
console.log(printFirstNonRepeatedCharacter("helo"), "h")