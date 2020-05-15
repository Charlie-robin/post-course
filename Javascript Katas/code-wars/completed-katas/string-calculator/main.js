// Create a string calculator. User can input the desired calculation as a string and should be returned the correct answer.
// Examples:
// Input: '4 plus 2', Output: 6
// Input: '4 times 2', Output: 8
// Input: '4 divided by 2', Output: 2
// Input: '4 minus 2', Output: 2

// Extension: Should be able to chain functions
// Examples:
// Input: '4 plus 2 plus 10', Output: 16
// Input: '4 times 2 minus 1', Output: 7

// Extension extension: Should give feedback if input is incorrect
// Examples:
// Input: '4 plus plus 2', Output: 'Invalid input'
// Input: 'asdffas 2 plus 4', Output: 'Invalid input'

const findOperator = (string) => {
  const operatorStrings = ["plus", "divide", "times", "minus"];
  const operators = ["+", "/", "*", "-"];
  const indexNumber = operatorStrings.indexOf(string);
  return operators[indexNumber] ? operators[indexNumber] : string;
};

const simpleStringCalculator = (string) => {
    let stringArray = string.toLowerCase().split(" ").map((element) => findOperator(element)).join(" ");
    return eval(stringArray);
  };

console.log(simpleStringCalculator("4 times 2"))

const stringEquation = (array) => {
  let stringArray = array.map((element) => findOperator(element)).join(" ");
  return eval(stringArray);
};

const chainCalculator = (string) => {
    const stringArray = string.toLowerCase().split(" ");
    console.log(stringEquation(stringArray))
}

chainCalculator("4 plus 2 plus 10");

const checkArrayLength = (type, array) =>
  (type === "number" && array.length === 3) ||
  (type === "operator" && array.length === 1);

const checkNumber = (string) => (parseInt(string) ? true : string);

const checkOperator = (string) => {
  const operatorStrings = ["plus", "divide", "times", "minus"];
  return operatorStrings.indexOf(string) !== -1 ? true : false;
};

const stringCalculator = (string) => {
  const stringArray = string.toLowerCase().split(" ");
  const checkStringNumber = stringArray.filter((element) =>
    checkNumber(element)
  );
  const checkStringOperator = stringArray.filter((element) =>
    checkOperator(element)
  );
  result =
    checkArrayLength("number", checkStringNumber) &&
    checkArrayLength("operator", checkStringOperator)
      ? stringEquation(stringArray)
      : "Invalid Input";
  console.log(result);
};

stringCalculator("5 minus 5");
// console.log(stringToNumber("hello"))
// console.log(eval(parseInt("5") + 5))
// findOperator("5")
// console.log(findOperator("minus"))

// console.log(stringCalculator("4 plus 2"));
