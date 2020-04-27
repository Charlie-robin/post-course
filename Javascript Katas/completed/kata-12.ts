// 12. How can a given string be reversed using recursion?

export const reverseWithRecursion = (string) =>
  string === "" ? "" : reverseWithRecursion(string.substr(1)) + string.charAt(0);



// export const reverseWithRecursion = (string, array) => {
//     const firstLetter = string.charAt(0);
//     const restOfString = string.substr(1);
//     const reversedString = array || [];

//   if (string !== "") {
//     reversedString.unshift(firstLetter);
//     reverseWithRecursion(restOfString, reversedString);
//   }
//     return reversedString.join("");
// };
