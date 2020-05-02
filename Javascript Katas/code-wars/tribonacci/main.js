//So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

const tribonacci = (array, goal) => {
  const arrCopy = [...array];
  const sequence = [...array];
  let result;

  if (sequence.length <= 3) {
    result = arrCopy.reduce((acc, cur) => acc + cur);
    sequence.push(result);

  } else if (sequence.length < goal && sequence.length > 3) {
    result = arrCopy
      .reverse()
      .slice(0, 3)
      .reduce((acc, cur) => acc + cur);
    sequence.push(result);
  }
  return sequence.length !== goal && sequence !== [] ? tribonacci(sequence, goal) : sequence;
};

// console.log(tribonacci([1, 1, 1], 10));
console.log(tribonacci([0.5,0.5,0.5],30)); //[0, 0, 1, 1, 2, 4, 7, 13, 24, 44]
