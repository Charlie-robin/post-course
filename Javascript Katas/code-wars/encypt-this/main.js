// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

const encryptThis = (string) =>
  string
    .split(" ")
    .map(encryptWord)
    .join(" ");

const encryptWord = (string) =>
  string
    .split("")
    .map((element, index, array) => {
      const arrayLength = array.length - 1;
      switch (index) {
        case 0:
          return element.charCodeAt(0);
        case 1:
          return array[arrayLength];
        case arrayLength:
          return array[1];
      }
      return element;
    })
    .join("");

console.log(encryptThis("Hello"));
console.log(encryptThis("Hello world"));
