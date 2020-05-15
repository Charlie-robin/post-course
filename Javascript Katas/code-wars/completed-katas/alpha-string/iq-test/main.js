// to find out which one of the given numbers differs from the others

// qTest("2 4 7 8 10") => 3
// // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2
// // Second number is even, while the rest of the numbers are odd

const iqTest = (string) => (isEven(string) ? getIndex(string, "odd") : getIndex(string, "even"));

const isEven = (string) =>
  string.split(" ").filter((element) => Number.isInteger(element / 2)).length > 1;

const getIndex = (string, type) => {
  let result = [];
  if (type === "odd") {
    result = string
      .split(" ")
      .map((element, index) => (!Number.isInteger(element / 2) ? index + 1 : ""));
  } else {
    result = string
      .split(" ")
      .map((element, index) => (Number.isInteger(element / 2) ? index + 1 : ""));
  }
  return parseInt(result.filter((element) => element));
};

// console.log(iqTest("2 4 7 8 10"));
console.log(isEven("2 4 7 8 10"));
console.log(isEven("2 3 3"));

console.log(iqTest("2 4 7 8 10"));
console.log(iqTest("2 3 3"));

// not finished
