// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]

const sortArray = (array) => {
  const oddArray = array.filter((element) => !Number.isInteger(element / 2)).sort((a, b) => a - b);
  const result = [];
  for (let index = 0; index < array.length; index++) {
    if (!Number.isInteger(array[index] / 2)) {
      result[index] = oddArray[0];
      oddArray.shift();
    } else {
      result[index] = array[index];
    }
  }
  return result;
};

console.log(sortArray([5, 3, 2, 8, 1, 4]));
