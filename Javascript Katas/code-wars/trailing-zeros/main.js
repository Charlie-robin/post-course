// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// zeros(6) = 1
// # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

// zeros(12) = 2
// # 12! = 479001600 --> 2 trailing zeros

const zeros = (number) => {
  let divider = 1;
  let sum = 0;

  while (divider <= number) {
    console.log(Math.floor(sum + number / (divider *= 5)));
    sum = Math.floor(sum + number / (divider *= 5));
  }
  return sum;
};

console.log(zeros(30));

// const zeros = (number) => {
//   const result = [];
//   const total = factorial(number).toString();

//   if (total.includes("0")) {
//     const factorialArr = total.split("").reverse();

//     for (let index in factorialArr) {
//       console.log(factorialArr);
//       if (factorialArr[index] === "0") {
//         result.push(factorialArr[index]);
//       } else {
//         break;
//       }
//     }
//   }
//   return result.length;
// };

// const factorial = (number) => {
//   if (number === 0 || number === 1) return 1;
//   for (var i = number - 1; i >= 1; i--) {
//     number *= i;
//   }
//   return number;
// };
