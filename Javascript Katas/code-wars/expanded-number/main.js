// Write Number in Expanded Form
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const zeroAdder = (number, numNeeded) => {
  let total = number.toString();
  for (let index = 0; index < numNeeded; index++) {
    total += "0";
  }
  return parseFloat(total);
};

const expandedForm = (number) =>
  Array.from(String(number), Number)
    .reverse()
    .map((element, index) => zeroAdder(element, index))
    .filter((element) => element)
    .reverse()
    .join(" + ");

console.log(expandedForm(700304));
console.log(zeroAdder(1,2))