// How do you find all permutations of a string?

export const allPermutations = (string) => {
  const stringArr = string.split("");
  const output = [];

  const swapInPlace = (arrToSwap, indexA, indexB) => {
    const temp = arrToSwap[indexA];
    arrToSwap[indexA] = arrToSwap[indexB];
    arrToSwap[indexB] = temp;
  };

  const generate = (n, heapArr) => {
    if (n === 1) {
      output.push(heapArr.slice());
      return;
    }
    generate(n - 1, heapArr);
    for (let index = 0; index < n - 1; index++) {
      if (n % 2 === 0) {
        swapInPlace(heapArr, index, n - 1);
      } else {
        swapInPlace(heapArr, 0, n - 1);
      }
      generate(n - 1, heapArr);
    }
  };

  generate(stringArr.length, stringArr.slice());

  return output.map((element) => element.join(""));
};
