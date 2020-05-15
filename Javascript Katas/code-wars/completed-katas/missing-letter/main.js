// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
const letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const findMissingLetter = (array) => {
  const caps = isCaps(array);
  const arrCopy = caps ? array.join(" ").toLowerCase().split("") : array;

  const sliceFrom = letterArray.indexOf(arrCopy[0]);
  const lastIndex = arrCopy.length - 1;
  const sliceTo = letterArray.indexOf(arrCopy[lastIndex]);

  const result = letterArray
    .slice(sliceFrom, sliceTo)
    .filter((element) => arrCopy.indexOf(element) < 0);

  return caps ? result.join(" ").toUpperCase().split("") : result;
};

const isCaps = (array) => array.join("") === array.join("").toUpperCase();

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["e", "f", "g", "h", "j"]));
console.log(findMissingLetter(["J", "K", "L", "N", "O"]));
