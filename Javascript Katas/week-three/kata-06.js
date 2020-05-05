// How do you find all pairs of an integer array whose sum is equal to a given number?

const findPairsWhichSum = (array, match) => {
  const arrCopy = [...array];
  const result = [];

  for (const number in arrCopy) {
    const matchNum = match - number;
    const matchPair = arrCopy.map((element,index) => element === matchNum );
    result.push(matchPair);
  }
  return result;
};

console.log(findPairsWhichSum([1, 2, 3, 1], 2));
