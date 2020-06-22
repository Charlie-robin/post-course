// How do you find all pairs of an integer array whose sum is equal to a given number?

export const findPairsWhichSum = (array, matchNumber) => {
  const arrayCopy = [...array];
  const pairMatch = [];

  for (let index = 0; index < array.length; index++) {
    const subMatchNumber =
      matchNumber / 2 !== arrayCopy[index]
        ? matchNumber - arrayCopy[index]
        : null;

    if (
      arrayCopy.includes(subMatchNumber) &&
      !pairMatch.includes(subMatchNumber) &&
      !pairMatch.includes(arrayCopy[index])
    ) {
      pairMatch.push(arrayCopy[index]);
    }

    if (!subMatchNumber) {
      const dupCheck = matchNumber / 2;
      arrayCopy.lastIndexOf(dupCheck) !== arrayCopy.indexOf(dupCheck) &&
      !pairMatch.includes(dupCheck)
        ? pairMatch.push(arrayCopy[index])
        : null;
    }
  }
  return pairMatch.map((element) => [matchNumber - element, element]);
};

console.log(findPairsWhichSum([2, 4, 6, 2, 8, 8, 10], 16));

// const findPairsWhichSum = (array, matchNumber) => {
//     const arrayCopy = [...array];
//     const pairMatch = [];

//     for (let index = 0; index < array.length; index++) {
//       const subMatchNumber =
//         matchNumber / 2 !== index ? matchNumber - arrayCopy[index] : null;
//       if (
//         arrayCopy.indexOf(subMatchNumber) !== -1 &&
//         pairMatch.indexOf(subMatchNumber) === -1 &&
//         pairMatch.indexOf(arrayCopy[index]) === -1
//       ) {
//         pairMatch.unshift(arrayCopy[index]);
//       }
//     }
//     return pairMatch
//       .sort((a, b) => b - a)
//       .map((element) => [matchNumber - element, element]);
//   };
