// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

const createPhoneNumber = (numArray) =>
  numArray
    .map((element, index) => {
      switch (index) {
        case 0:
          return "(" + element;
        case 2:
          return element + ") ";
        case 5:
          return element + "-";
        default:
          return element;
      }
    })
    .join("");

const createPhoneNumber = (numArray) =>
  numArray
    .map((element, index) => {
      if (index === 0) {
        return "(" + element;
      } else if (index === 2) {
        return element + ") ";
      } else if (index === 5) {
        return element + "-";
      } else {
        return element;
      }
    })
    .join("");

console.log(
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890"
);
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
