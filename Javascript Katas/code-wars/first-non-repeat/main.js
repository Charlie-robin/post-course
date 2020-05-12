// Write a function named first_non_repeating_letter that takes a string input,
// and returns the first character that is not repeated anywhere in the string.

// firstNonRepeatingLetter('stress'), 't')

const firstNonRepeatingLetter = (string) => {
  const stringObj = {};
  string
    .split("")
    .forEach((element) => (!stringObj[element] ? (stringObj[element] = 1) : stringObj[element]++));
  const valuesArr = Object.values(stringObj);
  const keyArr = Object.keys(stringObj);
  const lowestNum = [...valuesArr].sort((a, b) => a - b)[0];
  const letterIndex = valuesArr.indexOf(lowestNum);
  return !keyArr[letterIndex] ? '' : keyArr[letterIndex];
};

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));
console.log(firstNonRepeatingLetter(""));
