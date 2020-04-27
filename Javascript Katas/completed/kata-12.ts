// 12. How can a given string be reversed using recursion?

const reverseStringRecursion = (string, array) => {
    const firstLetter = string.charAt(0);
    const restOfString = string.substr(1);
    const reversedString = array || [];
  
  if (string !== "") {
    reversedString.unshift(firstLetter);
    reverseStringRecursion(restOfString, reversedString);
  } 
    return reversedString.join("");
};

console.log(reverseStringRecursion("hello"));

