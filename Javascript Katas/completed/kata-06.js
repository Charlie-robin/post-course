// How do you find all pairs of an integer array whose sum is equal to a given number?

const findPairEqualToNumber = (array, matchNumber) => {
  const match = [];
  for (let index = 0; index < array.length; index++) {
    array.forEach((element) => element + array[index] === matchNumber ? match.push(element): null);
  }
  return match;
};

console.log(findPairEqualToNumber([6,2,3,5], 8));
console.log(findPairEqualToNumber([3,2,3,5], 7));
console.log(findPairEqualToNumber([203,297,300,444], 500));

