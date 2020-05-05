// How do you find all pairs of an integer array whose sum is equal to a given number?

// const findPairsWhichSum = (numberArray, matchNum) => {
//   const result = [... new Set(numberArray)]
//          .filter((currentNumber) => {
//            if (matchNum / 2 > currentNumber) {
//              return false;
//            }
//            if (matchNum / 2 === currentNumber) {
//              return (numberArray.filter((element) => currentNumber === element).length > 1);
//            }
//            return ((matchNum - currentNumber) in numberArray);
//          })
//          .map((element) => [element, matchNum - element]);

//          return result;
//  }

const findPairsWhichSum = (array, matchNumber) => {
  const arrayCopy = [...array]; // Making copy of array

  const pairMatch = []; // Empty array to put matches into

  for (let index = 0; index < array.length; index++) {
    // For loop to go through each number in array

    const subMatchNumber = matchNumber / 2 !== index ? matchNumber - arrayCopy[index] : null;
    // ^^ match number minus the current number from array. this gives us the number we need.
    // the turnary is to check it against the index if there are duplicates it will add them to it.

    if (
      arrayCopy.indexOf(subMatchNumber) !== -1 && // checking if the submathcnumber is in array => indexOf will give -1 if it is NOT in array
      pairMatch.indexOf(subMatchNumber) === -1 && // checking if it is in the pair match array to avoid duplicates
      pairMatch.indexOf(arrayCopy[index]) === -1 // checking if it is in the pair match array to avoid duplicates
    ) {
      pairMatch.unshift(arrayCopy[index]); // puts the element into array at the start
    }
  }
  return pairMatch.map((element) => [matchNumber - element, element]); // maps over the array and puts it into his format [ [ 2, 2 ], [ 3, 1 ] ]
};

console.log(findPairsWhichSum([1, 2, 2, 3, 3, 5, 6, 7, 7], 4));

console.log(findPairsWhichSum([5, 2, 2, 8, 4, 5, 6, 6, 7, 7], 12));

console.log(findPairsWhichSum([5, 2, 2, 4, 8, 5, 6, 7, 7], 12));

// console.log Javascript Katas/solutions/q06-solution.ts:17
// [ [ 2, 2 ], [ 3, 1 ] ]

// console.log Javascript Katas/solutions/q06-solution.ts:17
// [ [ 8, 4 ], [ 7, 5 ] ]

// console.log Javascript Katas/solutions/q06-solution.ts:17
// [ [ 8, 4 ], [ 6, 6 ], [ 7, 5 ] ]

// export const findPairsWhichSum = (array, matchNumber) => {
//   const result = array.filter(
//     (element, index) =>
//       element + array[index - 1] === matchNumber || element + array[index + 1] === matchNumber
//   );
//   console.log(result);
//   return result;
// };

//  export const findPairsWhichSum = (array, matchNumber) => {
//   const match = [];
//   for (let index = 0; index < array.length; index++) {
//     array.forEach((element, arrIndex) => element + array[arrIndex] === matchNumber ? match.push(element): null);
//   }
//   console.log(match);
//   return match;
// };
