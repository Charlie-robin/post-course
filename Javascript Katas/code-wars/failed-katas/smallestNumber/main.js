// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.

const nextSmaller = (number) => {
  // Number into Array
  let numArray = Array.from(String(number), Number);
  //Prev lexicographical permutation algorithm
  let pivot = numArray.reduce(
    (max, _, i) => (numArray[i - 1] > numArray[i] ? i : max),
    0
  );
  console.log(numArray[pivot]);
  let swap = numArray.reduce(
    (max, _, i) => (numArray[i] < numArray[pivot - 1] ? i : max),
    0
  );
  console.log(numArray[swap]);

  [numArray[swap], numArray[pivot - 1]] = [numArray[pivot - 1], numArray[swap]];
  console.log();
  return pivot && numArray[0]
    ? Number(numArray.concat(numArray.splice(pivot).reverse()).join(""))
    : -1;
};

// console.log(nextSmaller(21), 12);
console.log(nextSmaller(907), 790);
// console.log(nextSmaller(531), 513);
// console.log(nextSmaller(135), -1);
// console.log(nextSmaller(2071), 2017);
// console.log(nextSmaller(1027), -1);
// console.log(nextSmaller(414), 144);

// const allPermutations = (numArray) => {
//   const numArr = [...numArray];
//   const output = [];

//   const swapInPlace = (arrToSwap, indexA, indexB) => {
//     const temp = arrToSwap[indexA];
//     arrToSwap[indexA] = arrToSwap[indexB];
//     arrToSwap[indexB] = temp;
//   };

//   const generate = (n, heapArr) => {
//     if (n === 1) {
//       output.push(heapArr.slice());
//       return;
//     }
//     generate(n - 1, heapArr);
//     for (let index = 0; index < n - 1; index++) {
//       if (n % 2 === 0) {
//         swapInPlace(heapArr, index, n - 1);
//       } else {
//         swapInPlace(heapArr, 0, n - 1);
//       }
//       generate(n - 1, heapArr);
//     }
//   };

//   generate(numArr.length, numArr.slice());

//   return output
//     .filter((element) => element[0] !== 0)
//     .map((element) => parseInt(element.join("")))
//     .sort((a, b) => a - b);
// };

// const nextSmaller = (number) => {
//   const numArr = Array.from(String(number), Number);
//   const permutations = allPermutations(numArr);
//   const nextSmallest = permutations.indexOf(number) - 1;
//   return permutations[nextSmallest] ? permutations[nextSmallest] : -1;
// };
