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