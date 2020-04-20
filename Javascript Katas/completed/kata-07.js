// How do you reverse the words in a sentence?

const reverseSentance = (string) => string.split(" ").reverse().join(" ");

console.log(reverseSentance("Welcome to the jungle"), "jungle the to Welcome");
console.log(reverseSentance("Disco biscuits baby 12345"), "12345 baby biscuits Disco");

