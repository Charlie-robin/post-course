// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
const letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const alphabetNumPosition = (string) =>
  string
    .toLowerCase()
    .split("")
    .map((element) => (letterArray.indexOf(element) >= 0 ? letterArray.indexOf(element) + 1 : ""))
    .filter((element) => element !== "")
    .join(" ");

console.log(alphabetNumPosition("haaaaaallo hello !!"));

console.log(letterArray.indexOf("a")+1)