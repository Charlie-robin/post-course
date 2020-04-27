// How do you swap two numbers without using a third variable?

// export const swapWithoutThirdVariable = (numberArray) => numberArray.reverse();

export const swapWithoutThirdVariable = (numberArray) => {
  let firstNum = numberArray[0];
  let secondNum = numberArray[1];

  firstNum = firstNum + secondNum;
  secondNum = firstNum - secondNum;
  firstNum = firstNum - secondNum;

  return [firstNum, secondNum];
};
// console.log(swapNumbers([10,15]), "15,10")
// console.log(swapNumbers([100,1995]),"1995, 100" )
// console.log(swapNumbers([-10,-15]), "-15, -10")
