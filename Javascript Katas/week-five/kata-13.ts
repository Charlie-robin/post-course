//How do you check if two strings are a rotation of each other?

export const areRotations = (stringOne, stringTwo) =>
  (stringTwo + stringTwo).includes(stringOne);

console.log(areRotations("hello","elloh"))