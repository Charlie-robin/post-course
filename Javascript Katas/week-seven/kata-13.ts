// How do you check if two strings are a rotation of each other?

export const areRotations = (stringOne, stringTwo) => (stringOne + stringOne).includes(stringTwo)

console.log(areRotations("abcd", "dabc"))
