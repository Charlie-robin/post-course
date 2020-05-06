// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

// digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6

const numReducer = (array) => array.reduce((prev, cur) => prev + cur);

const digital_root = (number) => {
  const numArr = Array.from(String(number), Number);
  return numArr.length > 1 ? digital_root(numReducer(numArr)) : parseFloat(numArr);
};

console.log(digital_root(942));
