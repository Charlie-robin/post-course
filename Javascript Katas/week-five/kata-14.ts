// How do you swap two numbers without using a third variable?

export const swapWithoutThirdVariable = (numArray) => [
  numArray[0] + numArray[1] - numArray[0],
  numArray[1] + numArray[0] - numArray[1],
];
console.log(swapWithoutThirdVariable([5, 10]));
