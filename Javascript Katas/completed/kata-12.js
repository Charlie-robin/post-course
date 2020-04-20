// 12. How can a given string be reversed using recursion?

const reverseStringRecursion = (string, array) => {
    const firstLetter = string.charAt(0);
    const restOfWord = string.substr(1);
    const reversedString = array || [];
  
  if (string !== "") {
    reversedString.unshift(firstLetter);
    reverseStringRecursion(restOfWord, reversedString);
  } 
    return reversedString.join("");
};

console.log(reverseStringRecursion("hello"));

