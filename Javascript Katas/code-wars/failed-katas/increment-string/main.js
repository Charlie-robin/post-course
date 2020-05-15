// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

const incrementString = (string) => {
  const numbers = string.replace(/\D/g, "");
  const letters = string.replace(/\d+/g, "");
  const numLength = numbers.length;
  const addition = Number(numbers) + 1;
  const additionLength = addition.toString().length;
};

const addZeros = (total, number) =>
  number.length > total ? number : addZeros(total, "0" + number);

console.log(incrementString("foobar000"), "foobar001");
console.log(incrementString("foo"), "foo1");
console.log(incrementString("foobar001"), "foobar002");
console.log(incrementString("foobar99"), "foobar100");
console.log(incrementString("foobar099"), "foobar100");
console.log(incrementString(""), "1");

// const incrementString = (string) => {
//   const findNumbers = string
//     .split("")
//     .filter((element) => Number(element))
//     .join("");

//   const findString = string
//     .split("")
//     .filter((element) => !Number(element) && element !== "0")
//     .join("");
//   return findNumbers.length
//     ? string + 1
//     : findString + (Number(findNumbers) + 1);
// };
