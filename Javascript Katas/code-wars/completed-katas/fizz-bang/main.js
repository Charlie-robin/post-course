// FizzBuzz++ (Node.js)
// Looking for: General programming, succinctness
// Time allocation: Approximately 60 minutes
// Notes: If you are not familiar with Node.js feel free to answer using JavaScript in a browser environment and adapt the specification to this environment to the best of your ability.
// Write a script that will be executed from the command line.

// The script should echo the numbers 1 to 500 except in the following cases:
// If the number is divisible by both 3 and 5 the script should echo: 'FIZZBUZZ'
// If the number is divisible by 3 the script should echo: 'FIZZ'
// If the number is divisible by 5 the script should echo: 'BUZZ'
// Each output should be on a new line.
// Extension:
// If the number is prime it should log 'FIZZBUZZ++'

// time 32min

const divisibleByThree = (number) => {
  const numArray = Array.from(String(number), Number);
  let numSum = 0;
  numArray.forEach((num) => (numSum += num));
  return Number.isInteger(numSum / 3);
};

const divisibleByFive = (number) => {
  const numArray = Array.from(String(number), Number);
  const finalDigit = numArray.length - 1;
  return numArray[finalDigit] === 5 || numArray[finalDigit] === 0 ? true : false;
};

const logFizzBuzz = (numberTotal) => {
  for (let index = 1; index <= numberTotal; index++) {
    let logNum = index;
    if (divisibleByThree(index)) {
      logNum = divisibleByFive(index) ? "FIZZBUZZ" : "FIZZ";
    } else if (divisibleByFive(index)) {
      logNum = "BUZZ";
    }
    console.log(logNum);
  }
};

logFizzBuzz(500);
