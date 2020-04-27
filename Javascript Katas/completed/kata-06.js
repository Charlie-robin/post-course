// How do you find all pairs of an integer array whose sum is equal to a given number?

const findPairsWhichSum = (array, matchNumber) => {
  const pairMatch = [];
  const arrayCopy = [...array];
  arrayCopy.sort((a, b) => a - b);
  for (let index = 0; index < array.length; index++) {
    const numToMatch = matchNumber - arrayCopy[index];
    if (arrayCopy.indexOf(numToMatch) !== -1) {
      const matchNumIndex = arrayCopy.indexOf(numToMatch);
      pairMatch.unshift([numToMatch, arrayCopy[index]]);
      arrayCopy[index] = null;
      arrayCopy[matchNumIndex] = null;
      console.log(arrayCopy, "end", pairMatch)
    }
  }
  return pairMatch;
};

// console.log(findPairsWhichSum([1, 2, 2, 3, 3, 5, 6, 7, 7], 4));
console.log(findPairsWhichSum([5, 2, 2, 8, 4, 5, 6, 6, 7, 7], 12));
// console.log(findPairsWhichSum([5, 2, 2, 4, 8, 5, 6, 7, 7], 12));



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
