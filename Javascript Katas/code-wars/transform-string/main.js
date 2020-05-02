// "HeLovesCheeseBiscuits" this string into this "He loves cheese biscuits"

const transformString = (string) =>
string
.split("")
.map((element, index) =>
element === element.toUpperCase() && index !== 0 ? " " + element.toLowerCase() : element
)
.join("");

console.log(transformString("HeLovesCheeseBiscuits"));

// const lowerCase = (array) =>
//   array.map((element, index) => (index !== 0 ? element.toLowerCase() : element)).join("");
