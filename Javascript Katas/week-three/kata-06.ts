export const findPairsWhichSum = (array, matchNumber) => {
  const arrayCopy = [...array];
  const pairMatch = [];

  for (let index = 0; index < array.length; index++) {
    const subMatchNumber = matchNumber / 2 !== index ? matchNumber - arrayCopy[index] : null;
    if (
      arrayCopy.indexOf(subMatchNumber) !== -1 &&
      pairMatch.indexOf(subMatchNumber) === -1 &&
      pairMatch.indexOf(arrayCopy[index]) === -1
    ) {
      pairMatch.unshift(arrayCopy[index]);
    }
  }
  return pairMatch.sort((a, b) => b - a).map((element) => [ matchNumber - element, element ]);
};

// console.log(findPairsWhichSum([1, 2, 2, 3, 3, 5, 6, 7, 7], 4));

// console.log(findPairsWhichSum([5, 2, 2, 8, 4, 5, 6, 6, 7, 7], 12));

console.log(findPairsWhichSum([5, 2, 2, 4, 8, 5, 6, 7, 7], 12));

// if (
//   arrayCopy[index] * 2 === matchNumber &&
//   arrayCopy.indexOf(index) !== arrayCopy.lastIndexOf(index) &&
//   pairMatch.indexOf(arrayCopy[index]) === -1
// ) {
//   pairMatch.unshift(arrayCopy[index]);
// } else
