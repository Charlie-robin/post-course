// Write a function named first_non_repeating_letter that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// firstNonRepeatingLetter('stress'), 't')

const firstNonRepeatingLetter = (string) => {
  const index = string
    .toLowerCase()
    .split("")
    .findIndex((element, index, array) => array.indexOf(element) === array.lastIndexOf(element));

  return index === -1 ? "dd" : string[index];
};

console.log(firstNonRepeatingLetter("ssttrreess"));
console.log(firstNonRepeatingLetter("moonmen"));
console.log(firstNonRepeatingLetter(""));

// const firstNonRepeatingLetter = (string) => {
//   const stringObj = {};
//   string
//     .split("")
//     .forEach((element) => (!stringObj[element] ? (stringObj[element] = 1) : stringObj[element]++));
//   const valuesArr = Object.values(stringObj);
//   const keyArr = Object.keys(stringObj);
//   const lowestNum = [...new Set(valuesArr)].sort((a, b) => a - b)[0];
//   console.log(valuesArr, lowestNum, "log");
//   const letterIndex = valuesArr.indexOf(lowestNum);
//   return !keyArr[letterIndex] ? "" : keyArr[letterIndex];
// };
