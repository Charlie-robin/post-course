// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).

const checkRow = (array) =>
  array.filter((element, index, filArray) => element === filArray[0]).length ===
  3;

const horizontalCheck = (array) =>
  array.filter((element) => checkRow(element)).reduce((acc, val) => acc.concat(val), [])[0];

const verticalCheck = (flatArray) => {
  for (let index = 0; index < 3; index++) {
    if (
      flatArray[index] === flatArray[index + 3] &&
      flatArray[index] === flatArray[index + 6]
    ) {
      return flatArray[index];
    }
  }
};

const diagonalCheck = (flatArray, a, b, c) =>
  flatArray[a] === flatArray[b] && flatArray[a] === flatArray[c]
    ? flatArray[a]
    : null;

const isSolved = (array) => {
  const flatArray = array.reduce((acc, val) => acc.concat(val), []);
  if (horizontalCheck(array)) {
    return horizontalCheck(array);
  } else if (verticalCheck(flatArray)) {
    return verticalCheck(flatCopy);
  } else if (diagonalCheck(flatArray, 0, 4, 8)) {
    return diagonalCheck(flatArray, 0, 4, 8);
  } else if (diagonalCheck(flatArray, 2, 4, 6)) {
    return diagonalCheck(flatArray, 2, 4, 6);
  } else if (flatArray.includes(0)) {
    return -1;
  } else {
    return 0;
  }
};

console.log(isSolved([[1, 2, 2], [1, 1, 2], [2, 1, 1]]));
