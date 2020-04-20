//01. How do you find the missing numbers in a given integer array?

const missingIntegerFinder = (array) => {
  const sortedArray = array.sort((a, b) => a - b);
  const lastNumber = sortedArray[sortedArray.length - 1];
  let match = [];
  for (
    let numIndex = sortedArray[0];
    numIndex < lastNumber;
    numIndex++
  ) {
    sortedArray.indexOf(numIndex) === -1 ? match.push(numIndex) : null;
  }
  return match;
};

console.log(missingIntegerFinder([1, 2, 5, 4, 6]), "3");
console.log(missingIntegerFinder([8, 7, 5, 4, 6]), "empty");
console.log(missingIntegerFinder([1, 2, 3, 4, 5]), "empty");
console.log(missingIntegerFinder([9, 12, 13, 14, 18]), "10,11,15,16,17");
console.log(missingIntegerFinder([1, 2, 10, 4, 6]), "3,5,7,8,9");
console.log(missingIntegerFinder([346, 345, 343]),"344");


