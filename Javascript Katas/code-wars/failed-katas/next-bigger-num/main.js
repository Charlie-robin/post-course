// Create a function that takes a positive integer and returns the next bigger number
//  that can be formed by rearranging its digits. For example:

// nextBigger(num: 12)   // returns 21
// nextBigger(num: 513)  // returns 531
// nextBigger(num: 2017) // returns 2071

const nextBigger = (number) => {
  const numArr = Array.from(String(number), Number);
  let splitIndex;
  let splitNum;
  for (let index = numArr.length - 1; index > -1; index--) {
    if (numArr[index] > numArr[index - 1]) {
      splitIndex = index;
      splitNum = numArr[index];
      break;
    }
  }
  const leftSide = [...numArr.slice(0, splitIndex - 1)];
  const rightSide = [...numArr.slice(splitIndex - 1)];
  const flipSide = [...rightSide.slice(0, 2)].reverse();
  const remFlip = [...rightSide.slice(2)];

  const result = parseInt([...leftSide, ...flipSide, ...remFlip].join(""));
  return result === number ? -1 : result;
};

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(2017));
